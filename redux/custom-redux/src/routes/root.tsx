import React, { useEffect } from 'react'
import { Form, Link, NavLink, Outlet, redirect, useLoaderData, useNavigation, useSubmit } from 'react-router-dom'
import { getContacts, createContact } from '../contat';

//?: Here we can call ower API , i think
export async function loader({ request }: { request: any }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q as string | undefined);
  return { contacts, q };
}

//?: Similinar happens here, we can create a post and export this action in ower router
export async function action() {
  const contact = await createContact();
  // return { contact };
  return redirect(`/contacts/${contact.id}/edit`)
}

const RootLayout = () => {

  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();
  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

  return (

    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              className={searching ? "loading" : ""}
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form,{replace:!isFirstSearch})
              }}
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>
          <Form method='post'>
            <button type='submit'>New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact: any) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
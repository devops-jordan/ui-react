import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getContacts(query?: string) {
  await fakeNetwork(`getContacts:${query}`);
  let contacts: any = await localforage.getItem("contacts");
  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now() };
  let contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id: string | undefined) {
  await fakeNetwork(`contact:${id}`);
  let contacts: any = await localforage.getItem("contacts");
  let contact = contacts.find((contact: any) => contact.id === id);
  return contact ?? null;
}

export async function updateContact(id: string | undefined, updates: any) {
  await fakeNetwork();
  let contacts: any = await localforage.getItem("contacts");
  let contact = contacts.find((contact: any) => contact.id === id);
  if (!contact) throw new Error("No contact found for " + id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id: string | undefined) {
  let contacts: any = await localforage.getItem("contacts");
  let index = contacts.findIndex((contact: any) => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts: any) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: any = {};

async function fakeNetwork(key?: any) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}
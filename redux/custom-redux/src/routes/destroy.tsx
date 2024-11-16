import React from 'react'
import { deleteContact } from '../contat';
import { redirect } from 'react-router-dom';


export async function action({ params }:{params:any }) {
  throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}

const Destroy = () => {
  return (
    <div>Destroy</div>
  )
}

export default Destroy
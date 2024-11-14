import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'

import Contact, { loader as contactLoader } from './routes/contact'
import RootLayout, { loader as rootLoader, action as rootAction } from './routes/root'
import Edit from './routes/edit'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "contacts/:contactId/edit",
        element: <Edit />,
        loader: contactLoader
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

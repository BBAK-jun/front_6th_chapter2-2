import AdminPage from '@/basic/pages/admin/page';
import ShoppingPage from '@/basic/pages/shopping/page';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/index.basic.html',
    Component: ShoppingPage,
  },
  {
    path: '/index.basic.html/admin',
    Component: AdminPage,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

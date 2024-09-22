import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { ROUTER_LIST } from './router';

const router = createBrowserRouter(
	ROUTER_LIST.map((route) => ({
		path: route.path,
		element: route.element,
	})),
);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

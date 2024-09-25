import { A11y } from './screens/a11y';
import { Css } from './screens/css';
import { General } from './screens/general';
import { Home } from './screens/home';
import { Html } from './screens/html';
import { Javascript } from './screens/javascript';

interface IRouterList {
	path: string;
	element: JSX.Element;
}

export const ROUTER_LIST: IRouterList[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/general',
		element: <General />,
	},
	{
		path: '/html',
		element: <Html />,
	},
	{
		path: '/css',
		element: <Css />,
	},
	{
		path: '/javascript',
		element: <Javascript />,
	},
	{
		path: '/a11y',
		element: <A11y />,
	},
	{
		path: '/test',
		element: <div>Página Testes</div>,
	},
	{
		path: '/performance',
		element: <div>Página Perfomance</div>,
	},
	{
		path: '/network',
		element: <div>Página Conexão</div>,
	},
	{
		path: '/code',
		element: <div>Página Código</div>,
	},
	{
		path: '/others',
		element: <div>Página Diversos</div>,
	},
];

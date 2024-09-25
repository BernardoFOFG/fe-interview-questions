import { Home } from './screens/home';
import { Html } from './screens/html';

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
		element: <Html />,
	},
	{
		path: '/html',
		element: <div>Página HTML</div>,
	},
	{
		path: '/css',
		element: <div>Página CSS</div>,
	},
	{
		path: '/javascript',
		element: <div>Página Javascript</div>,
	},
	{
		path: '/a11y',
		element: <div>Página A11y</div>,
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

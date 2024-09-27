import { A11y } from './screens/a11y';
import { Coding } from './screens/coding';
import { Connection } from './screens/connection';
import { Css } from './screens/css';
import { Fun } from './screens/fun';
import { General } from './screens/general';
import { Home } from './screens/home';
import { Html } from './screens/html';
import { Javascript } from './screens/javascript';
import { Perfomance } from './screens/performance';
import { Test } from './screens/test';

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
		path: '/testing',
		element: <Test />,
	},
	{
		path: '/performance',
		element: <Perfomance />,
	},
	{
		path: '/network',
		element: <Connection />,
	},
	{
		path: '/coding',
		element: <Coding />,
	},
	{
		path: '/fun',
		element: <Fun />,
	},
];

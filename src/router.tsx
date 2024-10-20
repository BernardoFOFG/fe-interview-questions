import Home from './screens/home.mdx';
import General from './screens/general.mdx';
import Html from './screens/html.mdx';
import Css from './screens/css.mdx';
import Javascript from './screens/javascript.mdx';
import A11y from './screens/a11y.mdx';
import Test from './screens/test.mdx';
import Coding from './screens/coding.mdx';
import Connection from './screens/connection.mdx';
import Fun from './screens/fun.mdx';
import Perfomance from './screens/performance.mdx';

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

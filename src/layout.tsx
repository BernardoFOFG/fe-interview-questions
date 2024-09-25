import type { ReactNode } from 'react';
import { Header } from './components/header';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<main className="max-w-4xl mx-auto py-8 px-2 h-screen flex flex-col">
			<Header />
			{children}
		</main>
	);
};

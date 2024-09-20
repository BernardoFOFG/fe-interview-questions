import type { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<main className="max-w-4xl mx-auto px-2 mt-8 flex flex-col">
			{children}
		</main>
	);
};

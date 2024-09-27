import type { ReactNode } from 'react';

interface CodeCardProps {
	children: ReactNode;
}
export const CodeCard = ({ children }: CodeCardProps) => {
	return <pre className="p-2 rounded-lg bg-neutral-950 flex">{children}</pre>;
};

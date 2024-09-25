import type { ReactNode } from 'react';
import { ListItem } from './list-item';

interface SectionQuestionsProps {
	title: string;
	questions?: string[];
	children?: ReactNode;
}

export const SectionQuestions = ({
	title,
	questions,
	children,
}: SectionQuestionsProps) => {
	return (
		<section className="flex flex-col gap-6 my-8">
			<div>
				<h1 className="base:text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-white/80 bg-clip-text text-transparent leading-none">
					{title}
				</h1>
			</div>

			{questions && (
				<ul className="space-y-4">
					{questions.map((v) => (
						<ListItem content={v} key={v} />
					))}
				</ul>
			)}

			{children && children}
		</section>
	);
};

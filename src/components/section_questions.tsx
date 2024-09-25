interface SectionQuestionsProps {
	title: string;
	questions: string[];
}

export const SectionQuestions = ({
	title,
	questions,
}: SectionQuestionsProps) => {
	return (
		<section className="flex flex-col gap-6 mt-8">
			<div>
				<h1 className="text-7xl font-bold bg-gradient-to-r from-primary to-white/80 bg-clip-text text-transparent leading-none">
					{title}
				</h1>
			</div>

			<ul className="space-y-4">
				{questions.map((v) => (
					<li key={v} className="flex gap-2 items-center">
						<span className="size-2 bg-primary rounded-full" />
						<span className="text-2xl">{v}</span>
					</li>
				))}
			</ul>
		</section>
	);
};

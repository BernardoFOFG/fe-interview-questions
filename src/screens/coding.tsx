import { Layout } from '../layout';
import { SectionQuestions } from '../components/section_questions';
import { CodeCard } from '../components/code-card';
import { CODING_QUESTIONS } from '../constants/questions';

export const Coding = () => {
	return (
		<Layout>
			<SectionQuestions title="Perguntas de Código">
				<div className="flex flex-col gap-2">
					{CODING_QUESTIONS.map((v) => (
						<div key={v} className="space-y-2">
							<h3 className="font-bold text-xl">
								Pergunta: Qual é a saída desse código?
							</h3>
							<CodeCard>{v}</CodeCard>
						</div>
					))}
				</div>
			</SectionQuestions>
		</Layout>
	);
};

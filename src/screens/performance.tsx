import { SectionQuestions } from '../components/section_questions';
import { PERFORMANCE_QUESTIONS } from '../constants/questions';
import { Layout } from '../layout';

export const Perfomance = () => {
	return (
		<Layout>
			<SectionQuestions
				title="Perguntas de Performance"
				questions={PERFORMANCE_QUESTIONS}
			/>
		</Layout>
	);
};

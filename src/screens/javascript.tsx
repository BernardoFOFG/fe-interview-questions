import { SectionQuestions } from '../components/section_questions';
import { JAVASCRIPT_QUESTIONS } from '../constants/questions';
import { Layout } from '../layout';

export const Javascript = () => {
	return (
		<Layout>
			<SectionQuestions
				title="Perguntas de Javascript"
				questions={JAVASCRIPT_QUESTIONS}
			/>
		</Layout>
	);
};

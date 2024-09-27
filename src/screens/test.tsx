import { SectionQuestions } from '../components/section_questions';
import { TEST_QUESTIONS } from '../constants/questions';
import { Layout } from '../layout';

export const Test = () => {
	return (
		<Layout>
			<SectionQuestions
				title="Perguntas de Testes"
				questions={TEST_QUESTIONS}
			/>
		</Layout>
	);
};

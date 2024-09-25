import { SectionQuestions } from '../components/section_questions';
import { GENERAL_QUESTIONS } from '../constants/questions';
import { Layout } from '../layout';

export const General = () => {
	return (
		<Layout>
			<SectionQuestions
				title="Perguntas Gerais"
				questions={GENERAL_QUESTIONS}
			/>
		</Layout>
	);
};

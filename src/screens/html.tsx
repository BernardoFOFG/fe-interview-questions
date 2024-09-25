import { SectionQuestions } from '../components/section_questions';
import { HTML_QUESTIONS } from '../constants/questions';
import { Layout } from '../layout';

export const Html = () => {
	return (
		<Layout>
			<SectionQuestions title="Perguntas de HTML" questions={HTML_QUESTIONS} />
		</Layout>
	);
};

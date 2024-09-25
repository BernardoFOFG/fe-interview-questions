import { Layout } from '../layout';
import { SectionQuestions } from '../components/section_questions';
import { CSS_QUESTIONS } from '../constants/questions';

export const Css = () => {
	return (
		<Layout>
			<SectionQuestions title="Perguntas de CSS" questions={CSS_QUESTIONS} />
		</Layout>
	);
};

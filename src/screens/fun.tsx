import { SectionQuestions } from '../components/section_questions';
import { OTHERS_QUESTIONS } from '../constants/questions';
import { Layout } from '../layout';

export const Fun = () => {
	return (
		<Layout>
			<SectionQuestions
				title="Perguntas Diversas"
				questions={OTHERS_QUESTIONS}
			/>
		</Layout>
	);
};

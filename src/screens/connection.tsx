import { ListItem } from '../components/list-item';
import { SectionQuestions } from '../components/section_questions';
import { Layout } from '../layout';

export const Connection = () => {
	return (
		<Layout>
			<SectionQuestions title="Perguntas de Conexão">
				<ul className="space-y-4">
					<ListItem content="Tradicionalmente, por que era melhor servir os ativos de um site a partir de múltiplos domínios?" />
					<ListItem content="Faça o seu melhor para descrever o processo desde o momento em que você digita a URL de um site até ele terminar de carregar na sua tela." />
					<ListItem content="Quais são as diferenças entre Long-Polling, Websockets e Server-Sent Events?" />
					<ListItem content="Explique os seguintes cabeçalhos de requisição e resposta:" />
					<ul className="space-y-2 px-4">
						<ListItem content="Diferença entre Expires, Date, Age e If-Modified-…" />
						<ListItem content="Do Not Track" />
						<ListItem content="Cache-Control" />
						<ListItem content="Transfer-Encoding" />
						<ListItem content="ETag" />
						<ListItem content="X-Frame-Options" />
					</ul>
					<ListItem content="O que são métodos HTTP? Liste todos os métodos HTTP que você conhece e explique-os." />
					<ListItem content="O que é pré-busca de domínio e como isso ajuda no desempenho?" />
					<ListItem content="O que é um CDN e qual é o benefício de usar um?" />
				</ul>
			</SectionQuestions>
		</Layout>
	);
};

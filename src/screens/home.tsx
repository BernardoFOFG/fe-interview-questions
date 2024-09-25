import { Layout } from '../layout';

export const Home = () => {
	return (
		<Layout>
			<div className="flex flex-col items-center space-y-3">
				<h1 className="base:text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-white/80 bg-clip-text text-transparent leading-none">
					Perguntas e respostas para entrevista de Front-end
				</h1>
				<p className="base:text-xl md:text-3xl">
					Aqui teremos uma lista completa de diversas perguntas focadas para
					entrevista em front-end, o intuito é fazer você navegar pelas
					perguntas e fazer uma auto avaliação sobre suas habilidades atuais.
				</p>
				<p className="base:text-base md:text-xl">
					Esse projeto surgiu como uma ideia de por meus conhecimentos em
					prática, e também te fazer refletir um pouco sobre seus estudos.{' '}
					<strong>Viu algo de errado ou quer contruibir?</strong> Veja mais em{' '}
					<a href="/">guia de contribuição</a>
				</p>
			</div>
		</Layout>
	);
};

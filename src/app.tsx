import { StarIcon } from 'lucide-react';
import { Layout } from './layout';
import { NAVIGATION_LIST } from './constants';
import useGetUrl from './hook/get-url';
import GitHubButton from 'react-github-btn';

export const App = () => {
	const { currentURL } = useGetUrl();
	return (
		<Layout>
			<section className="flex flex-col items-center justify-start gap-4 h-full py-8 px-2">
				<div className="flex flex-col w-full gap-3">
					<a
						href="/"
						className="flex items-center gap-3 bg-gradient-to-r from-primary to-white/80 bg-clip-text text-transparent transition-all hover:opacity-70"
					>
						<StarIcon className="size-5 fill-primary" />
						<span className="mt-1.5 text-lg">
							Front-end Perguntas de Entrevistas
						</span>
					</a>
					<div className="h-px w-full bg-white/20" />

					<div className="flex gap-3 items-center py-8 text-xl">
						<h3>
							<strong>Perguntas:</strong>
						</h3>
						<nav>
							<ul className="flex items-center gap-3">
								{NAVIGATION_LIST.map((item) => {
									return (
										<li key={item.title} className="relative">
											<a
												href={item.href}
												className={`relative hover:text-primary transition-all 
											before:content-[''] before:h-px before:absolute before:bg-primary before:-bottom-1 before:left-0 before:transition-all before:duration-300 before:ease-in-out
											${currentURL === item.href ? 'text-primary before:w-full' : 'before:w-0 hover:before:w-full'}`}
											>
												{item.title}
											</a>
										</li>
									);
								})}
							</ul>
						</nav>
					</div>

					<GitHubButton href="https://github.com/bernardofofg/fe-interview-questions" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Star buttons/github-buttons on GitHub">Star</GitHubButton>
				</div>
				<div className="flex flex-col items-center space-y-3">
					<h1 className="text-7xl font-bold bg-gradient-to-r from-primary to-white/80 bg-clip-text text-transparent leading-none">
						Perguntas e respostas para entrevista de Front-end
					</h1>
					<p className="text-3xl">
						Aqui teremos uma lista completa de diversas perguntas focadas para
						entrevista em front-end, o intuito é fazer você navegar pelas
						perguntas e fazer uma auto avaliação sobre suas habilidades atuais.
					</p>
				</div>
				<div>
					<p className='text-xl'>
						Esse projeto surgiu como uma ideia de por meus conhecimentos em
						prática, e também te fazer refletir um pouco sobre seus estudos.{' '}
						<strong>Viu algo de errado ou quer contruibir?</strong> Veja mais em{' '}
						<a href="/">guia de contribuição</a>
					</p>
				</div>
				<div className='mt-auto flex w-full flex-col gap-1 text-sm'>
					<p>Todos direitos reservados 2024. Projeto desenvolvido por <a className='text-primary hover:opacity-70 transition-all font-bold' href="https://github.com/BernardoFOFG/">Bernardo Filipe</a></p>
					<p>Curioso sobre o intuito desse projeto? <a className='text-primary hover:opacity-70 transition-all font-bold' href="/about">
						Clique aqui e saiba mais</a></p>
				</div>
			</section>
		</Layout>
	);
};

import { StarIcon } from 'lucide-react';
import useGetUrl from '../hook/get-url';
import { NAVIGATION_LIST } from '../constants';
import GitHubButton from 'react-github-btn';

export const Header = () => {
	const { currentURL } = useGetUrl();
	return (
		<header className="flex flex-col items-center justify-start gap-4">
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

				<div className="flex gap-3 items-center base:py-2 md:py-8 text-xl">
					<h3>
						<strong>Perguntas:</strong>
					</h3>
					<nav className="overflow-auto">
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

				<GitHubButton
					href="https://github.com/bernardofofg/fe-interview-questions"
					data-color-scheme="no-preference: light; light: light; dark: dark;"
					data-size="large"
					data-show-count="true"
					aria-label="Star buttons/github-buttons on GitHub"
				>
					Star
				</GitHubButton>
			</div>
		</header>
	);
};

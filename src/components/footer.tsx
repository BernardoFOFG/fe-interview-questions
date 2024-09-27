export const Footer = () => {
	return (
		<footer className="flex w-full flex-col gap-1 text-sm h-full justify-end base:mt-8 md:mt-0">
			<p>
				Todos direitos reservados 2024. Projeto desenvolvido por{' '}
				<a
					className="text-primary hover:opacity-70 transition-all font-bold"
					href="https://github.com/BernardoFOFG/"
				>
					Bernardo Filipe
				</a>
			</p>
			<p>
				Curioso sobre o intuito desse projeto?{' '}
				<a
					className="text-primary hover:opacity-70 transition-all font-bold"
					href="/about"
				>
					Clique aqui e saiba mais
				</a>
			</p>
		</footer>
	);
};

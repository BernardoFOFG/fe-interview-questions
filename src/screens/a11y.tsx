import { ListItem } from '../components/list-item';
import { SectionQuestions } from '../components/section_questions';
import { Layout } from '../layout';

export const A11y = () => {
	return (
		<Layout>
			<SectionQuestions title="Perguntas de Acessibilidade">
				<p className="text-2xl">
					As perguntas são agrupadas em quatro categorias:
				</p>
				<ul className="flex gap-2">
					<li className="underline">
						<a href="#geral">Geral</a>
					</li>
					<li className="underline">
						<a href="#tecnico">Técnico</a>
					</li>
					<li className="underline">
						<a href="#design">Design</a>
					</li>
					<li className="underline">
						<a href="#conteudo">Conteúdo</a>
					</li>
				</ul>
				<h2 id="geral" className="text-2xl">
					Geral
				</h2>
				<ul className="space-y-4">
					<ListItem content="Quem se beneficia da acessibilidade?" />
					<ListItem content="Como você definiria design inclusivo e/ou design universal?" />
					<ListItem
						content="Você pode dar um exemplo? (não precisa estar relacionado à
						web/tecnologia)"
					/>
					<ListItem content="Como sua abordagem à acessibilidade mudou ao longo do tempo?" />
					<ListItem
						content="	Nomeie algumas maneiras como o design responsivo ou mobile-first
						pode afetar a acessibilidade."
					/>
					<ListItem
						content="Quais são algumas preocupações de experiência do usuário (UX) ao
						usar iconografia em interfaces de usuário (UI)?"
					/>
					<ListItem
						content="	Com quais tecnologias assistivas (ATs) você está familiarizado
						(desktop e/ou móvel)?"
					/>
					<ListItem content="Qual o seu nível de habilidade com essas AT(s)?" />
					<ListItem content=" O que são links de pular (skip links)?" />
					<ListItem content="Quais benefícios eles fornecem?" />
					<ListItem content="Quais são algumas de suas limitações?" />
					<ListItem
						content="Quais são algumas das ferramentas disponíveis para testar a
						acessibilidade de um site ou aplicativo web?"
					/>
					<ListItem content="O que é WCAG?" />
					<ListItem content=" Quais são as diferenças entre conformidade A, AA e AAA?" />
					<ListItem
						content="	Como o uso de linguagem simples pode beneficiar a acessibilidade de
						um projeto?"
					/>
					<ListItem content=" Descreva instâncias em que você usaria um link ou botão." />
					<ListItem
						content="Descreva maneiras de transmitir o estado de um elemento ou
						componente que não sejam totalmente dependentes de visuais."
					/>
					<ListItem
						content="Como carrosséis podem ser problemáticos para usuários com
						deficiência?"
					/>
					<ListItem
						content="Como você convenceria seu gerente a alocar fundos para uma auditoria
						de acessibilidade?"
					/>
					<ListItem
						content="Descreva uma situação em que um colega tenha sido resistente às
						melhores práticas de acessibilidade ou design inclusivo."
					/>
					<ListItem
						content="Que tipo de estratégias você usa em situações como essas para ajudar
						a educar colegas de trabalho?"
					/>
					<ListItem content="Se alguém estiver buscando assumir um papel de liderança:" />
					<ListItem
						content="	Descreva o tipo de cultura em torno da acessibilidade que você
						criaria e como você faria isso."
					/>
					<ListItem
						content="	Quando há mais trabalho de acessibilidade do que a equipe pode
						lidar, como você prioriza?"
					/>
					<ListItem
						content="	Se um cliente/parte interessada não quiser pagar pela
						acessibilidade, o que você faria?"
					/>
				</ul>

				<h2 id="tecnico" className="text-2xl">
					Técnico
				</h2>
				<ul className="space-y-4">
					<ListItem
						content="	Quais métodos você pode usar para encontrar o nome acessível de um
						elemento?"
					/>
					<ListItem content=" O que é a árvore de acessibilidade?" />
					<ListItem
						content="Por que rems ou ems são preferíveis a pixels para definir o tamanho
						do texto?"
					/>
					<ListItem
						content="	Por que é importante permitir que o viewport seja redimensionado
						e/ou ampliado?"
					/>
					<ListItem
						content="	Como o atributo title é exposto às tecnologias
						assistivas?"
					/>
					<ListItem
						content="						Que tipo de elementos podem usar atributos title?
"
					/>
					<ListItem content="	Que tipo de informações são apropriadas para o uso com o atributo title" />
					<ListItem
						content="	Forneça um exemplo de quando você precisaria adicionar uma descrição
						a um elemento."
					/>
					<ListItem content=" Como você exporia essa descrição programaticamente?" />
					<ListItem content="	O que é uma armadilha de foco (focus trap) ou captura de foco?" />
					<ListItem content="	Descreva uma instância em que você precisaria de captura de foco." />
					<ListItem
						content="Descreva uma instância em que isso seria uma barreira de
						acessibilidade."
					/>
					<ListItem
						content="Descreva uma situação em que o atributo tabindex seria
						útil."
					/>
					<ListItem
						content="	Forneça um exemplo de quando o uso do atributo tabindex
						pode causar problemas."
					/>
					<ListItem
						content="O que são regiões de referência (landmark regions) e como podem ser
						úteis?"
					/>
					<ListItem
						content="	Em quais situações você usaria um botão de alternância (toggle
						button) em vez de um controle de switch ou uma caixa de seleção
						(checkbox)?"
					/>
					<ListItem content=" Descreva métodos para ocultar conteúdo:" />
					<ul>
						<ListItem content="De todos os usuários." />
						<ListItem content=" Somente dos usuários de leitores de tela." />
						<ListItem content="	De usuários videntes, mas não de usuários de leitores de tela." />
						<ListItem content="E por que você faria isso." />
					</ul>
					<ListItem content="		Forneça exemplos de uso **incorreto** comum de atributos ARIA." />
					<ListItem
						content="Além dos leitores de tela, quais outras tecnologias assistivas podem
						ser afetadas pelo uso de ARIA? Como?"
					/>
					<ListItem
						content="	Qual é a diferença entre os seguintes atributos: hidden
						, aria-hidden='true' e role='presentation'
						ou role='none'?"
					/>
					<ListItem
						content="	Descreva instâncias em que você precisaria usar
						aria-live"
					/>
					<ListItem
						content="	Que valores (como assertive ou polite)
						você daria ao atributo em diferentes situações?"
					/>

					<ListItem content="Como você marcaria uma fonte de ícone ou SVG para fins decorativos?" />
					<ListItem content="Conteúdo pseudo de CSS é entendido por leitores de tela?" />

					<ListItem content="Qual é o propósito do atributo alt para imagens?" />
					<ListItem
						content="	Você pode descrever o efeito de um alt vazio e/ou a
						falta do atributo em uma imagem?"
					/>
					<ListItem
						content="Em quais instâncias um alt vazio ou a ausência de
						alt seria apropriado?"
					/>
					<ListItem
						content="Como o texto alternativo para uma imagem pode variar dependendo do
						contexto em que a imagem é usada?"
					/>
					<ListItem
						content="	Como os svgs não aceitam o atributo alt,
						como você forneceria texto alternativo para esses gráficos?"
					/>
					<ListItem
						content="É necessário fornecer um atributo alt a uma imagem se
						ela for usada dentro de uma figure com um
						figcaption?"
					/>
					<ListItem
						content="Descreva as etapas que você segue ao revisar ou auditar um site ou
						aplicativo para acessibilidade."
					/>
					<ListItem
						content="Descreva uma instância em que um teste automatizado não sinalizaria
						um erro flagrante de acessibilidade."
					/>
					<ListItem
						content="Quando você recomendaria o uso de papéis ou atributos ARIA para
						resolver um problema de acessibilidade?"
					/>
					<ListItem
						content="Descreva seu processo para descobrir se um bug de acessibilidade é
						devido a um erro de desenvolvedor, navegador ou tecnologia
						assistiva."
					/>
					<ListItem
						content="Qual é a diferença entre os elementos legend,
						caption e label?"
					/>
					<ListItem content="Quais são suas semelhanças?" />
					<ListItem
						content="Descreva o propósito dos elementos de cabeçalho e título, e como
						eles são úteis em sites e aplicativos."
					/>
					<ListItem
						content="Descreva como você lidaria com o gerenciamento do foco do teclado em
						um aplicativo web de página única (SPA) ao mudar de rota."
					/>
					<ListItem content="Qual é o seu entendimento sobre 'cálculo do nome acessível' e como isso afeta a modificação da forma como os leitores de tela anunciam determinado conteúdo?" />
					<ListItem content="Quais são alguns problemas com a modificação do comportamento normal de rolagem? Por exemplo: rolagem infinita ou scrolljacking." />
					<ListItem content="Alguns widgets ARIA são atualmente melhor suportados em dispositivos com teclado físico, em vez de interfaces móveis/touch. Você está ciente de algum widget que seria descrito dessa forma e por quê?" />
				</ul>
			</SectionQuestions>
		</Layout>
	);
};

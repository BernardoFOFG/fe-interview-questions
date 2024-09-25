interface ListItemProps {
	content: string;
}

export const ListItem = ({ content }: ListItemProps) => {
	return (
		<>
			<li className="flex gap-2 items-center">
				<span className="min-w-2 min-h-2 bg-primary rounded-full" />
				<span className="base:text-lg md:text-xl">{content}</span>
			</li>
		</>
	);
};

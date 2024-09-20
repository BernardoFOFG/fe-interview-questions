import { useEffect, useState } from 'react';

export default function useGetUrl() {
	const [currentURL, setCurrentURL] = useState('');

	useEffect(() => {
		setCurrentURL(window.location.pathname);
	}, []);

	return {
		currentURL,
	};
}

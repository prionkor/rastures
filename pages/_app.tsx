import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/system';

import { theme } from '../utils';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;

import {
	createTheme,
	PaletteColor,
	PaletteColorOptions,
} from '@mui/material/styles';

// colors
const black: string = '#282828';

declare module '@mui/material/styles' {
	interface Theme {
		palette: Palette;
	}
	interface TypographyVariants {
		poster: React.CSSProperties;
	}
	interface Palette {
		tertiary: PaletteColor;
	}
	// options
	interface TypographyVariantsOptions {
		small?: React.CSSProperties;
	}
	interface PaletteOptions {
		tertiary: PaletteColorOptions;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		small: true;
	}
}
const palette = {
	primary: {
		main: '#FCC900',
		contrastText: black,
	},
	secondary: {
		main: '#FC5676',
	},
	tertiary: {
		main: '#19C9FC',
	},
};
export const theme = createTheme({
	palette,
	typography: {
		h1: {
			fontSize: '2rem',
			fontWeight: 'bold',
		},
		h3: {
			fontSize: '1.6rem',
			fontWeight: 'bold',
		},
		small: {
			fontSize: '0.8rem',
		},
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Raleway',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 25,
					border: `2px solid ${black}`,
					textTransform: 'none',
					fontWeight: 'bold',
					'&:hover': {
						backgroundColor: '#FC5676',
						color: 'white',
						borderColor: 'red',
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& fieldset': {
						borderStyle: 'solid',
						borderWidth: '2px',
						borderRadius: 30,
					},
					'& input': {
						paddingLeft: 30,
					},
					'& .MuiInputLabel-root:not(.MuiFormLabel-filled,.Mui-focused)': {
						paddingLeft: 10,
					},
				},
			},
		},
	},
});

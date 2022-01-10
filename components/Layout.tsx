import React from 'react';
import {
	Container,
	Grid,
	IconButton,
	Typography,
	SvgIconClasses,
	useMediaQuery,
	useTheme,
	Fade, // type
} from '@mui/material';
import { Box } from '@mui/system';

import PersonIcon from '@mui/icons-material/Person';
import Sidebar from '../components/Sidebar';
import { makeStyles } from '@mui/styles';

interface Props {
	title: string;
	icon: any;
	headerExtras?: any;
	maxWidth?: false | 'md' | 'lg';
}

const useStyles = makeStyles(theme => ({
	container: {
		paddingLeft: '8rem',
	},
}));

const Layout: React.FC<Props> = ({
	title,
	icon,
	headerExtras,
	maxWidth,
	children,
}) => {
	const classes = useStyles();

	return (
		<>
			<Sidebar />
			<Fade in timeout={1000}>
				<Container
					className={classes.container}
					maxWidth={maxWidth}
					style={{ paddingTop: 32 }}
				>
					<Grid container sx={{ height: '100vh' }}>
						<Grid item xs={12}>
							<Box display="flex" justifyContent="space-between" mb={4}>
								<Typography variant="h1">
									{icon} {title}
								</Typography>
								<Box>
									{headerExtras}
									<IconButton sx={{ backgroundColor: 'white' }}>
										<PersonIcon />
									</IconButton>
								</Box>
							</Box>
							{children}
						</Grid>
					</Grid>
				</Container>
			</Fade>
		</>
	);
};

Layout.defaultProps = {
	maxWidth: 'lg',
};

export default Layout;

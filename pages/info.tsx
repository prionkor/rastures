import {
	Button,
	Container,
	Fade,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import type { Theme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Paper from '../components/mui/Paper';
import styles from '../styles/Home.module.css';

const useStyles = makeStyles((theme: Theme) => ({
	field: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
}));

const Home: NextPage = () => {
	const classes = useStyles();
	return (
		<Container>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				sx={{ height: 'calc(100vh - 20px)' }}
			>
				<Grid item md={6}>
					<Fade in timeout={1000}>
						<Box>
							<Box display="flex" justifyContent="center" mb={2} mt={-20}>
								<Image
									src="/images/logo.svg"
									alt="Resturas"
									width={180}
									height={60}
								/>
							</Box>

							<Paper elevation={20}>
								<TextField
									fullWidth
									variant="outlined"
									label="What is the name of your restaurant?"
									className={classes.field}
									color="secondary"
									InputProps={{
										endAdornment: (
											<Button color="primary" variant="contained">
												<ArrowForwardIcon />
											</Button>
										),
									}}
								/>
							</Paper>
						</Box>
					</Fade>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;

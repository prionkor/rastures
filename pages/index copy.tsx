import {
	Button,
	Container,
	Grid,
	IconButton,
	TextField,
	Typography,
	Divider,
} from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import PersonIcon from '@mui/icons-material/Person';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';

import Paper from '../components/mui/Paper';
import styles from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// types
import type { Theme } from '@mui/material/styles';
import Layout from '../components/Layout';

const useStyles = makeStyles<Theme>(theme => ({
	field: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
}));

const Home: NextPage = () => {
	const classes = useStyles();
	return (
		<Layout
			title="Good Afternoon!"
			icon={<WbSunnyIcon />}
			headerExtras={
				<Button
					variant="contained"
					disableElevation
					color="primary"
					sx={{ marginRight: 1 }}
				>
					Edit Table Layout
				</Button>
			}
		>
			<Paper
				elevation={0}
				sx={{ backgroundColor: 'primary.main', pt: 5, pb: 5 }}
			>
				<Box display="flex" justifyContent="space-between" pl={4} pr={4}>
					<Box>
						<Typography variant="body1">Total Appointment today</Typography>
						<Typography variant="h3">45</Typography>
					</Box>
					<Divider flexItem orientation="vertical" />
					<Box>
						<Typography variant="body1">Total Appointment today</Typography>
						<Typography variant="h3">45</Typography>
					</Box>
					<Divider flexItem orientation="vertical" />

					<Box>
						<Typography variant="body1">Total Appointment today</Typography>
						<Typography variant="h3">45</Typography>
					</Box>
				</Box>
			</Paper>
		</Layout>
	);
};

export default Home;

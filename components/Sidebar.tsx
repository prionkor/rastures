import {
	Paper,
	MenuList,
	ListItemIcon,
	MenuItem,
	IconButton,
	Tooltip,
	Divider,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import GridOnIcon from '@mui/icons-material/GridOn';
import BookIcon from '@mui/icons-material/Book';

// types
import type { Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>(theme => ({
	root: {
		height: '100vh',
	},
	paper: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		paddingTop: theme.spacing(4),
		width: 100,
	},
	iconButton: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	divider: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
	},
}));

const Sidebar: React.FC = () => {
	const classes = useStyles();
	return (
		<Box display="flex" position="fixed" className={classes.root}>
			<Paper className={classes.paper}>
				<Box display="flex" justifyContent="center">
					<Link href="/" passHref>
						<a title="homepage">
							<Image
								src="/favicons/android-icon-48x48.png"
								alt="resturas"
								width={42}
								height={42}
							/>
						</a>
					</Link>
				</Box>
				<Box
					display="flex"
					justifyContent="center"
					flexDirection="column"
					mt={2}
				>
					<Divider className={classes.divider} />
					<Tooltip title="Edit table layout" placement="right">
						<IconButton className={classes.iconButton}>
							<DashboardIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Bookings" placement="right">
						<IconButton className={classes.iconButton}>
							<BookIcon />
						</IconButton>
					</Tooltip>
					<Divider className={classes.divider} />
					<Tooltip title="Edit table layout" placement="right">
						<Link href="/edit" passHref>
							<IconButton className={classes.iconButton}>
								<GridOnIcon />
							</IconButton>
						</Link>
					</Tooltip>
					<Tooltip title="Logout" placement="right">
						<IconButton className={classes.iconButton}>
							<PowerSettingsNewIcon />
						</IconButton>
					</Tooltip>
				</Box>
			</Paper>
		</Box>
	);
};

export default Sidebar;

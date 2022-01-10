import * as Yup from 'yup';
import { useState } from 'react';
import {
	Button,
	Container,
	Fade,
	Grid,
	Typography,
	CircularProgress,
} from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import type { Theme } from '@mui/material/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import {
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

import Paper from '../components/mui/Paper';
import { TextField } from '../components/MuiHookForm';

// firebase
const auth = getAuth();
const gAuthProvider = new GoogleAuthProvider();

const useStyles = makeStyles((theme: Theme) => ({
	field: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
}));

type FormValues = {
	email: string;
	password: string;
};

const schema: Yup.SchemaOf<FormValues> = Yup.object({
	email: Yup.string()
		.required('Email is required')
		.email('Invalid email')
		.defined(),
	password: Yup.string()
		.required('Password is required')
		.test(
			'password-invalid',
			'Passwords at least 8 character in length',
			value => value && value?.length >= 8
		)
		.defined(),
}).defined();

const Login: NextPage = () => {
	const classes = useStyles();
	const [loading, setLoading] = useState(false);
	const { control, handleSubmit } = useForm<FormValues>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) => {
		try {
			setLoading(true);
			const resp = await signInWithEmailAndPassword(auth, email, password);
			console.log(resp);
		} catch (e) {
			console.log(e);
		}
		setLoading(false);
	};

	const onClickGoogleSignIn: React.MouseEventHandler<HTMLAnchorElement> =
		async e => {
			e.preventDefault();
			try {
				setLoading(true);
				const resp = await signInWithPopup(auth, gAuthProvider);
				console.log(resp);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};

	return (
		<Container>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				sx={{ height: '100vh' }}
			>
				<Grid item md={4}>
					<Fade in timeout={1000}>
						<Box>
							<Paper elevation={20}>
								<Box display="flex" justifyContent="center">
									<Image
										src="/images/logo.svg"
										alt="Resturas"
										width={180}
										height={60}
									/>
								</Box>
								<Typography
									align="center"
									variant="h4"
									className={classes.field}
									mt={2}
									mb={2}
									fontWeight="bold"
								>
									Login
								</Typography>
								<Box position="relative">
									{loading && (
										<Box
											width="100%"
											height="100%"
											position="absolute"
											zIndex={2}
											backgroundColor="rgba(255,255,255,0.9)"
											alignItems="center"
											display="flex"
											justifyContent="center"
										>
											<CircularProgress color="secondary" />
										</Box>
									)}
									<TextField
										control={control}
										fullWidth
										variant="outlined"
										label="Email"
										type="email"
										name="email"
										className={classes.field}
										color="secondary"
									/>
									<TextField
										control={control}
										className={classes.field}
										fullWidth
										variant="outlined"
										name="password"
										label="Password"
										type="password"
										color="secondary"
									/>
									<Button
										className={classes.field}
										fullWidth
										variant="contained"
										color="primary"
										disableElevation
										size="large"
										onClick={handleSubmit(onSubmit)}
									>
										Login
									</Button>
									<Typography
										variant="small"
										align="center"
										component="p"
										mb={2}
									>
										Don't have an account? <Link href="/register">Signup</Link>
									</Typography>
									<Box display="flex" justifyContent="center">
										<a href="#" onClick={onClickGoogleSignIn}>
											<Image src="/images/google.svg" width={40} height={40} />
										</a>
									</Box>
								</Box>
							</Paper>
						</Box>
					</Fade>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;

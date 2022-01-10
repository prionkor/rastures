import { useState } from 'react';
import * as Yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import {
	Button,
	CircularProgress,
	Container,
	Fade,
	Grid,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import Image from 'next/image';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

import { TextField } from '../components/MuiHookForm';

import Paper from '../components/mui/Paper';
import styles from '../styles/Home.module.css';

// types
import type { NextPage } from 'next';
import type { Theme } from '@mui/material/styles';

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
	passwordConfirm: string;
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
	passwordConfirm: Yup.string()
		.defined()
		.required('Password Confirm is required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match'),
}).defined();

const Register: NextPage = () => {
	const classes = useStyles();
	const [loading, setLoading] = useState(false);
	const { control, handleSubmit } = useForm<FormValues>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: {
			email: '',
			password: '',
			passwordConfirm: '',
		},
	});

	const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) => {
		setLoading(true);

		try {
			const resp = await createUserWithEmailAndPassword(auth, email, password);
			console.log(resp);
		} catch (e) {
			console.log(e);
		}
		setLoading(false);
	};

	const onClickGoogleSignIn: React.MouseEventHandler<HTMLAnchorElement> =
		async e => {
			e.preventDefault();
			setLoading(true);
			try {
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
									mt={2}
									mb={2}
									fontWeight="bold"
								>
									Register
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
										className={classes.field}
										control={control}
										fullWidth
										variant="outlined"
										label="Email"
										type="email"
										name="email"
										color="secondary"
									/>
									<TextField
										className={classes.field}
										control={control}
										fullWidth
										variant="outlined"
										label="Password"
										type="password"
										name="password"
										color="secondary"
									/>
									<TextField
										className={classes.field}
										control={control}
										fullWidth
										variant="outlined"
										label="Retype Password"
										type="password"
										name="passwordConfirm"
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
										Register
									</Button>
									<Typography
										variant="small"
										align="center"
										component="p"
										mb={2}
									>
										Already an account? <Link href="/login">Login</Link>
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

export default Register;

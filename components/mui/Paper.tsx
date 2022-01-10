import { Paper as MuiPaper, PaperProps } from '@mui/material';

const Paper: React.FC<PaperProps> = ({ children, sx, ...props }) => {
	return (
		<MuiPaper sx={{ padding: 3, borderRadius: 3, ...sx }} {...props}>
			{children}
		</MuiPaper>
	);
};

export default Paper;

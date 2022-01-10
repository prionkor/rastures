import { Switch as MuiSwitch, FormControlLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const Switch = ({ control, name, label, onClick, ...props }) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, ...field } }) => (
				<FormControlLabel
					onClick={onClick}
					control={<MuiSwitch checked={value} {...field} {...props} />}
					label={label}
				/>
			)}
		/>
	);
};

Switch.propTypes = {
	control: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	color: PropTypes.string,
};

Switch.defaultValues = {
	color: 'primary',
	onClick: () => {},
};

export default Switch;

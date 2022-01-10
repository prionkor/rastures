import { useFormState, Controller } from 'react-hook-form';
import {
	RadioGroup as MuiRadioGroup,
	FormLabel,
	FormControl,
	FormHelperText,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const RadioGroup = ({ name, label, control, required, children, ...props }) => {
	const { errors } = useFormState({ control });
	const error = errors[name] ? errors[name].message : false;
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<FormControl required={required} component="fieldset" error={!!error}>
					{label && <FormLabel component="legend">{label}</FormLabel>}
					<MuiRadioGroup aria-label={label} {...field} {...props}>
						{children}
					</MuiRadioGroup>
					<FormHelperText>{error}</FormHelperText>
				</FormControl>
			)}
		/>
	);
};

RadioGroup.propTypes = {
	required: PropTypes.bool,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
};

RadioGroup.defaultProps = {
	required: false,
	label: null,
};

export default RadioGroup;

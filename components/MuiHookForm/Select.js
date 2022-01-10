import { useFormState, Controller } from 'react-hook-form';
import {
	Select as MuiSelect,
	InputLabel,
	FormControl,
	FormHelperText,
} from '@material-ui/core';
import PropTypes from 'prop-types';

/**
 *
 * Example:
 *
 * <Select
 *	fullWidth
 *	label="Select someting"
 *	name="foo"
 *	control={control}
 * >
 *	<MenuItem value="">
 *		<em>None</em>
 *	</MenuItem>
 *	<MenuItem value={10}>Ten</MenuItem>
 *	<MenuItem value={20}>Twenty</MenuItem>
 *		<MenuItem value={30}>Thirty</MenuItem>
 * </Select>
 */

const Select = ({ name, label, control, fullWidth, size, children }) => {
	const { errors } = useFormState({ control });
	const error = errors[name] ? errors[name].message : false;
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<FormControl
					variant="outlined"
					error={!!error}
					fullWidth={fullWidth}
					size={size}
				>
					<InputLabel id={`mui-rhf-label-${name}`}>{label}</InputLabel>
					<MuiSelect
						{...field}
						labelId={`mui-rhf-label-${name}`}
						id={`mui-rhf-select-${name}`}
						label={label}
					>
						{children}
					</MuiSelect>
					<FormHelperText>{error}</FormHelperText>
				</FormControl>
			)}
		/>
	);
};

Select.propTypes = {
	required: PropTypes.bool,
	control: PropTypes.object.isRequired,
	size: PropTypes.string,
};

Select.defaultProps = {
	required: false,
	fullWidth: true,
	size: 'medium',
};

export default Select;

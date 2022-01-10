import { Controller, useFormState } from 'react-hook-form';
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { TextField, FormControl, FormHelperText } from '@material-ui/core';
import { memo } from 'react';

const Autocomplete = ({ name, label, control, textFieldProps, ...props }) => {
	const { errors } = useFormState({ control });
	const error = errors[name] ? errors[name].message : false;
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, ...field } }) => (
				<FormControl error={!!error} fullWidth>
					<MuiAutocomplete
						{...field}
						{...props}
						renderInput={params => (
							<TextField
								fullWidth
								variant="outlined"
								type="text"
								label={label}
								{...params}
								{...textFieldProps}
							/>
						)}
						onChange={(_, val) => onChange(val)}
					/>
					<FormHelperText>{error}</FormHelperText>
				</FormControl>
			)}
		/>
	);
};

Autocomplete.propTypes = {
	required: PropTypes.bool,
	multiple: PropTypes.bool,
	textFieldProps: PropTypes.object,
};

Autocomplete.defaultProps = {
	required: false,
	multiple: false,
	textFieldProps: {},
};

export default memo(Autocomplete);

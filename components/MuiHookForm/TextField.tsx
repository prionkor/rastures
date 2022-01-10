import React, { memo } from 'react';
import * as objectPath from 'object-path-immutable';
import { useFormState, Controller, Control } from 'react-hook-form';
import {
	TextField as MuiTextField,
	FormControl,
	FormHelperText,
	TextFieldProps,
} from '@mui/material';

/**
 * Interface doesn't work here
 * @see https://stackoverflow.com/a/56085307/550907
 */
type Props = TextFieldProps & {
	name: string;
	control: Control;
};

const TextField: React.FC<Props> = ({
	name,
	label,
	control,
	multiline,
	minRows,
	maxRows,
	InputProps,
	type,
	color,
	...props
}) => {
	const { errors } = useFormState({ control });
	const fieldError = objectPath.get(errors, name);
	const error = fieldError ? fieldError?.message : false;

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<FormControl error={!!error} {...props}>
					<MuiTextField
						variant="outlined"
						type={type}
						label={label}
						color={color}
						multiline={multiline}
						minRows={minRows}
						maxRows={maxRows}
						InputProps={InputProps}
						{...field}
					/>
					<FormHelperText>{error}</FormHelperText>
				</FormControl>
			)}
		/>
	);
};

TextField.defaultProps = {
	required: false,
	fullWidth: true,
	multiline: false,
	minRows: undefined,
	maxRows: undefined,
	InputProps: undefined,
};

export default memo(TextField);

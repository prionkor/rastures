import { useFormState, Controller } from 'react-hook-form';
import { FormControl, FormHelperText, styled } from '@material-ui/core';
import {
	DateTimePicker as MuiDateTimePicker,
	DatePicker as MuiDatePicker,
	TimePicker as MuiTimePicker,
	MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import PropTypes from 'prop-types';
import DayJsUtils from '@date-io/dayjs';
import { ThemeProviderNoOverrides } from '../../utils/theme';

const DateTimePicker = ({ name, label, control, fullWidth, ...props }) => {
	const { errors } = useFormState({ control });
	const error = errors[name] ? errors[name].message : false;

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<FormControl error={!!error} fullWidth={fullWidth}>
					<ThemeProviderNoOverrides>
						<MuiPickersUtilsProvider utils={DayJsUtils}>
							<MuiDateTimePicker
								label={label}
								inputVariant="outlined"
								{...props}
								{...field}
							/>
						</MuiPickersUtilsProvider>
					</ThemeProviderNoOverrides>
					<FormHelperText>{error}</FormHelperText>
				</FormControl>
			)}
		/>
	);
};

DateTimePicker.propTypes = {
	required: PropTypes.bool,
	control: PropTypes.object.isRequired,
};

DateTimePicker.defaultProps = {
	required: false,
	fullWidth: true,
};

const DatePicker = ({ name, label, control, fullWidth, ...props }) => {
	const { errors } = useFormState({ control });
	const error = errors[name] ? errors[name].message : false;

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => {
				return (
					<FormControl error={!!error} fullWidth={fullWidth}>
						<ThemeProviderNoOverrides>
							<MuiPickersUtilsProvider utils={DayJsUtils}>
								<MuiDatePicker
									label={label}
									inputVariant="outlined"
									{...props}
									{...field}
								/>
							</MuiPickersUtilsProvider>
						</ThemeProviderNoOverrides>
						<FormHelperText>{error}</FormHelperText>
					</FormControl>
				);
			}}
		/>
	);
};

DatePicker.propTypes = {
	required: PropTypes.bool,
	control: PropTypes.object.isRequired,
};

DatePicker.defaultProps = {
	required: false,
	fullWidth: true,
};

const TimePicker = ({ name, label, control, fullWidth, ...props }) => {
	const { errors } = useFormState({ control });
	const error = errors[name] ? errors[name].message : false;

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<FormControl error={!!error} fullWidth={fullWidth}>
					<ThemeProviderNoOverrides>
						<MuiPickersUtilsProvider utils={DayJsUtils}>
							<MuiTimePicker
								label={label}
								inputVariant="outlined"
								{...props}
								{...field}
							/>
						</MuiPickersUtilsProvider>
					</ThemeProviderNoOverrides>
					<FormHelperText>{error}</FormHelperText>
				</FormControl>
			)}
		/>
	);
};

TimePicker.propTypes = {
	required: PropTypes.bool,
	control: PropTypes.object.isRequired,
};

TimePicker.defaultProps = {
	required: false,
	fullWidth: true,
};

export { DateTimePicker, DatePicker, TimePicker };

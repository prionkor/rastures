import { useState, useEffect } from 'react';
import { Controller, useFormState } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Slider } from '@material-ui/core';

const MuiSlider = ({ name, control, setValue, getValue, ...props }) => {
	/* /* const [sliderValue, setSliderValue] = useState(10);

	useEffect(() => {
		if (sliderValue) setValue(name, sliderValue);
	}, [sliderValue, name, setValue]);

	const handleChange = (event, newValue) => {
		setSliderValue(newValue);
	}; */

	const { errors } = useFormState({ control });
	const error = errors?.name ? errors[name].message : false;

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange }, fieldState, formState }) => (
				<Slider
					value={getValue(name)}
					defaultValue={10}
					max={100}
					onChange={(_, val) => onChange(val)}
					valueLabelDisplay="auto"
				/>
			)}
		/>
	);
};

MuiSlider.propTypes = {
	required: PropTypes.bool,
};

MuiSlider.defaultProps = {
	required: false,
};

export default MuiSlider;

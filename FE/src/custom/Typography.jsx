import * as React from 'react';
import useStore from '../store';
import { styled } from '@mui/material/styles';
import { red, pink, purple, blue, teal, green, yellow, orange, grey } from '@mui/material/colors';
import { Typography } from '@mui/material';

function Primary(props) {
	const { primaryColor, darkMode } = useStore();

    const Primary = styled(Typography)( () => ({
		color: primaryColor === 'cherry' ? (darkMode ? red[400] : red[800]) : 
			   primaryColor === 'rose' ? (darkMode ? pink[200] : pink[600]) :
			   primaryColor === 'lavender' ? (darkMode ? purple[200] : purple[800]) :
			   primaryColor === 'navy' ? (darkMode ? blue[300] : blue[800]) :
			   primaryColor === 'teal' ? (darkMode ? teal[200] : teal[700]) :
			   primaryColor === 'emerald' ? (darkMode ? green[400] : green[800]) :
			   primaryColor === 'amber' ? (darkMode ? yellow[400] : yellow[800]) :
			   primaryColor === 'apricot' ? (darkMode ? orange[300] : orange[800]) :
			   (darkMode ? grey[50] : grey[900])
	}));

	return (
		<Primary variant={props.variant} sx={props.sx}>
            {props.text}
        </Primary>
	);
}

function Secondary(props) {
    const { secondaryColor, darkMode } = useStore();

    const Secondary = styled(Typography)( () => ({
        color: secondaryColor === 'cherry' ? (darkMode ? red[400] : red[800]) : 
			   secondaryColor === 'rose' ? (darkMode ? pink[200] : pink[600]) :
			   secondaryColor === 'lavender' ? (darkMode ? purple[200] : purple[800]) :
			   secondaryColor === 'navy' ? (darkMode ? blue[300] : blue[800]) :
			   secondaryColor === 'teal' ? (darkMode ? teal[200] : teal[700]) :
			   secondaryColor === 'emerald' ? (darkMode ? green[400] : green[800]) :
			   secondaryColor === 'amber' ? (darkMode ? yellow[400] : yellow[800]) :
			   secondaryColor === 'apricot' ? (darkMode ? orange[300] : orange[800]) :
			   (darkMode ? grey[50] : grey[900])
	}));

	return (
        <Secondary variant={props.variant} sx={props.sx}>
            {props.text}
        </Secondary>
	);
}

export default { Primary, Secondary };
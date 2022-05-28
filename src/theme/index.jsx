import {createTheme} from "@mui/material/styles";
const theme = createTheme({
    palette: {
        primary: {
            main: '#D726FA',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
});
export default theme;

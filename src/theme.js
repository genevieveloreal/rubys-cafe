import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        h1: {
            fontSize: "28px",
            fontWeight: "500",
            fontFamily: '"Futura", "Helvetica", "Arial", sans-serif',
            color: "#f99d24"
        },
        h2: {
            fontSize: "24px",
            fontWeight: "500",
            fontFamily: '"Futura", "Helvetica", "Arial", sans-serif'

        },
        h3: {
            fontSize: "22px",
            fontFamily: '"Futura Regular", "Helvetica", "Arial", sans-serif'

        },
        h4: {
            fontSize: "20px",
            fontFamily: '"Futura Regular", "Helvetica", "Arial", sans-serif'

        }
    },
    palette: {
       primary: {
           main: "rgba(0,0,0,.87)"
       },
        secondary: {
           main: "#c868a3"
        },
        ruby: {
           main: "#f99d24"
        }
    }
});

export default theme;
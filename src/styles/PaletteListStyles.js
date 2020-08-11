import bg from './bg.svg';
export default {
    root: {
        //backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#330033",
        backgroundImage: `url(${bg})`
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a": {
            color: "white"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "30% 30% 30%",
        gridGap: "5%",
        "& a": {
            textDecoration: "none"
        }
    }
};
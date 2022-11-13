import { makeStyles } from "tss-react/mui";
import { colors } from "./colors";

export const useStyles = makeStyles()((theme) => {
    return {
        navBar: {
            backgroundColor: colors.secondary
        },
        logoStyle: {
            color: colors.primary,
            backgroundColor: 'none',
            fontWeight: '600'
        },
        cartIconStyle: {
            color: colors.primary
        },
        badgeStyle: {
            border: '1px solid red'
        },
        centerItems: {
            display: "flex",
            justifyContent: 'space-between',
        },
        inputStyles: {
            opacity: ".6",
            padding: "0 0 0 5px",
            '&:hover': {
                background: "white"
            },
            '& .MuiInputBase-input': {
                margin: '0 0 0 5px'
            }
        },
        searchBtnStyle: {
            height: "32px",
            background: `${colors.primary}`,
            textTransform: "capitalize"
        }
    }
})
import { makeStyles } from "tss-react/mui";
import { colors } from "./colors";
import showcasePic from '../pics/showcase.jpg'

export const useStyles = makeStyles()((theme) => {
    return {
        navBar: {
            backgroundColor: colors.secondary,
            display: "flex",
            flexDirection: "row",
            justifyContent: 'center',
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
        toolBarStyles: {
            width: "100%",
            display: 'flex',
            justifyContent: 'space-around'
        },
        navMedia : {
            border: '1px solid green',
            display: 'grid',
            gridTemplateColumns: 'repeat(12,1fr)'
        },      
        centerItems: {
            display: 'flex',
            alignItems: "center"
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
            textTransform: "capitalize",
            color: 'white',
            '&:hover': {
                background: `${colors.secondary}`,
                color: `${colors.primary}`,
            }
        },
        layoutStyles: {
            height: "100vh",
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        footerBackground: {
            background: `${colors.dark}`,
            display: 'flex',
            height: 'auto',
            alignItems: 'center'
        },
        footerStyles: {
            height: 'auto',
            background: `${colors.dark}`,
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 0',
            boxSizing: 'border-box',
            width: '100%',
            textAlign: 'center',
        },
        footerInput: {
            background: 'white',
            border: 'none',
            padding: '0 0 0 2px'
        },
        contactStyles: {

        },
        showcaseStyle:{
            height: '400px',
            display: "flex",
            justifyContent: 'center',
            alignItems : "center",
            backgroundImage : `url(${showcasePic})`,
            backgroundPosition: "center",
            backgroundSize: 'cover'
        },
        cardContentStyles: {
            display: 'flex',
            flexDirection: 'column'
        },
        cardStyle: {
            padding: '10px 0',
            transition: 'all .2s ease',
            '&:hover' : {
                transform: 'scale(1.1)'
            }
        },
        cardImgStyle: {
            paddingTop: '56.25%',
            backgroundPosition: 'center',
            objectFit: 'contain',
            backgroundSize: 'contain'
        }
    }
})
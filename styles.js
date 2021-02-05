import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({

    titlCon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: (window.width) * 0.04,
        marginRight: (window.width) * 0.04,
        marginTop: (window.width) * 0.01
    },
    full_contionor : {
        flex:1,
        backgroundColor : "#764ba2"
    },
    headder : {

        flexDirection : "row",
        justifyContent : "space-between",
        marginLeft : (window.width)*0.04,
        marginRight : (window.width)*0.04,
        marginTop:(window.height)*0.02,
        //backgroundColor :"red",

       
    },
    menu_icon : {
        height : (window.width)*0.1,
        width : (window.width)*0.1
    },
    welconetxt : {
        fontSize : (window.width)*0.065,
        fontFamily : "Montserrat-Medium"
    },
    hello_txt : {
        flexDirection : "row",
        justifyContent : "space-between",
        marginTop:(window.height)*0.05,
        marginLeft:(window.width)*0.08,
        marginRight:(window.width)*0.06,
        fontFamily : "OpenSans-Light"
    },
    hello_txt_2 : {
        flexDirection : "row",
        justifyContent : "space-between",
        marginTop:(window.height)*0.01,
        marginLeft:(window.width)*0.08,
        marginRight:(window.width)*0.06,
       
        //fontFamily : "OpenSans-Light",
        
    },
    hello : {
        fontSize : (window.width)*0.055,
        fontFamily : "Montserrat-Medium",
        color : "#000"
        //fontWeight : "bold",
    },
    balanace_text : {
        fontSize : (window.width)*0.044,
        //fontWeight : "bold",
        fontFamily : "Montserrat-Medium"
    },
    credit_card_con : {
        alignSelf: 'center' // aligh self
    },
    credit_card : {
        marginTop : (window.height)*0.03,
        backgroundColor : "#859FF6",
        height : (window.width)*0.5,
        width : (window.width)*0.94,
        borderRadius : (window.width)*0.04,
        shadowColor: "gray",
        elevation: 8
    },
    insdie_card_main : {
        flexDirection : "row",
        justifyContent : "space-between",
        marginLeft : (window.width)*0.05,
        marginRight : (window.width)*0.05,
        marginTop : (window.height)*0.025
    },
    credit_text : {
        fontSize : (window.width)*0.06,
        //fontWeight : "bold",
        color : "#fff",
        fontFamily : "OpenSans-SemiBold"
    },
    visa_text : {
        fontSize : (window.width)*0.07,
        fontStyle : "italic",
        fontWeight : "bold",
        color : "#fff",
        fontFamily : "OpenSans-BoldItalic"
    },
    mycard_name_con : {
      marginLeft  :(window.width)*0.05,
      marginTop : (window.height)*0.085
    },
    mycard_font : {
        //fontWeight:"bold",
        color : "#fff",
        fontSize : (window.width)*0.04,
        fontFamily : "OpenSans-SemiBold"
        },
        name : {
            fontWeight : "bold",
            fontSize : (window.width)*0.08,
            fontFamily :"Montserrat-ExtraBold",
            color : "#fff"
        },
        blanace : {
            //marginTop :(window.height)*0.02,
            marginLeft : (window.width)*0.122,
            fontFamily : "OpenSans-Regular",
            fontSize : (window.height)*0.04,
            color : "#fff",
            fontWeight : "bold"
        },
        small_cards: {
            height:(window.width)*0.23,
            width : (window.width)*0.25,
            backgroundColor : "#fff",
            shadowColor: "#859FF6",
            elevation: 8,
            borderRadius : (window.width)*0.02,
            justifyContent : "center",
            alignItems : "center"
        },
        wide_card_text_1 : {
            //fontWeight:"bold",
            fontSize : (window.width)*0.045,
            fontFamily : "OpenSans-SemiBold"
        },
        bottom_wide_card : {
            //marginTop:(window.height)*0.05,
            height : (window.width)*0.2,
            width : (window.width)*0.9,
            backgroundColor : "#fff",
            marginTop : (window.width)*0.02,
            alignSelf:"auto",
            //justifyContent : "center",
            marginBottom : (window.width)*0.02,
            borderRadius : (window.width)*0.02,
            shadowColor: "#859FF6",
            elevation: 8,
        },
        icons_small_card : {
            height : (window.width)*0.15,
            width : (window.width)*0.15
        }









});

export default styles;
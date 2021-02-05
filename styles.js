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
        fontFamily : "OpenSans-ExtraBold",
        color : "#fff"
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
        fontSize : (window.width)*0.059,
        fontFamily : "Montserrat-Medium",
        color : "#fff"
        //fontWeight : "bold",
    },
    balanace_text : {
        fontSize : (window.width)*0.06,
        //fontWeight : "bold",
        fontFamily : "OpenSans-Bold",
        color : "#fff"
    },
    credit_card_con : {
        alignSelf: 'center' // aligh self
    },
    credit_card : {
        marginTop : (window.height)*0.03,
        backgroundColor : "#2F2C39",
        height : (window.width)*0.5,
        width : (window.width)*0.94,
        borderRadius : (window.width)*0.04,
        shadowColor: "gray",
        elevation: 10
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
            height:(window.width)*0.29,
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
            fontFamily : "OpenSans-SemiBold",
            color : "#fff" 
        },
        bottom_wide_card : {
            //marginTop:(window.height)*0.05,
            height : (window.width)*0.24,
            width : (window.width)*0.9,
            backgroundColor : "#fff",
            marginTop : (window.width)*0.02,
            alignSelf:"auto",
            //justifyContent : "center",
            marginBottom : (window.width)*0.02,
            borderRadius : (window.width)*0.02,
            shadowColor: "#859FF6",
            elevation: 8,
            justifyContent : "space-between"
            
        },
        icons_small_card : {
            height : (window.width)*0.15,
            width : (window.width)*0.15
        },
        card_caption : {
            marginTop:(window.width)*0.03
        },
        card_caption_text : {
            fontSize:(window.width)*0.049,
            fontFamily : "OpenSans-SemiBold",
        },
        bottom_wide_card_row : {
            flexDirection : "row",
            justifyContent : "space-between",
            marginLeft : (window.width)*0.03,
            marginRight : (window.width)*0.03,
            marginTop : (window.width)*0.039
        },
        bottom_wide_card_owl : {
            backgroundColor : "#2F2C39",
            width: (window.width)*0.17,
            height : (window.width)*0.17,
            borderRadius : (window.width)*0.1,
            // marginTop :(window.width)*0.023,
            // marginLeft : (window.width)*0.02

        },
        circal_image : {
            height : (window.width)*0.08,
            width : (window.width)*0.08,
            marginTop : (window.width)*0.043,
            marginLeft : (window.width)*0.044
        },
        Reload_text : {
            fontSize : (window.width)*0.06,
            //marginLeft :(window.width)*0.07,
            fontFamily : "OpenSans-SemiBold",
            marginTop:(window.width)*0.03
        },
        Date_text : {
            fontSize : (window.width)*0.04,
            //marginLeft :(window.width)*0.07,
            fontFamily : "OpenSans-SemiBold",
            marginTop:(window.width)*0.03
        }









});

export default styles;
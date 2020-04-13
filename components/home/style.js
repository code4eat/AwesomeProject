

import { StyleSheet,Dimensions } from "react-native";

const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor:'#fff'
    },
    // title:{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignContent:"center",
    //     flexDirection:"column"
    // },
    wrapper: {
        display:'flex',
        height:155,
        backgroundColor:'#fff'
    },
    slide1: {
        width:Dimensions.get('window').width-20,
        height:150,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        alignSelf:'center',
        borderRadius:10,
        overflow:'hidden'
    },
    sliderList:{
        flex:1,
        height:150,
        borderRadius:3
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    //推荐
    recommendContainer:{
        height:230,
        width:Dimensions.get('window').width,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginBottom:20,
        // backgroundColor:'blue'
    },
    smallTitle:{
        textAlign:'left',
        fontSize:13,
        color:'gray',
        marginBottom:3,
        // backgroundColor:'red'

    },
    MainTitle:{
        fontSize:16,
        // justifyContent:'center',
        // alignItems:'center',
        fontWeight:'bold',
        color:'black',
        // backgroundColor:'blue'
    }


});

export default homeStyle;

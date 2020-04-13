



import { StyleSheet,Dimensions } from "react-native";

const homeStyle = StyleSheet.create({
    container: {
        width:Dimensions.get('window').width,
        height:50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight:10,
        marginBottom:10,
        justifyContent:'space-around'
    },
    voice:{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    searchInput:{
        flex:1,
        height:35,
        borderRadius:20,
        backgroundColor:'#eee',
        textAlign:'center'
    },
    avator:{
        width:30,
        height:30,
        borderRadius:50,
        marginLeft:10
    }


});

export default homeStyle;

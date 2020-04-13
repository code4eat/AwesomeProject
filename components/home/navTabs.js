import React from 'react';
// import styles from './style.js';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    Image,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StatusBar,
} from 'react-native';
import DateIcon from 'react-native-vector-icons/FontAwesome5';
import ListIcon from 'react-native-vector-icons/FontAwesome5';
import RankIcon from 'react-native-vector-icons/Entypo';
import RadioIcon from 'react-native-vector-icons/Entypo';
import LiveIcon from 'react-native-vector-icons/Entypo';

export default class NavTabs extends React.Component {

    render() {
        //   DateIcon.loadFont();   //加载Icon
        return (
            <View style={styles.container}>
                <View style={styles.list}>
                    <TouchableHighlight style={styles.tabs}>
                        <DateIcon name='calendar' color="#fff" size={25} />

                    </TouchableHighlight>
                    <Text style={styles.iconText}>每日推荐</Text>
                </View>
                <View style={styles.list}>
                    <TouchableHighlight style={styles.tabs}>
                        <ListIcon name='clipboard-list' color="#fff" size={25} />

                    </TouchableHighlight>
                    <Text style={styles.iconText}>歌单</Text>
                </View>
                <View style={styles.list}>
                    <TouchableHighlight style={styles.tabs}>
                        <RankIcon name='bar-graph' color="#fff" size={25} />
                    </TouchableHighlight>
                    <Text style={styles.iconText}>排行榜</Text>
                </View>
                <View style={styles.list}>
                    <TouchableHighlight style={styles.tabs}>
                        <RadioIcon name='radio' color="#fff" size={25} />

                    </TouchableHighlight>
                    <Text style={styles.iconText}>电台</Text>
                </View>
                <View style={styles.list}>
                    <TouchableHighlight style={styles.tabs}>
                        <LiveIcon name='rdio-with-circle' color="#fff" size={25} />

                    </TouchableHighlight>
                    <Text style={styles.iconText}>直播</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:30,
        paddingLeft:10,
        paddingRight:10
    },
    list:{
        justifyContent:'center',
        alignItems:'center'
    },
    tabs: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        flexDirection: 'column'
    },
    iconText: {
        color: '#0e0e0e',
        fontSize: 12,
        marginTop:7
    }
})
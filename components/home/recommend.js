
import React from 'react';
import styles from './style.js';

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
import { Button } from 'native-base';
import PlayIcon from 'react-native-vector-icons/SimpleLineIcons';
// import Icon from 'react-native-vector-icons/Feather';

export default class Recommend extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://122.233.190.244:3000/personalized?limit=12')
            .then((response) => response.json())
            .then((json) => {
                // console.log(json);
                this.setState({
                    data: json.result
                })
            })
    }

    item = ({ item }) => {
        // const {item} = data;
        console.log(item);
        return (
            <TouchableHighlight style={{ flexDirection: 'column',width:120,marginRight:10,position:'relative',zIndex:99 }}>
                <View>
                    
                    <Image source={{ uri: item.picUrl }} style={{ width: 120, height: 120,borderRadius:5 }} />
                    <View style={{flexDirection:'row',alignItems:'center',position:'absolute',top:5,right:5}}>
                        <PlayIcon name='control-play' size={10} color='#fff' /><Text style={{fontSize:12,marginLeft:5,color:'#fff'}}>{parseInt(item.playCount/10000)+'万'}</Text>
                    </View>
                    <Text ellipsizeMode={'clip'} numberOfLines={2} style={{fontSize:13,flexWrap:'wrap',marginTop:5,lineHeight:18}}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.recommendContainer}>
                <Text style={styles.smallTitle}>推荐歌单</Text>
                <View style={{
                    flexDirection: 'row', height: 30, justifyContent: 'space-between',
                    width: Dimensions.get('window').width - 20, alignItems: 'center', marginBottom: 10
                }}>
                    <Text style={styles.MainTitle}>为你精挑细选</Text>
                    <Button light style={{
                        display: 'flex',
                        width: 80,
                        height: 26, justifyContent: 'center',
                        borderRadius: 20,
                        backgroundColor: '#fff',
                        borderWidth: 1,
                        borderColor: '#eee',
                    }}>
                        <Text style={{ fontSize: 13 }}>查看更多</Text>
                    </Button>
                </View>
                <SafeAreaView >
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={this.state.data}
                        renderItem={(item) => this.item(item)}
                        keyExtractor={item => 'id-' + item.id}
                        horizontal={true}

                    />
                </SafeAreaView>
            </View>
        )
    }
}
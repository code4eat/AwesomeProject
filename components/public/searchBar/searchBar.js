

import React from 'react';
import styles from './style.js';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    TextInput,
    Text,
    Button,
    Image,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class SearchBar extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.voice}>
                    <Icon
                        name="mic"
                        backgroundColor="#fff"
                        color="black"
                        size={20}
                        // style={{width:20,height:20}}
                    />
                </TouchableHighlight>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Type here to search!"
                // onChangeText={text => setText(text)}
                // defaultValue={text}
                />
                <TouchableHighlight style={styles.avator}>
                    <Image style={{ width: 30, height: 30, borderRadius: 50 }} source={{ uri: 'http://img.crcz.com/allimg/202001/23/1579793244834816.jpg' }} />
                </TouchableHighlight>

            </View>
        )
    }
}


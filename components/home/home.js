
import React from 'react';
import styles from './style.js'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    Image,
    Dimensions,
    RefreshControl,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../public/searchBar/searchBar.js';
import Recommend from './recommend.js';
import NavTabs from './navTabs.js';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerData: [],
            refreshing:false

        }
    }



    componentDidMount() {
        fetch('http://192.168.1.102:3000/banner')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                let { banners } = json;
                this.setState({
                    bannerData: banners
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    dotDom = () => {
        return (
            <View
                style={{
                    backgroundColor: 'rgba(0,0,0,.2)',
                    width: 6,
                    height: 6,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 0, marginBottom: 0,
                }}
            />
        )
    }

    activeDot = () => {
        return (
            <View style={{
                backgroundColor: 'red',
                width: 6, height: 6,
                borderRadius: 4,
                marginLeft: 3, marginRight: 3,
                marginTop: 3, marginBottom: 3
            }} />
        )
    }

    wait=(timeout)=> {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
    }

    onRefresh =() => {
        this.setState({
            refreshing:true
        })
        this.wait(2000).then(() => setRefreshing(false));
    };

    render() {
        console.log(this.props);
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <SearchBar />
                <SafeAreaView style={styles.container}>
                    <ScrollView
                        contentContainerStyle={styles.scrollView}
                        refreshControl={
                            <RefreshControl refreshing={this.state.refreshing} onRefresh={()=>{this.onRefresh}} />
                        }
                    >
                        <View style={{ height: 200 }}>
                            <Swiper style={styles.wrapper} showsButtons={false} loop={true} autoplayTimeout={5} autoplay={true} dot={this.dotDom()} activeDot={this.activeDot()} paginationStyle={{ marginBottom: -5 }}>
                                {
                                    this.state.bannerData.map((v, k) => {

                                        return (
                                            <TouchableOpacity key={k} style={styles.slide1}
                                                onPress={() => { navigation.navigate('Details') }}
                                            >
                                                <Image style={{ width: Dimensions.get('window').width, height: 150 }} resizeMode={'contain'} source={{ uri: v.imageUrl }} />
                                            </TouchableOpacity>
                                        )
                                    })
                                }

                            </Swiper>
                        </View>
                        <NavTabs />
                        <Recommend />
                        {/* <Icon.Button
                            name="facebook"
                            backgroundColor="#3b5998"

                        >
                            Login with Facebook
                        </Icon.Button> */}
                        <Button
                            title="点击去往详情页"
                            onPress={() => navigation.navigate('Details')}
                        />
                    </ScrollView>
                </SafeAreaView>

            </View>
        )
    }
}
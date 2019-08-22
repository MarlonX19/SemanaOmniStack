import React, { Component } from 'react';
import { Platform, Image, Dimensions, View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

import Like from '../assets/like.png';
import Dislike from '../assets/dislike.png';
import AsyncStorage from '@react-native-community/async-storage';


// create a component
class MenuDrawer extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            avatar: '',
            bio: '',
        }
    }

    async componentDidMount() {
        const name = await AsyncStorage.getItem('userName')
        const avatar = await AsyncStorage.getItem('userAvatar')
        const bio = await AsyncStorage.getItem('userBio')
        const user = await AsyncStorage.getItem('userUser');
        this.setState({ name, avatar, bio })
    }


    navLinkToLikes(nav, text) {
        return (
            <TouchableWithoutFeedback

                onPress={() => this.props.navigation.navigate(nav)}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.link}>{text}</Text>
                    <Image style={{ height: 20, width: 25 }} source={Like} />
                </View>
            </TouchableWithoutFeedback>
        )

    }

    navLinkToDislikes(nav, text) {
        return (
            <TouchableWithoutFeedback

                onPress={() => this.props.navigation.navigate(nav)}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.link}>{text}</Text>
                    <Image style={{ height: 20, width: 20 }} source={Dislike} />
                </View>
            </TouchableWithoutFeedback>
        )

    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.topInfo}>
                        <Image style={styles.topImage} source={{ uri: this.state.avatar}} />
                        <Text style={styles.topName}>{this.state.name}</Text>
                        <Text style={styles.topBio}>{this.state.bio}</Text>
                    </View>
                    <View style={styles.bottomLinks}>
                        {this.navLinkToLikes('MyLikes', 'My Likes')}
                        {this.navLinkToDislikes('MyDislikes', 'My Dislikes')}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={{ fontSize: 14, fontFamily: 'Monsterrat', textAlign: 'left', fontWeight: 'bold', color: '#FE3C72' }}>Tindev</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Monsterrat', textAlign: 'right', fontWeight: 'bold', color: '#FE3C72' }}>v 1.0</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C0C0C0',
    },

    topInfo: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 190,
        backgroundColor: '#e6ffff'
    },

    topImage:{
        height: 95,
        width: 95,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'pink'
    },

    topName: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    topUser: {
        color: 'pink',
        fontSize: 14,
        fontWeight: '400'
    },

    topBio: {
        fontSize: 12,
        fontWeight: '200',
        padding: 10,
        color: '#999'
    },

    bottomLinks: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 1,
        paddingBottom: 400
    },

    link: {
        alignSelf: 'flex-start',
        fontFamily: 'Monsterrat',
        fontSize: 20,
        padding: 6,
        paddingLeft: 10,
        margin: 5,
        color: '#FE3C72'
    },

    footer: {
        height: 50,
        borderTopWidth: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#F5F5F5',
    }

});


//make this component available to the app
export default MenuDrawer;

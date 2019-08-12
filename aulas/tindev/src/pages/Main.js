import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';


export default function Main({ navigation }) {
    const id = navigation.getParam('user');

    console.log(id);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/dev', {
                headers: {
                    user: id,
                }
            })
            setUsers(response.data);
        }
        loadUsers();
    }, [id]);

    async function handleLike() {
        // Recover first user from array of users
        const [user, ...rest] = users;

        await api.post(`/devs/${user._id}/likes`, null, {
            headers: { user: id }
        });

        setUsers(rest);
    }

    async function handleDislike() {
        // Recover first user from array of users
        const [user, ...rest] = users;

        await api.post(`/devs/${user._id}/dislikes`, null, {
            headers: { user: id },
        });

        setUsers(rest);
    }

    async function handleLogout() {
        await AsyncStorage.clear();

        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={handleLogout}
            >
                <Image style={styles.logo} source={logo} />
            </TouchableOpacity>

            <View style={styles.cardContainer}>
                {users.length === 0
                    ? <Text style={styles.empty}>Ninguém por perto!</Text>
                    :
                    (users.map((user, index) => (
                        <View key={user._id} style={[styles.card, { zIndex: users.length - index }]}>
                            <Image style={styles.avatar} source={{ uri: user.avatar }} />
                            <View style={styles.footer}>
                                <Text style={styles.name}>{user.name}</Text>
                                <Text style={styles.bio} numberOfLines={3}>{user.name}</Text>
                            </View>
                        </View>
                    ))
                    )
                }
            </View>

            {
                users.length > 0 && (
                    <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        onPress={handleDislike}
                        style={styles.button}
                    >
                        <Image source={dislike} />
                    </TouchableOpacity>
    
                    <TouchableOpacity
                        onPress={handleLike}
                        style={styles.button}
                    >
                        <Image source={like} />
                    </TouchableOpacity>
                </View>
                )
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    logo: {
        marginTop: 30
    },

    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        maxHeight: 500,

    },

    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },

    avatar: {
        flex: 1,
        height: 300,
    },

    footer: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 15

    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },

    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 20
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 30
    },

    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        }

    },

    empty: {
        color: '#999',
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    }


});

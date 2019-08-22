import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

class MenuButton extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableWithoutFeedback
                    onPress={() => this.props.navigation.toggleDrawer()}
                >
                    <Image style={{ width: 32, height: 32, zIndex: 9, position: 'absolute', top: 15, left: 10 }}
                        source={require('../assets/iconDrawer.png')}
                    />
                </TouchableWithoutFeedback>
                <TouchableOpacity
                    onPress={this.props.handleLogout}
                >
                </TouchableOpacity>
            </View>
        );
    }
}

export default MenuButton;

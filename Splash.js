import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';


const Splash = (props) => {
    const [showbtn, setShowBtn] = useState('0');


    useEffect(() => {
        setTimeout(() => {
            setShowBtn('1')
        }, 4000);
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./SplashBackground.jpg')}
                style={styles.imageBackground}
                resizeMode='stretch'
            >

            </ImageBackground>
            <TouchableOpacity style={styles.startgamebtn} onPress={() => props.navigation.navigate('Game')}>
                {showbtn === '1' ? <Text style={{ fontSize: 28, color: 'black', fontWeight: 'bold' }}>Start Game</Text> : null}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    startgamebtn: {
        backgroundColor: 'yellow',
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 10,
        padding:5

    }

});

export default Splash;

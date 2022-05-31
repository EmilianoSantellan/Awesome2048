import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

const AboveGame = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Join the numbers and get to the
                    <Text style={styles.boldText}> 2048 tile!</Text>
                </Text>
            </View>
            <TouchableWithoutFeedback onPress={props.onRestart}>
                <View style={styles.newGameContainer}>
                    <Text style={styles.newGame}>New Game</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default AboveGame;
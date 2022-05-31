import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Heading = (props: any) => {
    return (
        <View style={styles.heading}>
            <Text style={styles.headingTitle}>2048</Text>
            <View style={styles.scores}>
                <View style={styles.container}>
                    <Text style={styles.containerTitle}>SCORE</Text>
                    <Text style={styles.containerValue}>{props.score}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.containerTitle}>BEST</Text>
                    <Text style={styles.containerValue}>{props.best}</Text>
                </View>
            </View>
        </View>
    );
};

export default Heading;
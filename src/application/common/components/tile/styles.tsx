import { StyleSheet } from 'react-native';
import Dimensions from '../../../utils/dimensions';

const { width } = Dimensions.get('window');

const backgroundColor = [
    { id: 2, bg: { backgroundColor: '#eee4da' } },
    { id: 4, bg: { backgroundColor: '#eee1c9' } },
    { id: 8, bg: { backgroundColor: '#f3b27a' }, text: { color: '#f9f6f2' } },
    { id: 16, bg: { backgroundColor: '#f69664' }, text: { color: '#f9f6f2' } },
    { id: 32, bg: { backgroundColor: '#f77c5f' }, text: { color: '#f9f6f2', marginTop: Dimensions.size["2"] } },
    { id: 64, bg: { backgroundColor: '#f75f3b' }, text: { color: '#f9f6f2' } },
    { id: 128, bg: { backgroundColor: '#edd073' }, text: { color: '#f9f6f2', fontSize: Dimensions.size["10"] } },
    { id: 256, bg: { backgroundColor: '#edcc62' }, text: { color: '#f9f6f2', fontSize: Dimensions.size["8"], marginTop: Dimensions.size["2"] } },
    { id: 512, bg: { backgroundColor: '#edc950' }, text: { color: '#f9f6f2', fontSize: Dimensions.size["8"] } },
    { id: 1024, bg: { backgroundColor: '#edc53f' }, text: { color: '#f9f6f2', fontSize: Dimensions.size["6"] } },
    { id: 2048, bg: { backgroundColor: '#edc22e' }, text: { color: '#f9f6f2', fontSize: Dimensions.size["6"], marginTop: Dimensions.size["4"] } }
];

export const getStyle = (value: number) => {
    const index = backgroundColor.findIndex(x => x.id === value);
    return backgroundColor[index];
}

export const styles = StyleSheet.create({
    tile: {
        position: 'absolute',
        borderRadius: Dimensions.size["1"],
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    tileText: {
        fontSize: Dimensions.size["14"],
        color: '#776E65',
        textAlign: 'center',
        textAlignVertical: "center",
        flex: 1
    },
    tilesuper: {
        backgroundColor: '#3c3a33',
        fontSize: Dimensions.size["5"]
    },
    tilesuperText: {
        color: '#f9f6f2',
    },
    container: {
        width: width - Dimensions.size["10"],
        height: width - Dimensions.size["10"],
        position: 'absolute',
        left: 0,
        top: 0,
        overflow: 'hidden',
    }
});
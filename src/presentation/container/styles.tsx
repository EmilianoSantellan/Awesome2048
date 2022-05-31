import { StyleSheet } from 'react-native';
import Dimensions from '../../application/utils/dimensions';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: '#faf8ef',
        paddingHorizontal: Dimensions.size["5"],
    }
});
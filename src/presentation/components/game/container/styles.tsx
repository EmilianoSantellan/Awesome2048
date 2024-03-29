import { StyleSheet } from 'react-native';
import Dimensions from '../../../../application/utils/dimensions';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: width - Dimensions.size["10"],
        height: width - Dimensions.size["10"],
        backgroundColor: '#bbada0',
        borderRadius: Dimensions.size["2"],
        marginTop: Dimensions.size["12"],
    }
});
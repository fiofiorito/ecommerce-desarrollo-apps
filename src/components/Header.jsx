import { StyleSheet, Text, View } from 'react-native'
import colors from '../utils/colors'

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 80,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        padding: 10
    }
})
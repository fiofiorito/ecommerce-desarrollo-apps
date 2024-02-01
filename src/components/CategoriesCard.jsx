import { StyleSheet, Text, View } from 'react-native'
import colors from '../utils/colors'

const CategoriesCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item}</Text>
        </View>
    )
}

export default CategoriesCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        margin: 5,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    text: {
        color: '#000000',
        fontSize: 16
    }
})
import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const CategoriesCard = ({ item, handleCategory }) => {
    return (
        <Pressable onPress={() => handleCategory(item)}>
            <View style={styles.container}>
                <Text style={styles.text}>{item}</Text>
            </View>
        </Pressable>
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
        fontSize: 16,
        fontFamily: fonts.RalewayReg
    }
})
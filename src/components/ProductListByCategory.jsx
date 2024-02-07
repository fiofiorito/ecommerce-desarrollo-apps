import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const ProductListByCategory = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: item.thumbnail }} />
            <Text style={styles.text}>{item.id} {item.title}</Text>
        </View>
    )
}

export default ProductListByCategory;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        marginHorizontal: '10%',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    img: {
        width: 50,
        height: 50
    },
    text: {
        fontFamily: fonts.RalewayReg,
    }
})
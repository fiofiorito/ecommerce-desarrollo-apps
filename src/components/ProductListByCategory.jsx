import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const ProductListByCategory = ({ item, handleProductId }) => {
    const { width } = useWindowDimensions()


    return (
        <Pressable onPress={() => handleProductId(item.id)} style={styles.container}>
            <Image style={styles.img} source={{ uri: item.thumbnail }} />
            <Text>{item.id} {item.title}</Text>
        </Pressable>
    )
}

export default ProductListByCategory;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryBgColor,
        marginHorizontal: '10%',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    img: {
        width: '30%',
        height: '30%',
        minWidth: 50,
        minHeight: 50,
    },
    text: {
        fontFamily: fonts.RalewayReg,
    }
})
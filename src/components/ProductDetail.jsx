import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import products from '../utils/data/products.json';
import Header from './Header';
import colors from '../utils/global/colors';

const ProductDetail = ({ productId }) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const product = products.find(product => product.id === productId)
        setProduct(product)
    }, [productId])

    const handlePress = () => {
        console.log('tuki comprado')
    }

    return (
        <View style={styles.container}>
            <Header title={product.title} />
            <Image style={styles.img} source={product ? { uri: product.images ? product.images[0] : null } : null} />
            <Text>{product.brand}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
            <Pressable onPress={handlePress} style={styles.btn}>
                <Text>Buy Now</Text>
            </Pressable>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 200
    },
    btn: {
        backgroundColor: colors.secondaryBgColor,
        padding: 10,
        borderRadius: 5
    }
})
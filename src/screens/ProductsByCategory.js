import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import ProductListByCategory from '../components/ProductListByCategory'
import Search from '../components/Search'

const ProductsByCategory = ({ selectedCategory }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        if (selectedCategory) {
            setFilteredProducts(products.filter(product => product.category === selectedCategory))
        }
        if (keyword) {
            setFilteredProducts(filteredProducts.filter(product => {
                const productLower = product.title.toLowerCase()
                const keywordLower = keyword.toLowerCase()
                return productLower.includes(keywordLower)
            }))
        }

    }, [selectedCategory, keyword])

    const handleKeyword = (keywrd) => {
        setKeyword(keywrd)
    }

    return (
        <>
            <Header title={selectedCategory} />
            <Search handleKeyword={handleKeyword} />
            <FlatList
                data={filteredProducts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductListByCategory item={item} />}
            />
        </>
    )
}

export default ProductsByCategory

const styles = StyleSheet.create({})
import { StyleSheet } from 'react-native'
import Home from './src/screens/Home'
import { useEffect, useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import { useFonts } from 'expo-font'
import fonts, { fontsCollection } from './src/utils/global/fonts'

const App = () => {
  const [fontsLoaded] = useFonts(fontsCollection)

  const [selectedCategory, setSelectedCategory] = useState('');

  if (!fontsLoaded) return null

  const handleCategory = (category) => {
    setSelectedCategory(category)
  }

  return (
    <>
      {
        selectedCategory ? <ProductsByCategory selectedCategory={selectedCategory} /> : <Home handleCategory={handleCategory} />
      }

    </>

  )
}

export default App

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.RalewayRegular
  }
})
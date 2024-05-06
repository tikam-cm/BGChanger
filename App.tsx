import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [randomColor, setRandomColor] = useState('#000000');
  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * 16);
      color += hexRange.charAt(index);
    }
    setRandomColor(color);
  }
  return (
    <>
    <StatusBar backgroundColor={"#000000"}/>
    <View style={[styles.container, {backgroundColor: randomColor}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnText}>
            Press Me
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn:{
    paddingHorizontal:10,
    paddingVertical:20,
    backgroundColor:'#6A1B4D',
    borderRadius:12
  },
  actionBtnText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    textTransform:'uppercase'
  }
})
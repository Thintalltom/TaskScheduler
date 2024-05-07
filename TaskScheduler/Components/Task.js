import React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const Task = () => {
  return (
    <View style={styles.container}>
        <TextInput style={styles.text} placeholder='type something..' />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start', 
},

textInput: {
    width: '80%',
    height: 40,
    borderWidth: 10,
    borderColor: 'white', // Add this line to specify border color
    backgroundColor: 'white', // Add this line to specify background color
}
    
  })

export default Task
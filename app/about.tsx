import React from 'react'
import { View,Text } from 'react-native'

function About() {
  return (
  <View
       style={{
         flex: 1,
         justifyContent: "center",
         alignItems: "center",
         backgroundColor: "yellow",
       }}
     >
       <Text style={{ fontSize: 25, color: "red", fontWeight: 800 }}>
         This is About Page
       </Text>
      
     </View>
  )
}

export default About

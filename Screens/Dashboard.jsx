import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native';

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const [Text, setText] = useState("")
  return (
    <SafeAreaView>
      <View>
      

      <TextInput value={Text} placeholder= "Search" placeholderTextColor={"#AFAFAF"} className="rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-11 justify-center h-11 border" style={{ position:"absolute", top:22, left:62, width: '70%', height: 60, paddingHorizontal:10 }}>
   

   </TextInput>

    </View>

    </SafeAreaView>
    
  )  
}

export default Dashboard
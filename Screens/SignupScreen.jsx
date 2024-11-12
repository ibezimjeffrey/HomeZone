import { View, Text, ImageBackground, TextInput, Platform, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebaseAuth, firestoreDB } from '../config/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../context/actions/userActions';



const SignupScreen = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();



  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const EmailChange =(value)=>{
    setEmail(value)
    console.log(Email)

  }

  const PasswordChange =(value)=>{
    setPassword(value)
    console.log(Password)


  }

  const Signup = async () => {
  
      try {
        const userCred = await createUserWithEmailAndPassword(firebaseAuth, Email, Password);
        console.log("Password")
        const data = {
          _id: userCred?.user.uid,
          email: Email,
          providerData: userCred.user.providerData,

        };

        

        await setDoc(doc(firestoreDB, "users", userCred?.user.uid), data);

      Enter(userCred?.user.uid)

       
      } 
      catch (error) {
        console.error("Signup error:", error.message);
        Alert.alert("Error", error.message); // Optional: Show an alert to the user
      }
  };

  const Enter =  async(userID)=>{
 
    const userDoc = await getDoc(doc(firestoreDB, 'users', userID));

    dispatch(SET_USER(userDoc.data()));

    navigate.replace("Tabscreen");

  }


  return (
    <SafeAreaView style={{ flex: 1 }}>


     <View className="bg-amber-400 w-full h-full ">

        <ScrollView>

       
        
     
    

            
            

      <Text className="text-white text-4xl left-7 font-thin " style={{top:125}}>Sign up</Text>

<View className="bg-white" style={{ position:"absolute", top:200, width: 500, height: 900, borderTopLeftRadius:'32x',borderTopRightRadius:'32px' }} >
       

<View>

</View>

<View className="top-9">

<KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={140}
          
          >

<TextInput value={Email} onChangeText={EmailChange} placeholder= "Email" placeholderTextColor={"#AFAFAF"}  className=" left-10 justify-center rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-11 h-11 border" style={{ position:"absolute", top:22, width: '70%', height: 60, paddingHorizontal:10}}>
    

       </TextInput>

      
       <TextInput value={Password} onChangeText={PasswordChange} placeholder= "Password" placeholderTextColor={"#AFAFAF"} className="left-10 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-11 justify-center h-11 border" style={{ position:"absolute", top:112, width: '70%', height: 60, paddingHorizontal:10 }}>
   

       </TextInput>

       <TouchableOpacity onPress={Signup}   className="left-10 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-11 justify-center h-11 bg-amber-400" style={{ position:"absolute", top:190, width: '70%', height: 60 }}>
      <Text className="text-white text-2xl" style={{left:120}}>
        Signup
      </Text>

         </TouchableOpacity>
         </KeyboardAvoidingView>

</View>


      



      </View>
      


  

      </ScrollView>
      </View>
  

  </SafeAreaView>

  )
}

export default SignupScreen
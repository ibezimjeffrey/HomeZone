import { View, Text, ImageBackground, TextInput, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth, firestoreDB } from '../config/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../context/actions/userActions';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const navigate = useNavigation();

  const EmailChange =(value)=>{
    setEmail(value)
    console.log(Email)

  }

  const PasswordChange =(value)=>{
    setPassword(value)
    console.log(Password)


  }


  const HandleLogin = async () => {

      try {
        const userCred = await signInWithEmailAndPassword(firebaseAuth, Email, Password);

        if (userCred) {
         

          console.log("User ID", userCred?.user.uid);

          const userDoc = await getDoc(doc(firestoreDB, 'users', userCred?.user.uid));

          if (userDoc.exists) {
            console.log("User Data", userDoc.data());
            dispatch(SET_USER(userDoc.data()));
            navigate.navigate("Tabscreen");
           
          }

          else{
            alert("Incorrect details")
          }
        }
      } catch (err) {
        
        
      } 

      if(Email=="admin" && Password=="admin"){
        navigate.navigate("AdminTabscreen");
      
     
    }
    
  };



  return (


    <SafeAreaView style={{ flex: 1 }}>


     <View className="bg-zinc-600 w-full h-full ">

        <ScrollView>

       
        
     
    

            
            

      <Text className="text-white text-4xl left-7 font-thin " style={{top:125}}>Login</Text>

<View className="bg-white" style={{ position:"absolute", top:200, width: 500, height: 900, borderTopLeftRadius:'32x',borderTopRightRadius:'32px' }} >
       

<View>

</View>

<View className="top-9">

<KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={140}
          
          >

<TextInput onChangeText={EmailChange} value={Email} placeholder= "Email" placeholderTextColor={"#AFAFAF"}  className=" left-10 justify-center rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-11 h-11 border" style={{ position:"absolute", top:22, width: '70%', height: 60, paddingHorizontal:10}}>
    

       </TextInput>

      
       <TextInput secureTextEntry={true} value={Password} onChangeText={PasswordChange} placeholder= "Password" placeholderTextColor={"#AFAFAF"} className="left-10 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-11 justify-center h-11 border" style={{ position:"absolute", top:112, width: '70%', height: 60, paddingHorizontal:10 }}>
   

       </TextInput>

       <TouchableOpacity onPress={HandleLogin}  className="left-10 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-11 justify-center h-11 bg-zinc-600" style={{ position:"absolute", top:190, width: '70%', height: 60 }}>
      <Text className="text-white text-2xl" style={{left:120}}>
        Login
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

export default LoginScreen
import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigate = useNavigation();

  const Login =()=>{
    navigate.navigate("LoginScreen")

  }

  const Signup =()=>{
    navigate.navigate("SignupScreen")

  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      <ImageBackground 
        source={require('../assets/Property.jpeg')}
        style={{ flex: 1, width: '100%', height: '100%' }}
      >

        <Text className="text-white text-4xl left-7 font-thin " style={{top:425}}>HomeZone</Text>

<View className="bg-white" style={{ position:"absolute", top:500, width: '100%', height: '100%', borderTopLeftRadius:'32x',borderTopRightRadius:'32px' }} >
         

<View>

</View>

<View className="top-9">

<TouchableOpacity onPress={Login} className=" left-10 justify-center rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-11 h-11 bg-zinc-600" style={{ position:"absolute", top:22, width: '70%', height: 60}}>
      <Text className="text-white text-2xl" style={{left:120}}>
        Login
      </Text>
      
         </TouchableOpacity>

         <TouchableOpacity onPress={Signup} className="left-10 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-11 justify-center h-11 bg-amber-400" style={{ position:"absolute", top:112, width: '70%', height: 60 }}>
      <Text className="text-black text-2xl" style={{left:120}}>
        Signup
      </Text>

         </TouchableOpacity>
  
</View>


        



        </View>


      </ImageBackground>

    

     


    

    </SafeAreaView>

    
  );
};

export default LoginScreen;

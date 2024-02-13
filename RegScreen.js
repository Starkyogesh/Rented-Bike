import React,{useState} from 'react';
import {Text,View,TextInput,StyleSheet,TouchableOpacity, Alert, Image} from 'react-native';
import { insertUser } from './SqlData';

const registerPage = (navigation)=>{
    
    const [username , setUserName] = useState('');
    const [usermail , setUserMail] = useState('');
    const [password , setPassword] = useState('');

    const handlesign = () => {

        if (!username) {
            Alert.alert('Error', 'UserName Are Required.');
            return;
        }else if(!usermail){
            Alert.alert('Error', 'Mail-Id Are Required.');
            return;
        }else if(!password){
            Alert.alert('Error', 'Password Are Required.');
            return;
        }

        insertUser(
            username,
            usermail,
            password,
            () => {
                Alert.alert('Success','User Registered Successfully');
            },
            (error) => {
                Alert.alert('Error inserting user:',error);
            }
        );
    };


    return(
        <View style={styles.body}>
            <View style={styles.heading}>
              <Image
                source={require("C:/Users/Yogesh/Desktop/project/Project1/LogReg/logo.jpg")}  
                resizeMode='contain'
                style={styles.logoimg}
              />
              <Text style={styles.headtext}>SignIn</Text>

                <View style={styles.form}>
                    <Text style={styles.name}>Name</Text>
                    <TextInput placeholder="Enter Name" placeholderTextColor="white" style={styles.inp1} onChangeText={(text)=>setUserName(text)}></TextInput>
                    <Text style={styles.mail}>Email Id</Text>
                    <TextInput placeholder="Enter Mail id" placeholderTextColor="white" style={styles.inp2} onChangeText={(text)=>setUserMail(text)}></TextInput>
                    <Text style={styles.pass}>Password</Text>
                    <TextInput placeholder="Enter Password" secureTextEntry={true} placeholderTextColor="white" style={styles.inp3} onChangeText={(text)=>setPassword(text)}></TextInput>
                </View>

                <View style={styles.btnview}>
                    <TouchableOpacity style={styles.btn1} onPress={handlesign}>
                        <Text style={styles.sign}>SignUp</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles=StyleSheet.create({
  body:{
    height:'100%',
    backgroundColor:'white',
  },

  heading:{
    height:600,
    top:40,
    width:'90%',
    left:20,
    borderRadius:30,
    backgroundColor:'white',
  },

  logoimg:{
    height:300,
    width:400,
    right:35,
    bottom:120
  },

  headtext:{
    position:'absolute',
    fontWeight:'bold',
    fontSize:45,
    left:100,
    color:'black',
    top:100,
    textDecorationLine:'underline',
  },

  form:{
    position:'absolute',
    height:400,
    top:160,
    width:'100%',
    backgroundColor:'white',
  },

  name:{
    fontSize:25,
    top:'4%',
    color:'blue',
    fontWeight:'bold',
  },

  mail:{
    fontSize:25,
    top:'4%',
    color:'blue',
    fontWeight:'bold',
  },

  pass:{
    fontSize:25,
    top:'4%',
    color:'blue',
    fontWeight:'bold',
  },

  inp1:{
    fontSize:30,
    backgroundColor:'darkgray',
    top:'4%',
    borderRadius:50
  },

  inp2:{
    fontSize:30,
    backgroundColor:'darkgray',
    top:'4%',
    borderRadius:50
  },

  inp3:{
    fontSize:30,
    backgroundColor:'darkgray',
    top:'4%',
    borderRadius:50
  },

  btnview:{
    flexDirection:'row',
    justifyContent:'center',
    top:300,
  },

  btn1:{
    backgroundColor:'green',
    width:'45%',
    height:'100%',
    bottom:120,
    borderRadius:30,
  },

  sign:{
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:30,
  },

});

export default registerPage;

import React,{useState} from 'react';
import {Text,View,TextInput,StyleSheet,TouchableOpacity, Alert} from 'react-native';
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
                <Text style={styles.headingtext}>Register</Text>

                <View style={styles.form}>
                    <Text style={styles.name}>Name</Text>
                    <TextInput placeholder="Enter Name" placeholderTextColor="white" style={styles.inp1} onChangeText={(text)=>setUserName(text)}></TextInput>
                    <Text style={styles.mail}>Email Id</Text>
                    <TextInput placeholder="Enter Mail id" placeholderTextColor="white" style={styles.inp2} onChangeText={(text)=>setUserMail(text)}></TextInput>
                    <Text style={styles.pass}>Password</Text>
                    <TextInput placeholder="Enter Password" placeholderTextColor="white" style={styles.inp3} onChangeText={(text)=>setPassword(text)}></TextInput>
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
    backgroundColor:'silver',
    height:'100%',
  },

  heading:{
    backgroundColor:'black',
    height:600,
    top:40,
    width:'90%',
    left:20,
    borderRadius:30,
  },

  headingtext:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:30,
    top:'2%',
    color:'white',
  },

  form:{
    backgroundColor:'silver',
    height:500,
    top:20,
    width:'80%',
    left:35,
    borderRadius:30,
    shadowColor:'sliver',
    shadowOpacity:50,
    elevation:20,
    shadowRadius:30,
  },

  name:{
    fontSize:25,
    top:'4%',
    color:'blue'
  },

  mail:{
    fontSize:25,
    top:'4%',
    color:'blue'
  },

  pass:{
    fontSize:25,
    top:'4%',
    color:'blue'
  },

  inp1:{
    fontSize:30,
    backgroundColor:'darkgray',
    top:'4%',
  },

  inp2:{
    fontSize:30,
    backgroundColor:'darkgray',
    top:'4%',
  },

  inp3:{
    fontSize:30,
    backgroundColor:'darkgray',
    top:'4%',
  },

  btnview:{
    flexDirection:'row',
    justifyContent:'center',
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

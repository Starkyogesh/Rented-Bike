import React,{ useState } from 'react';
import {Text,View,TextInput,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import { getUser } from './SqlData'; 


const loginPagess = ({navigation})=>{

    const [username , setUserName] = useState('');
    const [password , setPassword] = useState('');

    const [setgetName] = useState('');
    const [setgetPass] = useState('');

    const handlelog = () =>{
        if(!username){
            Alert.alert('Error', 'UserName Are Required.');
            return;
        }else if(!password){
            Alert.alert('Error', 'Password Are Required');
            return;
        }

        getUser(
            username,
            password,
            (results) => {
                if (results.rows.length > 0){
                    navigation.navigate('Home',{getUser});
                }else{
                    Alert.alert('Error Fetching user:',error);
                }
            },
            (error) => {
                Alert.alert('Error Fetching user:', error);
            }
        );
    };

    return(
        <View style={styles.body}>
            <View style={styles.heading}>
                <Text style={styles.headingtext}>WelCome To MyApp</Text>

            <View style={styles.log}> 
                <Text style={styles.heading2}>Login</Text>
                <Text style={styles.loginn}>Login</Text>
                <TextInput placeholder="Enter Name" placeholderTextColor='white' style={styles.input1} onChangeText={(text) => setUserName(text)}/>
                <Text style={styles.pass}>Password</Text>
                <TextInput placeholder="Enter Password" placeholderTextColor='white' style={styles.input2} onChangeText={(text) => setPassword(text)}/>

          
                <View style={styles.btnview}>
                    <TouchableOpacity style={styles.btn} onPress={handlelog}>
                        <Text style={styles.btntext}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.regView}>
                        <Text>If Your A New User ?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('SignPage')}>
                            <Text style={styles.reg}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    top:30,
    width:'90%',
    left:20,
    borderRadius:30,
  },

  headingtext:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:30,
    top:'5%',
    color:'white',
  },

  log:{
    backgroundColor:'silver',
    height:'70%',
    top:60,
    width:'80%',
    left:35,
    borderRadius:30,
    shadowColor:'sliver',
    shadowOpacity:50,
    elevation:20,
    shadowRadius:30,
  },

  heading2:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:30,
  },

  loginn:{
    fontSize:25,
    top:10,
    color:'blue',
  },

  input1:{
    top:'5%',
    fontSize:30,
    backgroundColor:'darkgray',
  },

  pass:{
    top:'5%',
    fontSize:25,
    color:'blue',
  },

  input2:{
    top:'5%',
    fontSize:30,
    backgroundColor:'darkgray',
  },

  btnview:{
    backgroundColor:'green',
    height:45,
    top:60,
    width:'70%',
    left:'15%',
    borderRadius:30,
  },

  btn:{
    alignItems:'center',
    justifyContent:'center',
  },

  btntext:{
    fontWeight:'bold',
    color:'white',
    fontSize:30,
  },

  regView:{
    top:40,
    width:'90%',
  },

  reg:{
    left:'80%',
    bottom:'100%',
    textDecorationLine:'underline',
    color:'blue',
  },
});

export default loginPagess;

import React from "react";
import { SafeAreaView, View , Text , StyleSheet, Image, TouchableOpacity , ToastAndroid } from "react-native";

import data from './bike.json';

const img1 = {uri:"https://i.pinimg.com/564x/6c/bf/f1/6cbff180bcde8ee0d996e7ca71458454.jpg"};
const img2 = {uri:"https://i.pinimg.com/564x/88/a8/90/88a890991641c5c3b238345e92c188b0.jpg"};
const img3 = {uri:"https://i.pinimg.com/564x/a9/b0/22/a9b022fb82725947218768db3fb34dd7.jpg"};
const img4 = {uri:"https://i.pinimg.com/564x/39/d1/01/39d101224d8a92c0588ff59930e205e4.jpg"};
const img5 = {uri:"https://i.pinimg.com/564x/d5/14/ab/d514abd326bfa353699b90ec20f2defd.jpg"};

const InfoScreen = ({route}) =>{

    const vehicle = data.Bikes.filter(
        (element) => element.id == route.params.id
    )[0];

    const getImg = (id) => {
        if(id === 1) return img1;
        if(id === 2) return img2;
        if(id === 3) return img3;
        if(id === 4) return img4;
        if(id === 5) return img5;
    };

    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                <View style={styles.imgSection}>
                    <Image
                        source={getImg(vehicle.id)}
                        resizeMode="contain"
                        style={styles.imgFace}
                    />
                </View>

                <View style={styles.headSec}>
                    <View style={styles.textArea}>
                        <Text style={styles.makeModelText}>{vehicle.make} {vehicle.model}</Text>
                        <Text style={styles.price}><Text style={styles.per_day_price}>${vehicle.Price_per_day}</Text> /day</Text>
                    </View>
                </View>
                <View style={styles.desSec}>
                    <Text style={{fontWeight:'bold', fontSize:30}}>Description :</Text>
                    <Text style={styles.des}>{vehicle.description}</Text>
                </View>

                <View style={styles.proSec}>
                    <Text style={{fontWeight:'bold', fontSize:30}}>Properties :</Text>
                    <Text style={styles.properText}>* Power_Hp  :  
                        <Text style={styles.properSubText}>{vehicle.Properties.power_hp}</Text>
                    </Text>
                    <Text style={styles.properText}>* Fual_Type  :  
                        <Text style={styles.properSubText}>{vehicle.Properties.fuel_type}</Text>
                    </Text>
                    <Text style={styles.properText}>* Engine_Capacity  :
                        <Text style={styles.properSubText}>{vehicle.Properties.engine_capacity}</Text>
                    </Text>
                </View>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>{
                        ToastAndroid.show('Your Booking Bike Successfully', 2000);
                    }}
                >
                    <Text style={styles.btnText}>${vehicle.Price_per_day} /day</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default InfoScreen;

const styles = StyleSheet.create({
    safeArea:{
        flex:1,
        backgroundColor:'white',
    },

    container:{
        flex:1,
        backgroundColor:'white',
        paddingRight:35,
        paddingLeft:35,
    },

    imgSection:{
        flex:1,
        width:'100%',
        height:300,
    },

    imgFace:{
        width:300,
        height:300
    },

    headSec:{
        marginBottom:76
    },

    textArea:{
        flexDirection:'row',
        justifyContent:'space-between',
    },

    makeModelText:{
        fontSize:20,
        fontWeight:'500',
    },

    price:{
        fontWeight:'400',
        color:'black'
    },

    per_day_price:{
        color:'green',
        fontWeight:'bold',
    },

    desSec:{
        bottom:'10%'
    },

    des:{
        letterSpacing:1,
    },
    
    proSec:{
        bottom:'7%',
    },

    properText:{
        left:'20%'
    },

    properSubText:{
        fontWeight:'bold',
    },

    btn:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green',
        bottom:'5%',
        height:30,
    },

    btnText:{
        color:'white',
        fontWeight:'bold'
    },
});


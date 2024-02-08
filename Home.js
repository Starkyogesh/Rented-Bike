import React, { useState } from 'react';
import {View , Text , StyleSheet , TouchableOpacity , Modal, TextInput, Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import data from './bike.json';

const img1 = {uri:"https://i.pinimg.com/564x/6c/bf/f1/6cbff180bcde8ee0d996e7ca71458454.jpg"};
const img2 = {uri:"https://i.pinimg.com/564x/88/a8/90/88a890991641c5c3b238345e92c188b0.jpg"};
const img3 = {uri:"https://i.pinimg.com/564x/a9/b0/22/a9b022fb82725947218768db3fb34dd7.jpg"};
const img4 = {uri:"https://i.pinimg.com/564x/39/d1/01/39d101224d8a92c0588ff59930e205e4.jpg"};
const img5 = {uri:"https://i.pinimg.com/564x/d5/14/ab/d514abd326bfa353699b90ec20f2defd.jpg"};

const homepage = ({navigation}) => {

    const [Menus , setMenus] = useState(false);

    // menu list
    const toggleMenu = ()=>{
        setMenus(!Menus);
    };

    const [vehicles , setVehicles] = useState(data.Bikes);
    const [filtervehicles , setFilterVehicles] = useState(data.Bikes);

    const getImg = (id) => {
        if(id === 1) return img1;
        if(id === 2) return img2;
        if(id === 3) return img3;
        if(id === 4) return img4;
        if(id === 5) return img5;
    }

    const searchVehicle = (keyword) =>{

        const lowercaseKeyboard = keyword.toLowerCase();

        const result = vehicles.filter(vehicles=>{
            return vehicles.make.toLowerCase().includes(lowercaseKeyboard)
        })

        setFilterVehicles(result)
    }

    return(
        <SafeAreaView style={styles.safearea}>
        <View style={styles.body}>

            {/* search bar */} 
            <View style={styles.searchBody}>
                <View style={styles.searchPallet}>
                    <TextInput style={styles.searchInput}
                        placeholder='Search....'
                        onChangeText={(text)=>searchVehicle(text)}
                    />
                    <View style={styles.searchIconArea}>
                        <Image style={styles.searchIcon}
                            resizeMode='contain'
                            source={{uri:"https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Magnifier-Search-Zoom--512.png"}}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.typesView}>
                <Text style={styles.typesTextActive}>All</Text>
                <Text style={styles.typesText}>RX100</Text>
                <Text style={styles.typesText}>Fz</Text>
                <Text style={styles.typesText}>BMW</Text>
                <Text style={styles.typesText}>R15</Text>
                <Text style={styles.typesText}>Royal Enfield</Text>
            </View>

            <View style={styles.listView}>
                <Text style={styles.listHeadText}>Most Rented</Text>
                <ScrollView style={styles.elementPallet}>

                {
                    filtervehicles.map(vehicle => {
                        return (
                            <TouchableOpacity 
                                style={styles.element} 
                                key={vehicle.id} 
                                activeOpacity={0.9}
                                onPress={()=>navigation.navigate('Infos',{id:vehicle.id})}
                            >
                                <View style={styles.infoArea}>
                                    <Text style={styles.infoTitle}>{vehicle.make}</Text>
                                    <Text style={styles.infoSub}>{vehicle.model}</Text>
                                    <Text style={styles.infoPrice}>
                                        <Text style={styles.infoAmount}>${vehicle.Price_per_day} </Text>/day
                                    </Text>
                                </View>
                                <View style={styles.imageArea}>
                                    <Image
                                        source={getImg(vehicle.id)}
                                        resizeMode='contain'
                                        style={styles.vehicleImage}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

                </ScrollView>
            </View>





            <TouchableOpacity style={styles.menubtn} onPress={toggleMenu}>
                <Text style={styles.menuTxt}>MENU</Text>
            </TouchableOpacity>

                <Modal animationType='slide' transparent={true} visible={Menus}
                    onRequestClose={()=>{setMenus(false)}}>
                        <View style={styles.menulist}>
                            <TouchableOpacity onPress={()=>navigation.navigate('codes')} style={styles.list}>
                                <Text style={styles.txt}>Source Code</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>navigation.navigate('Abouts')} style={styles.list}>
                                <Text style={styles.txt}>About</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>navigation.navigate('LoginPage')} style={styles.list}>
                                <Text style={styles.txt}>Logout</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={toggleMenu} style={styles.clsmenu}>
                                <Text style={styles.clsmenutxt}>Close Menu</Text>
                            </TouchableOpacity>
                        </View>
                </Modal>

        </View>
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({
    safearea:{
        flex:1,
        justifyContent:'center',
    },
    
    body:{
        height:'100%',
        backgroundColor:'lightgray',
    },

    searchBody:{
        backgroundColor:'silver',
        height:50,
        width:'100%',
        borderRadius:50,
    },

    searchPallet:{
        width:'90%',
        left:20,
        flexDirection:'row',
        borderRadius:50,
    },

    searchInput:{
        width:'90%',
        left:50,
        borderRadius:50,
        fontWeight:'bold',
    },

    searchIconArea:{
        width:'20%',
        borderRadius:50,
        right:320,
    },

    searchIcon:{
        top:'10%',
        height:'80%',
        width:'80%',
        right:'10%',
    },

    menubtn:{
        height:60,
        backgroundColor:'silver',
        justifyContent:'center',
        alignItems:'center',
        top:10,
    },

    menuTxt:{
        fontWeight:'bold',
        color:'black',
        fontSize:40,
    },

    typesView:{
        marginTop:15,
        flexDirection:'row',
    },

    typesTextActive:{
        fontWeight:'bold',
        marginRight:40,
        fontSize:15,
        color:'black',
        left:20
    },

    typesText:{
        fontWeight:'bold',
        marginRight:25,
        fontSize:15,
        color:'gray',
    },

    listView:{
        marginTop:35,
        fontWeight:'bold',
    },

    listHeadText:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:15,
    },

    elementPallet:{
        width:'100%',
        height:470,
    },

    element:{
        padding:15,
        height:120,
        backgroundColor:'white',
        borderRadius:20,
        flexDirection:'row',
        marginBottom:10,
    },

    infoArea:{
        flex:1,
        paddingLeft:33
    },

    infoTitle:{
        fontWeight:'bold',
        fontSize:25
    },

    infoSub:{
        fontWeight:'400',
        fontSize:15,
    },

    infoPrice:{
        position:'absolute',
        bottom:0,
        fontSize:15,
        color:'black',
        fontWeight:'bold',
        paddingLeft:33
    },

    infoAmount:{
        fontWeight:'400',
        fontSize:15,
    },

    imageArea:{
        flex:1,
    },

    vehicleImage:{
        position:'absolute',
        width:'100%',
        height:'100%',
    },

// Menu List Viewa
    menulist:{
        height:'100%',
        backgroundColor:'white',
        color:'white',
    },

    list:{
        height:'10%',
        justifyContent:'center',
        alignItems:'center'
    },

    txt:{
        color:'black',
        fontSize:30,
        fontWeight:'bold'
    },

    clsmenu:{
        backgroundColor:'red',
        top:'45%',
        height:'10%',
        justifyContent:'center',
        alignItems:'center',
    },

    clsmenutxt:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
    },
});

export default homepage;
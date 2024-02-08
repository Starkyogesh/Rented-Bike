import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';

const abts = () => {

  return(
    <SafeAreaView>
        <View style={styles.body}>
            <Text style={styles.wel}>Welcome</Text>
            <View style={{top:'5%'}}>
                <Text style={{fontSize:25,width:'100%', fontWeight:'bold'}}>Hii This Is Yogesh Jagadeesh</Text>
                
                <View style={styles.details}>
                    <Text style={styles.Heading}>Project Details</Text>
                    <Text style={styles.ProjectDetail}>Bike rental has become a huge industry in India in the last decade. There are many bike enthusiasts in the country who don’t have enough money to buy bikes but are able to rent the bikes to pursue their passion. These bike enthusiasts can travel across the country comfortably, conveniently, and affordably. It is the best choice for travelers who want to explore that city’s narrow roads, inner beauty, and architecture with comfort. You can choose bikes from top models to mediocre.</Text>
                </View>

                <View style={styles.comm}>
                    <Text style={styles.Heading}>Communicate</Text>
                    <View style={styles.commView}>
                        <View style={styles.instaView}>
                            <Image
                                resizeMode='contain'
                                style={styles.img} 
                                source={{uri:"https://i.pinimg.com/564x/95/73/1a/95731a2d0ab3c1851ed7b5328d068b1f.jpg"}}
                            />
                            <Text style={styles.instaTxt}>mr.__.stark.__ </Text>
                        </View>

                        <View style={styles.whatsView}>
                            <Image
                                resizeMode='contain'
                                style={styles.img} 
                                source={{uri:"https://i.pinimg.com/564x/bb/38/27/bb3827059d5721be7191861e336dcb23.jpg"}}
                            />
                            <Text style={styles.instaTxt}>7448706610</Text>
                        </View>
                    </View>
                </View>
            </View> 
            <Text style={styles.tnx}>Thanks For Using My Application</Text>      
        </View>
    </SafeAreaView>
  );  
};

const styles = StyleSheet.create({
    body:{
        height:'100%',
    },

    wel:{
        textAlign:'center',
        fontSize:50,
        fontWeight:'bold',
    },

    details:{
        marginTop:20,
    },

    Heading:{
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center'
    },

    ProjectDetail:{
        fontSize:17,
    },

    comm:{
        marginTop:17
    },

    instaView:{
        flexDirection:'row',
        marginTop:10
    },

    img:{
        height:50,
        width:50
    },
    
    instaTxt:{
        marginLeft:10,
        marginTop:10,
        fontWeight:'bold',
        fontSize:25
    },

    whatsView:{
        flexDirection:'row',
        marginTop:20
    },

    tnx:{
        marginTop:70,
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20
    },

});

export default abts;
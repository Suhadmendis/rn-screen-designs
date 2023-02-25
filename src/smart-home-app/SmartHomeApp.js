import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, TextInput, View, StyleSheet, SafeAreaView, Button} from 'react-native';

const SmartHomeApp = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            
            <View style={styles.titleSection}>
              <Text style={styles.titleHead}>Hello, Shea Lewis</Text>
              <Text style={styles.titleSub}>Well come to your Home.</Text>
            </View>

            <View style={styles.display}>
              <View style={styles.displayLeft}>
                <Text>Cloudy</Text>
              </View>
              <View style={styles.displayRight}>
                <Text style={styles.displayRightHead}>10 January 2022</Text>
                <Text style={styles.displayRightSub}>27°</Text>
              </View>
    
            </View>

            

              <View style={styles.middleTitle}>
                <Text style={styles.middleTitleText} >Your Rooms</Text>
                <Button style={styles.addButton} title={'Add'}></Button>
              </View>



              <View style={styles.room}>
                <View style={styles.imageIcon}>
                  <Text>OO</Text>
                </View>
                <View style={styles.info}>
                  <Text style={styles.infoTitle}>Living Room</Text>
                  <Text style={styles.infoDes}>7 Devices</Text>
                </View>
                <View style={styles.switchArea}>
                  <Text>OO</Text>
                </View>
              </View>

              <View style={styles.room}>
                <View style={styles.imageIcon}>
                  <Text>OO</Text>
                </View>
                <View style={styles.info}>
                  <Text style={styles.infoTitle}>Bed Room</Text>
                  <Text style={styles.infoDes}>5 Devices</Text>
                </View>
                <View style={styles.switchArea}>
                  <Text>OO</Text>
                </View>
              </View>

              <View style={styles.room}>
                <View style={styles.imageIcon}>
                  <Text>OO</Text>
                </View>
                <View style={styles.info}>
                  <Text style={styles.infoTitle}>Bath Room</Text>
                  <Text style={styles.infoDes}>4 Devices</Text>
                </View>
                <View style={styles.switchArea}>
                  <Text>OO</Text>
                </View>
              </View>

         

          </View>
        </SafeAreaView>
    );
};














































































































const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    titleSection:{
      marginBottom: 30,
    },
    titleHead:{
      color: 'black',
      fontSize: 28,
      fontWeight: 'bold',
    },
    titleSub:{
      color: 'black',
      fontSize: 14,
    },

    display:{
      flexDirection: 'row',
      justifyContent:'space-between',

      backgroundColor: 'lightblue',
      padding: 20,
      marginBottom: 40,
      borderRadius: 20,
    },
    displayLeft:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    displayRight:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    displayRightHead:{
      
    },
    displayRightSub:{
     marginTop: 30,
     color: 'black',
     fontSize: 50,
     fontWeight: 'bold',
    },
    
    middleTitle: {
      flexDirection: 'row',
      justifyContent:'space-between',
      marginBottom: 40,
    },
    middleTitleText: {
      color: 'black',
      fontSize: 25,
      fontWeight: '500',
    },
    addButton: {
      backgroundColor: 'lightgreen',
    },


    room: {
      flexDirection: 'row',
      justifyContent:'space-between',
      backgroundColor: 'red',
      padding: 20,
      marginBottom: 20,
      borderRadius: 20,
    },
    imageIcon: {

    },
    info: {

    },
    infoTitle: {
      color: 'black',
      fontSize: 17,
      marginBottom: 3,
      fontWeight: '500',
    },
    infoDes: {
      color: 'black',
      fontSize: 13,
      
    },
    switchArea: {

    },
});

  

export default SmartHomeApp;
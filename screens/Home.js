import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Platform, StatusBar  } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
             <SafeAreaView style={styles.droidSafeArea} />
              <ImageBackground source={require("../assets/bg_image.png")} style={styles.bgImg}>
               
               <Text>Tela Inicial!</Text>
                
                <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("IssLocation")}>
                 <Text style={styles.routeText}>Localização da EEI</Text>
                 <Text style={styles.bgDigit}>1</Text>
                  <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("Meteors")}>
                 <Text style={styles.routeText}>Tela Meteoros</Text>
                 <Text style={styles.bgDigit}>2</Text>
                  <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.routeCard}>
                 <Text style={styles.routeText}>Informações</Text>
                 <Text style={styles.bgDigit}>3</Text>
                  <Image source={require("../assets/rocket_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
              
              </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({


container:{

    flex: 1,
    /*justifyContent: "center",
    alignItems: "center"*/
},
bgImg:{

    flex:1,
    resizeMode: "cover"
},
droidSafeArea: { 
    marginTop: Platform.OS === "android" ? 
    StatusBar.currentHeight : 0 
},
routeCard: { 
    flex: 0.25, 
    marginLeft: 50, 
    marginRight: 50, 
    marginTop: 50, 
    borderRadius: 30, 
    backgroundColor: 'white' 
},
routeText: { 
    fontSize: 35, 
    fontWeight: "bold", 
    color: "black", 
    marginTop: 75, 
    paddingLeft: 30 
},
bgDigit: { 
    position: "absolute", 
    color: "rgba(183, 183, 183, 0.5)", 
    fontSize: 150, 
    right: 20, 
    bottom: -15, 
    zIndex: -1 
},
iconImage: { 
    position: "absolute", 
    height: 200, 
    width: 200, 
    resizeMode: "contain", 
    right: 20, 
    top: -80 
}
})

# React Native ReMediaQuery

android   
ios 
web 

## Getting started

`$ npm install react-native-remediaquery --save`  
`$ react-native link react-native-remediaquery`  
  
or

`$ yarn add react-native-remediaquery`
    

# Usage



```javascript
import { useMediaQuery,usePropsMaxWidthQuery,usePropsMaxHeightQuery, useStyleMaxHeightQuery, useStyleMaxWidthQuery } from "react-native-remediaquery";

    //Max  descending order
    //Min  ascending order

    const styles = useStyleMaxWidthQuery(styleBase,
        [

        1400,
        1200,
        1024,
        900,
        800,
        700,
        600
        ],
        [
        style1400,
        style1200,
        style1024,
        style900,
        style800,
        style700,
        style600
        ])

        const styleBase = StyleSheet.create({
            tabBarIconSize:{
                width:50,
                height:50,
                marginBottom:50,
                justifyContent:'center',
                alignItems:'center'
            },
            friendImage:{
                height:220,
                width: 220 * 2.1575 
            },

        })

    // You must copy all the style and change what you need
        const style1400 = StyleSheet.create({
            
            friendImage:{
                height:180, //changed
                width: 180 * 2.1575  //changed
            },
        })

        const style1200 = StyleSheet.create({
            tabBarIconSize:{
            width:30, //changed
            height:30, //changed
            marginBottom:50,
            justifyContent:'center',
            alignItems:'center'
            },
        })

    //.....

```

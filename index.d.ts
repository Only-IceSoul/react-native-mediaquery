
import {  ScaledSize,StyleSheet } from 'react-native';

export type Dimension = {
    window: ScaledSize;
    screen: ScaledSize;
}


export const  useDimension = () => Dimension

  export type MediaQueryData = {
        isLandScape:boolean, // w > h
        isLandScapeWindow:boolean,  // w > h
        dimensions:{window:ScaledSize,screen:ScaledSize},
        lessThanOrEqualWidth:boolean, 
        lessThanOrEqualHeight:boolean, 
        lessThanOrEqualWidthWindow:boolean, // window size
        lessThanOrEqualHeightWindow:boolean // window size
  }
  
  export type StyleMediaQuery =  StyleSheet.NamedStyles<any>

  

  export const  useMediaQuery = (lessThanWidth:number | undefined,lessThanHeight:number | undefined) => MediaQueryData 

  //style object

  export const  useStyleMinWidth = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] , dim?: 'window' | 'screen' ) => T 

  export const  useStyleMaxWidth = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] , dim?: 'window' | 'screen' ) => T 
 
  export const  useStyleMinHeight = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] , dim?: 'window' | 'screen') => T 

  export const  useStyleMaxHeight = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] , dim?: 'window' | 'screen') => T 


  //any object
  export const  usePropsMaxWidth = <T extends any>(base:T, args:number[],styles:any[] ,dim?: 'window' | 'screen' ) => T 

  export const  usePropsMinWidth = <T extends any>(base:T, args:number[],styles:any[] ,dim?: 'window' | 'screen' ) => T 

  export const  usePropsMaxHeight = <T extends any>(base:T, args:number[],styles:any[] ,dim?: 'window' | 'screen' ) => T 

  export const  usePropsMinHeight = <T extends any>(base:T, args:number[],styles:any[] , dim?: 'window' | 'screen' ) => T 
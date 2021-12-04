
import {  ScaledSize,StyleSheet } from 'react-native';

export type Dimension = {
    window: ScaledSize;
    screen: ScaledSize;
}


export const  useDimension = () => Dimension

  export type MediaQueryData = {
        isLandScape:boolean,
        isLandScapeWindow:boolean,
        dimensions:{window:ScaledSize,screen:ScaledSize},
        lessThanWidth:boolean, // window size
        lessThanHeight:boolean // window size
  }
  
  export type StyleMediaQuery =  StyleSheet.NamedStyles<any>

  

  export const  useMediaQuery = (lessThanWidth:number | undefined,lessThanHeight:number | undefined) => MediaQueryData 

  //style object

  export const  useStyleMinWidthQuery = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] ) => T 

  export const  useStyleMaxWidthQuery = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] ) => T 
 
  export const  useStyleMinHeightQuery = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] ) => T 

  export const  useStyleMaxHeightQuery = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] ) => T 


  //any object
  export const  usePropsMaxWidthQuery = <T extends any>(base:T, args:number[],styles:any[] ) => T 

  export const  usePropsMinWidthQuery = <T extends any>(base:T, args:number[],styles:any[] ) => T 

  export const  usePropsMaxHeightQuery = <T extends any>(base:T, args:number[],styles:any[] ) => T 

  export const  usePropsMinHeightQuery = <T extends any>(base:T, args:number[],styles:any[] ) => T 
import  { useEffect, useLayoutEffect, useState } from 'react';
import { Dimensions, ScaledSize,StyleSheet } from 'react-native';

export type Dimension = {
    window: ScaledSize;
    screen: ScaledSize;
}


export const  useDimension = () => Dimension

  export type MediaQueryData = {
        isLandScape:boolean,
        isLandScapeWindow:boolean,
        dimensions:{window:ScaledSize,screen:ScaledSize},
        lessThanWidth:boolean,
        lessThanHeight:boolean
  }
  
  export type StyleMediaQuery =  StyleSheet.NamedStyles<any>

  export const  useMediaQuery = (lessThanWidth:number | undefined,lessThanHeight:number | undefined) => MediaQueryData 

  export const  useStyleMinWidthQuery = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] ) => T 

  export const  useStyleMaxWidthQuery = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] ) => T 
 
  export const  useStyleMinHeightQuery = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] ) => T 

  export const  useStyleMaxHeightQuery = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] ) => T 


  export const  usePropsMaxWidthQuery = <T extends any>(base:T, args:number[],styles:any[] ) => T 

  export const  usePropsMinWidthQuery = <T extends any>(base:T, args:number[],styles:any[] ) => T 

  export const  usePropsMaxHeightQuery = <T extends any>(base:T, args:number[],styles:any[] ) => T 

  export const  usePropsMinHeightQuery = <T extends any>(base:T, args:number[],styles:any[] ) => T 
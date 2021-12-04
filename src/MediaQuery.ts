import  { useEffect, useLayoutEffect, useState } from 'react';
import { Dimensions, ScaledSize,StyleSheet } from 'react-native';


export const  useDimension = () => {

  const Window = Dimensions.get('window')
  const Screen = Dimensions.get('window')
  const [dimensions, setDimensions] = useState({ window: Window, screen:Screen });
    useLayoutEffect(() => {
      const subscription :any = Dimensions.addEventListener(
        "change",
        ({ window ,screen}) => {
          setDimensions({ window, screen });
        }
      );
      return () => subscription?.remove();
    }, []);
    return dimensions;
  }

  export type MediaQueryData = {
        isLandScape:boolean,
        isLandScapeWindow:boolean,
        dimensions:{window:ScaledSize,screen:ScaledSize},
        lessThanWidth:boolean,
        lessThanHeight:boolean
  }
  export type StyleMediaQuery =  StyleSheet.NamedStyles<any>

  export const  useMediaQuery = (lessThanWidth:number | undefined,lessThanHeight:number | undefined):  MediaQueryData => {

    const Window = Dimensions.get('window')
     const Screen = Dimensions.get('window')

    const lessThanValue = lessThanWidth === undefined ? 0 : lessThanWidth!
    const lessThanHeightValue = lessThanHeight === undefined ? 0 : lessThanHeight!
    const [mediaQuery,setMediaQuery] = useState<MediaQueryData>({
      isLandScape:Screen.width > Screen.height,
      isLandScapeWindow:Window.width > Window.height,
      dimensions:{ window: Window, screen:Screen },
      lessThanWidth:Window.width <= lessThanValue,
      lessThanHeight: Window.height <= lessThanHeightValue
    })

    useLayoutEffect(() => {
      const subscription :any = Dimensions.addEventListener(
        "change",
        ({ window,screen }) => {
           
          setMediaQuery({
            isLandScape: screen.width > screen.height,
            isLandScapeWindow:window.width > window.height,
            dimensions:{ window, screen }
            ,lessThanWidth:window.width < lessThanValue,
            lessThanHeight: window.height < lessThanHeightValue
          })
    
        }
      );
      return () => subscription?.remove();
    }, []);
    return mediaQuery;

  }



  export const  useStyleMinWidthQuery = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] ) : T => {


    const updateStyle = (window:any,base:any)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.width >= args[i]){
            var styleFound :any = styles[i]
            Object.assign(copyStyle,styleFound)
          }else{
            break
          }
        }
        return copyStyle
      }
      return base
    }
    const Window = Dimensions.get('window')

    const [result, setResult] = useState<any>(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription :any = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
         return subscription?.remove();
      }
    }, []);
    return result;


  }

  export const  useStyleMaxWidthQuery = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] ) : T => {


    const updateStyle = (window:any,base:any)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.width <= args[i]){
            var styleFound :any = styles[i]
            Object.assign(copyStyle,styleFound)
          }else{
            break
          }
        }
        return copyStyle
      }
      return base
    }
    const Window = Dimensions.get('window')
    const [result, setResult] = useState<any>(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription :any = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
         return subscription?.remove();
      }
    }, []);
    return result;


  }

  export const  useStyleMinHeightQuery = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] ) : T => {


    const updateStyle = (window:any,base:any)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.height >= args[i]){
            var styleFound :any = styles[i]
            Object.assign(copyStyle,styleFound)
          }else{
            break
          }
        }
        return copyStyle
      }
      return base
    }

    const Window = Dimensions.get('window')
    const [result, setResult] = useState<any>(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription :any = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
         return subscription?.remove();
      }
    }, []);
    return result;


  }

  export const  useStyleMaxHeightQuery = <T extends any>(base:T, args:number[],styles:(StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>)[] ) : T => {


    const updateStyle = (window:ScaledSize,base:any)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.height <= args[i]){
            var styleFound :any = styles[i]
            Object.assign(copyStyle,styleFound)
          }else{
            break
          }
        }
        return copyStyle
      }
      return base
    }

    const Window = Dimensions.get('window')
    const [result, setResult] = useState<any>(updateStyle(Window,base));
    
    useEffect(() => {
     
      let isMounted = true
      const subscription :any = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
         return subscription?.remove();
      }
    }, []);
    return result;


  }


  export const  usePropsMaxWidthQuery = <T extends any>(base:T, args:number[],styles:any[] ) : T => {


    const updateStyle = (window:any,base:any)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.width <= args[i]){
            var styleFound :any = styles[i]
            Object.assign(copyStyle,styleFound)
          }else{
            break
          }
        }
        return copyStyle
      }
      return base
    }
     const Window = Dimensions.get('window')
    const [result, setResult] = useState<any>(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription :any = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
         return subscription?.remove();
      }
    }, []);
    return result;
  }

  export const  usePropsMinWidthQuery = <T extends any>(base:T, args:number[],styles:any[] ) : T => {


    const updateStyle = (window:any,base:any)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.width >= args[i]){
            var styleFound :any = styles[i]
            Object.assign(copyStyle,styleFound)
          }else{
            break
          }
        }
        return copyStyle
      }
      return base
    }

    const Window = Dimensions.get('window')
    const [result, setResult] = useState<any>(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription :any = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
         return subscription?.remove();
      }
    }, []);
    return result;

  }

  export const  usePropsMaxHeightQuery = <T extends any>(base:T, args:number[],styles:any[] ) : T => {


    const updateStyle = (window:any,base:any)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.height <= args[i]){
            var styleFound :any = styles[i]
            Object.assign(copyStyle,styleFound)
          }else{
            break
          }
        }
        return copyStyle
      }
      return base
    }

  const Window = Dimensions.get('window')
    const [result, setResult] = useState<any>(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription :any = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
         return subscription?.remove();
      }
    }, []);
    return result;
  }

  export const  usePropsMinHeightQuery = <T extends any>(base:T, args:number[],styles:any[] ) : T => {


    const updateStyle = (window:any,base:any)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.height >= args[i]){
            var styleFound :any = styles[i]
            Object.assign(copyStyle,styleFound)
          }else{
            break
          }
        }
        return copyStyle
      }
      return base
    }

    const Window = Dimensions.get('window')
    const [result, setResult] = useState<any>(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription :any = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
         return subscription?.remove();
      }
    }, []);
    return result;

  }

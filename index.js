// main index.js

import  { useEffect, useLayoutEffect, useState } from 'react';
import { Dimensions, ScaledSize,StyleSheet } from 'react-native';


export const  useDimension = () => {

  const Window = Dimensions.get('window')
  const Screen = Dimensions.get('window')
  const [dimensions, setDimensions] = useState({ window: Window, screen:Screen });
    useLayoutEffect(() => {
      const subscription  = Dimensions.addEventListener(
        "change",
        ({ window ,screen}) => {
          setDimensions({ window, screen });
        }
      );
        if(subscription) return () =>  subscription.remove();
    }, []);
    return dimensions;
  }


  export const  useMediaQuery = (lessThanWidth,lessThanHeight) => {

    const Window = Dimensions.get('window')
     const Screen = Dimensions.get('window')

    const lessThanValue = lessThanWidth === undefined ? 0 : lessThanWidth
    const lessThanHeightValue = lessThanHeight === undefined ? 0 : lessThanHeight
    const [mediaQuery,setMediaQuery] = useState({
      isLandScape:Screen.width > Screen.height,
      isLandScapeWindow:Window.width > Window.height,
      dimensions:{ window: Window, screen:Screen },
      lessThanWidth:Window.width <= lessThanValue,
      lessThanHeight: Window.height <= lessThanHeightValue
    })

    useLayoutEffect(() => {
      const subscription  = Dimensions.addEventListener(
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
      if(subscription) return () =>  subscription.remove();
    }, []);
    return mediaQuery;

  }



  export const  useStyleMinWidthQuery = (base, args,styles ) => {


    const updateStyle = (window,base)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.width >= args[i]){
            var styleFound  = styles[i]
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

    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription  = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
        if(subscription) return () =>  subscription.remove();
      }
    }, []);
    return result;


  }

  export const  useStyleMaxWidthQuery = (base, args,styles ) => {


    const updateStyle = (window,base)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.width <= args[i]){
            var styleFound  = styles[i]
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
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription  = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
        if(subscription) return () =>  subscription.remove();
      }
    }, []);
    return result;


  }

  export const  useStyleMinHeightQuery =(base, args,styles ) => {


    const updateStyle = (window,base)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.height >= args[i]){
            var styleFound  = styles[i]
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
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
        if(subscription) return () =>  subscription.remove();
      }
    }, []);
    return result;


  }

  export const  useStyleMaxHeightQuery = (base, args,styles )  => {


    const updateStyle = (window,base)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.height <= args[i]){
            var styleFound = styles[i]
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
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useEffect(() => {
     
      let isMounted = true
      const subscription = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
        if(subscription) return () =>  subscription.remove();
      }
    }, []);
    return result;


  }


  export const  usePropsMaxWidthQuery = (base, args,styles ) => {


    const updateStyle = (window,base)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.width <= args[i]){
            var styleFound  = styles[i]
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
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription  = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
        if(subscription) return () =>  subscription.remove();
      }
    }, []);
    return result;
  }

  export const  usePropsMinWidthQuery = (base, args,styles ) => {


    const updateStyle = (window,base)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.width >= args[i]){
            var styleFound = styles[i]
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
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription  = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
        if(subscription) return () =>  subscription.remove();
      }
    }, []);
    return result;

  }

  export const  usePropsMaxHeightQuery = (base, args,styles) => {


    const updateStyle = (window,base)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.height <= args[i]){
            var styleFound = styles[i]
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
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription  = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
        if(subscription) return () =>  subscription.remove();
      }
    }, []);
    return result;
  }

  export const  usePropsMinHeightQuery = (base, args,styles ) => {


    const updateStyle = (window,base)=>{
      if(args.length > 0 && (args.length === styles.length)){
        var copyStyle = Object.assign({},base)
        for(var i = 0; i < args.length ; i++){
          if(window.height >= args[i]){
            var styleFound  = styles[i]
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
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription = Dimensions.addEventListener(
        "change",
        ({ window }) => {
           let re = updateStyle(window,base)
           if(isMounted) setResult(re)
        }
      );
      return () => {
        isMounted = false
        if(subscription) return () =>  subscription.remove();
      }
    }, []);
    return result;

  }

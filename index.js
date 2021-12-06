// main index.js

import  { useEffect, useLayoutEffect, useState } from 'react';
import { Dimensions } from 'react-native';


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
      lessThanOrEqualWidth:Screen.width <= lessThanValue,
      lessThanOrEqualHeight: Screen.height <= lessThanHeightValue,
      lessThanOrEqualWidthWindow:Window.width <= lessThanValue,
      lessThanOrEqualHeightWindow: Window.height <= lessThanHeightValue
    })

    useLayoutEffect(() => {
      const subscription  = Dimensions.addEventListener(
        "change",
        ({ window,screen }) => {
           
          setMediaQuery({
            isLandScape: screen.width > screen.height,
            isLandScapeWindow:window.width > window.height,
            dimensions:{ window, screen },
            lessThanOrEqualWidth:screen.width < lessThanValue,
            lessThanOrEqualHeight: screen.height < lessThanHeightValue,
            lessThanOrEqualWidthWindow:window.width < lessThanValue,
            lessThanOrEqualHeightWindow: window.height < lessThanHeightValue
          })
    
        }
      );
      if(subscription) return () =>  subscription.remove();
    }, []);
    return mediaQuery;

  }


  export const  useStyleMinWidth = (base, args,styles,dim ) => {

    const d = dim === undefined ? 'window' : dim

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
    const Window = Dimensions.get(d)

    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription  = Dimensions.addEventListener(
        "change",
        ({ window,screen }) => {
           let ws = d === 'screen' ? screen : window
           let re = updateStyle(ws,base)
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

  export const  useStyleMaxWidth = (base, args,styles,dim ) => {

    const d = dim === undefined ? 'window' : dim

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
    const Window = Dimensions.get(d)
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription  = Dimensions.addEventListener(
        "change",
        ({ window ,screen }) => {
          let ws = d === 'screen' ? screen : window
           let re = updateStyle(ws,base)
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

  export const  useStyleMinHeight =(base, args,styles,dim ) => {

    const d = dim === undefined ? 'window' : dim

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

    const Window = Dimensions.get(d)
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription = Dimensions.addEventListener(
        "change",
        ({ window,screen }) => {
          let ws = d === 'screen' ? screen : window
           let re = updateStyle(ws,base)
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

  export const  useStyleMaxHeight = (base, args,styles,dim )  => {

    const d = dim === undefined ? 'window' : dim

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

    const Window = Dimensions.get(d)
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useEffect(() => {
     
      let isMounted = true
      const subscription = Dimensions.addEventListener(
        "change",
        ({ window ,screen}) => {
          let ws = d === 'screen' ? screen : window
           let re = updateStyle(ws,base)
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


  export const  usePropsMaxWidth = (base, args,styles,dim ) => {

    const d = dim === undefined ? 'window' : dim

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
     const Window = Dimensions.get(d)
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription  = Dimensions.addEventListener(
        "change",
        ({ window,screen }) => {
          let ws = d === 'screen' ? screen : window
           let re = updateStyle(ws,base)
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

  export const  usePropsMinWidth = (base, args,styles,dim ) => {
     const d = dim === undefined ? 'window' : dim

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

    const Window = Dimensions.get(d)
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription  = Dimensions.addEventListener(
        "change",
        ({ window,screen }) => {
          let ws = d === 'screen' ? screen : window
           let re = updateStyle(ws,base)
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

  export const  usePropsMaxHeight = (base, args,styles,dim) => {

    const d = dim === undefined ? 'window' : dim

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

  const Window = Dimensions.get(d)
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription  = Dimensions.addEventListener(
        "change",
        ({ window,screen }) => {
          let ws = d === 'screen' ? screen : window
           let re = updateStyle(ws,base)
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

  export const  usePropsMinHeight = (base, args,styles,dim ) => {
    const d = dim === undefined ? 'window' : dim

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

    const Window = Dimensions.get(d)
    const [result, setResult] = useState(updateStyle(Window,base));
    
    useLayoutEffect(() => {
      let isMounted = true
      const subscription = Dimensions.addEventListener(
        "change",
        ({ window,screen }) => {
          let ws = d === 'screen' ? screen : window
           let re = updateStyle(ws,base)
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

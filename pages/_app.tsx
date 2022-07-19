// 
// 
// '||'               '||   ||            ||          
//  ||  .. ...      .. ||  ...  ... ...  ...  ... ... 
//  ||   ||  ||   .'  '||   ||   ||'  ||  ||   '|..'  
//  ||   ||  ||   |.   ||   ||   ||    |  ||    .|.   
// .||. .||. ||.  '|..'||. .||.  ||...'  .||. .|  ||. 
//                               ||                   
//                              ''''                  
// 
// # Introduction
// - Frontend written in TypeScript
// - Styling using tailwindCSS


import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp

// powered by tingeworks
// https://www.tingeworks.com
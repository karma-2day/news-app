import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '@/components/navbar'
import { useState } from 'react'
export default function App({ Component, pageProps }) {
  return <> 
  <Head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>
  </Head>
  <Script         src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"/>
        
        <Navbar {...pageProps}/>
  <Component {...pageProps} /></>
}






// export async function getServerSideProps() {
//   // Fetch data from external API


  
    

//   // // Pass data to the page via props
//   return { props: { data: data } }
// }




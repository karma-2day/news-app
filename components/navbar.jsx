import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'

const Navbar = (props) => {

  const router = useRouter()
  console.log(props)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })

  }, [router])


  const categoryList = props.category.find((elem)=>{return elem.mainHeading=="Wallets"})
  const anotherList = props.category.filter((e)=>{return e.mainHeading!=="Wallets"})
  const finalArr = [categoryList,...anotherList]

  // console.log(categoryList)
  useEffect(() => {
closeNav()
  }, [])

  const ref = useRef()
  const closeNav = () => {
    const navElements = document.getElementsByClassName('nav-link')
    const navArray = [...navElements]
    navArray.map((e) => {
      window.innerWidth<992&&e.addEventListener('click',()=>{
        ref.current.click()
      })
    })

  }

  return (
    <>
      <LoadingBar
        color='#f11946'
        height={6}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" href='/'>Navbar</Link>
          <button ref={ref} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {finalArr.map((e)=>{
                return <li class="nav-item">
                <Link class={`nav-link`} aria-current="page" href={`/category/${e.mainHeading.toLowerCase().replace(" ","")}`}>{e.mainHeading}</Link>
              </li>
              })}
              



            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav></>
  )
}



export default Navbar
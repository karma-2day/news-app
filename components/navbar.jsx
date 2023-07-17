import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'

const Navbar = () => {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })

    console.log(router.pathname)
  }, [router])


  useEffect(() => {
closeNav()
  }, [])

  const ref = useRef()
  const closeNav = () => {
    const navElements = document.getElementsByClassName('nav-link')
    const navArray = [...navElements]
    navArray.map((e) => {
      e.addEventListener('click',()=>{
        ref.current.click()
      })
    })

  }

  return (
    <>
      <LoadingBar
        color='#f11946'
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
              <li class="nav-item">
                <Link class={`nav-link ${router.pathname == '/' && 'active'}`} aria-current="page" href='/'>Home</Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${router.pathname == '/category/business' && 'active'}`} href={'/category/business'}>Business</Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${router.pathname == '/category/entertainment' && 'active'}`} href={'/category/entertainment'}>Entertainment</Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${router.pathname == '/general' && 'active'}`} href={'/category/general'}>General</Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${router.pathname == '/health' && 'active'}`} href={'/category/health'}>Health</Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${router.pathname == '/science' && 'active'}`} href={'/category/science'}>Science</Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${router.pathname == '/sports' && 'active'}`} href={'/category/sports'}>Sports</Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${router.pathname == '/technology' && 'active'}`} href={'/category/technology'}>Technology</Link>
              </li>



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
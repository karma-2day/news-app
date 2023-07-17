import React from 'react'
import  { useRouter } from 'next/router'
const Slug = (props) => {
    const router = useRouter()
    const articles = props.data.articles
  return (
<div>

<h1 className="text-center">{router.query.slug}</h1>
<div className="container">
    <div className="row">
        {articles.map((e) => {
            return <div className="col-md-4 p-3">
                <div class="card h-100 shadow">
                    <img src={e.urlToImage?e.urlToImage:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'} class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{e.author}</h5>
                        <p class="card-text">{e.description}</p>
                        <div style={{flex:'1'}} className='d-flex justify-content-center align-items-end'>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </div>
</div>



</div>

  )
}


 
  

export async function getServerSideProps(context) {
    
    const country = context.params.slug
    // console.log(country)
    // // Fetch data from external API
    const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${country}&country=us&apiKey=b359af82dba2462c94437a9bb326aeb9`)
    const data = await res.json()
  
    // // Pass data to the page via props
    return { props: { data } }
  }
  

export default Slug
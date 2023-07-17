import Link from 'next/link'
import React from 'react'

const Home = (props) => {
  const articles = props.data.articles
  return (
    <div>

    <h1 className="text-center">News Articles</h1>
    <div className="container">
        <div className="row">
            {articles.map((e) => {
                return <div className="col-md-4 p-3">
                    <div class="card h-100 shadow">
                        <img src={e.urlToImage} class="card-img-top" alt="..." />
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



export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b359af82dba2462c94437a9bb326aeb9')
  const data = await res.json()

  // // Pass data to the page via props
  return { props: { data: data } }
}


export default Home
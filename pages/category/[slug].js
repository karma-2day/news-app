import React from 'react'
import  { useRouter } from 'next/router'
const Slug = (props) => {
  const products = props.filterData
  const router = useRouter()
  return (
    <div>

    <h1 className="text-center">{router.query.slug}</h1>
    <div className="container">
        <div className="row">
            {products.map((e) => {
                return <div className="col-md-4 p-3">
                    <div class="card h-100 shadow">
                        <img key={e.assets[0].url} src={"https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/b_black,c_pad,h_1000,w_1000/"+e.assets[0].url} class="card-img-top" alt="..." />
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">{e.name}</h5>
                            <p class="card-text">{e.price}</p>
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
    
    const categorySlug = context.params.slug
    // console.log(country)
    // // Fetch data from external API
    const url = "https://faithful-bass-yoke.cyclic.app/api/products/allproducts"
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Accept": "*",
      },

      //   body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const data = await response.json();

    const filterData = data.filter((e)=>{return e.category==categorySlug})
  


    const urlTwo = "https://faithful-bass-yoke.cyclic.app/api/getdata/getcategories"
  const responseTwo = await fetch(urlTwo, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },


    // body data type must match "Content-Type" header
  });

  const category = await responseTwo.json()
    // // Pass data to the page via props
    return { props: { filterData,category } }
  }
  

export default Slug
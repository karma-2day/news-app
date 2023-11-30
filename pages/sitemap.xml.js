// const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

function generateSiteMap(data) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
    
   
     ${data
            .map((e) => {
                return `
       <url>
           <loc>${`https://nukhba.shop/product/${e._id}`}</loc>
           
      <changefreq>weekly</changefreq>

      <priority>0.8</priority>
      <lastmod>${new Date().toISOString()}</lastmod>
       </url>
     `;
            })
            .join('')}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site

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


    const data = await response.json()
    console.log(data)

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(data);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
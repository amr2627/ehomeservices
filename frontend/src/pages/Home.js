import { Carousel } from 'react-carousel-minimal';


function Home() {
  const data = [
   
    {
      image:"https://wallpaperaccess.com/full/7150859.jpg",
      caption: "Washing Machine"
    },
    {
      image: "https://www.sony-asia.com/image/ff0a71866476e0ad65b8d848f2d7b40c?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9",
      caption: "Television"
    },
    {
      image: "https://i.ytimg.com/vi/eRcaWb6qbqM/maxresdefault.jpg",
      caption: "Oven"
    },
    {
      image: "https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-fresh-cool-cool-taobao-refrigerator-poster-banner-image_195027.jpg",
      caption: "Refrigerator"
    },
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div>
    <div className="App container-fluid w-100">
      <div style={{ textAlign: "center" }}>
        {/* <h2>EazyShopee</h2>
        <p>EazyShopee the home of appliances</p> */}
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={3000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
         
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
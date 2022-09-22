
import "../styles/about.css";

const About = () =>{

    return (
      <>
        <div className="about-section">
          <h1>About Us</h1>
          <h3>Easier Shopping Experience</h3>
          <p>
          &emsp; Welcome to <b>E-Home Services</b>, your solution of shopping household electronic Appliances.
          We're here to assist you in providing you the Appliances you need at the best prices. We were a small business, founded
          in 2022, we've come a long way and now we are expanding all over India to serve you better and better.
          In our journey, we appreciate your valuable feedback and if you have any queries or comments, please
          don't hesitate to contact us <b ><a href="./contactus.js" class="mail">here</a></b>.
        </p>
        </div>

        <h2 className="text-center">Our Team</h2>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="container">
                <h2>Prashant Patel</h2>
                <p className="title">CEO</p>
                <p>Description</p>
                <p>prashant@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="container">
                <h2>Omkar Pote</h2>
                <p className="title">Art Director</p>
                <p>Description</p>
                <p>omkar@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="container">
                <h2>Ashwini Shinde</h2>
                <p className="title">Designer</p>
                <p>Description</p>
                <p>ashwini@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="container">
                <h2>Amar Salunke</h2>
                <p className="title">Sales Manager</p>
                <p>Description</p>
                <p>amar@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default About
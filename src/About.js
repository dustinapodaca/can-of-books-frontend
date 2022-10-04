import React from 'react';
import Container from 'react-bootstrap/Container';
import image from './assets/img/DApodaca.jpg';
import image2 from './assets/img/MVincenteMejia.jpg';  

class About extends React.Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <Container className='mt-5'>
          <h2>About the Developers</h2>
          <div className="devContainer mt-4">
            <div className="dev1">
              <div>
                <img src={image} alt="Dustin" className="aboutImg"/>
                <h3>Dustin Apodaca</h3>
              </div>
              <p className="aboutInfo">Software Developer and Designer with a focus on software and technologies using Java, JavaScript, CSS3, and Solidity.
                Experienced in graphic design, network and end-user support troubleshooting, and over 8+ years management in customer
                facing roles. I am a disciplined self-starter with a goal to develop technologies utilizing blockchain and Web3
                ecosystems.</p>
            </div>
            <div className="dev2">
              <div>
                <img src={image2} alt="Maximo" className="aboutImg"/>
                <h3>Maximo Vincente Mejia</h3>
              </div>
              <p className="aboutInfo">Software Developer and Active Duty service member of the United States Army with over 7 years of organizational leadership and mentorship. I decided to learn Software Development, because I always want to have a career that gives me a purpose. I would like to use my skill to innovate current applications and am eager to contribute to this rapidly growing field.</p>
            </div>
          </div>
        </Container>
      </>
    )
  }
};

export default About;

import React from 'react';
import './Home.css';
import useAuth from '../Context/useAuth'
import Services from '../../Services/Services';
import { Card, Spinner } from 'react-bootstrap';

const Home = () => {
    const {services, isLogin} = useAuth()
    if(isLogin) {
      return (<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>)
    }
    
    return (
        <div className="home-body">
            <div className="banner">
                <img src="https://travel-img.s3.amazonaws.com/4387_web_en_All-Inclusive-1.jpg" alt="" />
            </div>
            <h1>Winter Vacation Deals</h1>
           <div className="card-container">
           {
                services.map(service => <Services
                key = {service._id}
                service = {service}
                
                ></Services>)
            }
           </div>
           <div className="third-section">
               <div>
                <h1>Vacation Deals: The Best Destinations For Cheap Vacations</h1>
               </div>
               <div className="card-contain">
   
     <Card className="single-card" border="light" style={{ width: '18rem', border: '1px solid gray' }}>
         
       <Card.Body>
        <Card.Title>Cold water place Vacations</Card.Title>
       <Card.Text>
       From the shores of idyllic Punta Cana to the culture-rich capital of Santo
        Domingo, you’ll find plenty to do in the beautiful Caribbean country of
         Dominican Republic. This is the perfect budget destination for a group—you
          can often find deals for all-inclusive vacations for less than $500 per person.
        </Card.Text>
      </Card.Body>
    </Card>
     <Card className="single-card" border="light" style={{ width: '18rem', border: '1px solid gray' }}>
         
       <Card.Body>
        <Card.Title>National Parks Vacations</Card.Title>
       <Card.Text>
       If hiking and adventure travel are more your style, try
        a trip to one of the United States’ 58 beautiful national parks.
         Exploring a national park is a fun, cheap, and reinvigorating way to
          take a break from hectic everyday life and enjoy your vacation time.
           Ditch the hotel and opt to camp in the park or nearby for even greater
            travel savings.
        </Card.Text>
      </Card.Body>
    </Card>
     <Card className="single-card" border="light" style={{ width: '18rem', border: '1px solid gray' }}>
         
       <Card.Body>
        <Card.Title>Vacations In Puerto Rico</Card.Title>
       <Card.Text>
       The diverse landscape of Puerto Rico draws you in to
        experience its waterfalls, mountains, rainforests, and
         beautiful beaches for yourself. We regularly see flights to
          Puerto Rico from major U.S. cities for under $200, and vacation
           packages under $500.
        </Card.Text>
      </Card.Body>
    </Card>
               </div>
           </div>
           
           <div>
             <h1>Subscribe to our Newsletter</h1>
             <p>By signing up for our newsletter, you will regularly receive our best vacation deals and travel information.

</p>
            <input style={{marginBottom: '10px' , width: '65%', padding: '20px', borderRadius: '30px'}} type="name" placeholder="Your name" />
            <br />
            <input style={{ width: '65%', padding: '20px', borderRadius: '30px'}} type="email" placeholder="Email Address" />
            <br />
            <button style={{marginTop:'5px',padding: '15px 60px', marginRight: '10px', borderRadius: '30px'}} className="card-button">Subscribe</button>
            <p>By subscribing to our Newsletter you also accept our privacy policy. 
                You can unsubscribe from our Newsletter at any time.</p>
           </div>
           
        </div>
    );
};

export default Home;
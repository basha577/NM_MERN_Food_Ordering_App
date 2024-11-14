import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import PopularRestaurants from '../components/PopularRestaurants'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();

  const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{
        fetchRestaurants();
      }, [])

    const fetchRestaurants = async() =>{
        await axios.get('http://localhost:6001/fetch-restaurants').then(
          (response)=>{
            setRestaurants(response.data);
          }
        )
      }

  return (
    <div className="HomePage">

      <div className="home-categories-container">

        <div className="home-category-card" onClick={()=>navigate('/category/Soup')}>
          <img src="https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?t=st=1731316655~exp=1731320255~hmac=b5a9154676a2027c0132ced8fcb1a8a49562f5ea45a0b5c732279a6421581a6c&w=740" alt="" />
          <h5>Soup</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Briyani')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-VXaTJIkc6rk02DU8r7r9zR-KaeWvH1oKA&usqp=CAU" alt="" />
          <h5>Briyani</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Pizza')}>
          <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" />
          <h5>Pizza</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Noodles')}>
          <img src="https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_2176816723.jpg" alt="" />
          <h5>Noodles</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Burger')}>
          <img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h5>Burger</h5>
        </div>

      </div>


      <PopularRestaurants />

      


      <div className="restaurants-container">
        <div className="restaurants-body">
            <h3>All restaurants</h3>
            <div className="restaurants">

                {restaurants.map((restaurant) =>(

                  <div className='restaurant-item' key={restaurant._id}>
                      <div className="restaurant" onClick={()=> navigate(`/restaurant/${restaurant._id}`)}>
                          <img src={restaurant.mainImg} alt="" />
                          <div className="restaurant-data">
                              <h6>{restaurant.title}</h6>
                              <p>{restaurant.address}</p>
                          </div>
                      </div>
                  </div>
                ))}

 
            </div>
        </div>
    </div>





      <Footer />
    </div>
  )
}

export default Home
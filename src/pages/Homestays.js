// src/pages/Homestays.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Homestays.css';
import '../photos/kanyakumari1.jpg';

const data = {
  Delhi: {
      homestays: [
          { name: 'Delhi Homestay 1', price: '$30/night', img: 'https://r1imghtlak.mmtcdn.com/082f1ae6330211eb9c050242ac110004.jpg?&output-quality=75&downsize=328:180&crop=328:180;0,19&output-format=jpg'},
          { name: 'Delhi Homestay 1', price: '$30/night', img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/232826678.webp?k=7c3ffae46e5a9988fecc5e9c662e5445710e8eff5c18d1a1d186a1a46d24ae5e&o='},
          { name: 'Delhi Homestay 3', price: '$40/night', img: 'https://th.bing.com/th/id/R.bbca9c7c776558b5c87914eca875cc24?rik=6u57unEXukKBrw&riu=http%3a%2f%2fwww.new-delhi-hotels.com%2fblog%2fwp-content%2fuploads%2f2012%2f11%2fTaj-Palace-New-Delhi.jpg&ehk=DAqPBjIM7MFknYbgZJtycAWQ8Nvyf6UbRpEFVlGnoco%3d&risl=&pid=ImgRaw&r=0' },
          { name: 'Delhi Homestay 4', price: '$45/night', img: 'https://www.mistay.in/travel-blog/content/images/2019/02/hotel-2331757_1920.jpg' },
          { name: 'Delhi Homestay 5', price: '$50/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8p7rMZiF4G9L0Y449t35RbH00ZOxmB5zJw&s' },
          { name: 'Delhi Homestay 6', price: '$55/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yP7RPp1xchEwfA3Z4_5CsYeud2pKcs51dQ&s' },
          { name: 'Delhi Homestay 7', price: '$60/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJqSdLZP8rI6evVS_CVI8pnJHsu92hZhirw&s' },
          { name: 'Delhi Homestay 8', price: '$65/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3puaLDnj7-P6FF5xMabxGnKCcdyJ1ocbURQ&s' }
      ]
  },
  Goa: {
      homestays: [
          { name: 'Goa Homestay 1', price: '$40/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6BOyvN03hSP9QInh1PdG2JdLqX5Gx1QBHA&s' },
          { name: 'Goa Homestay 2', price: '$45/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtPRUFZqRVug0xzPZdj9fk727QNS1boeL8UQ&s' },
          { name: 'Goa Homestay 3', price: '$50/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHRt1Bf4eEKB0Ip1mgipdb5fgH1W1vaZNaA&s' },
          { name: 'Goa Homestay 4', price: '$55/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-zhlDFmKb2_c2lL5eBscpjlrbOgHS2etzw&s' },
          { name: 'Goa Homestay 5', price: '$60/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5W6r85vIwNhx_mC1sHHbl5yCSeN8ud47Jw&s' },
          { name: 'Goa Homestay 6', price: '$65/night', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9c/5a/02/the-baga-beach-resort.jpg?w=700&h=-1&s=1' },
          { name: 'Goa Homestay 7', price: '$70/night', img: 'https://cf.bstatic.com/xdata/images/hotel/270x200/531646160.jpg?k=ea3c26e598e75e25aed5961bcaa207e1a73a0c791f302e42f243ec5ef47986c7&o=' },
          { name: 'Goa Homestay 8', price: '$75/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwTeloBz42l4rYtaJGSwffwrz2gM1uiMCfQ&s' }
      ]
  },
  Manali: {
      homestays: [
          { name: 'Manali Homestay 1', price: '$35/night', img: 'https://th.bing.com/th/id/R.4ca56c3f6f188c9d2015d9c7a9cfbf18?rik=EL23jV3ZI5UKAw&riu=http%3a%2f%2fkullumanali.org%2fimages%2fhotels%2fHotelRoyelParkResortManali4.jpg&ehk=pp4dRcINvZTqodcu7OaIsZUXBUDwKqhlmrLfAsgdQlk%3d&risl=&pid=ImgRaw&r=0' },
          { name: 'Manali Homestay 2', price: '$40/night', img: 'https://www.sandhyahotels.in/public/sandya_hotels/img/kasol-facade.jpg' },
          { name: 'Manali Homestay 3', price: '$45/night', img: 'https://pix10.agoda.net/hotelImages/7443373/-1/2ef4217d00f860228a0a6b703a06fce2.jpg?s=1024x768' },
          { name: 'Manali Homestay 4', price: '$50/night', img: 'https://www.sandhyahotels.in/public/sandya_hotels/img/home2.jpg' },
          { name: 'Manali Homestay 5', price: '$55/night', img: 'https://www.honeymoonpackagesmanali.org/uploads/8/2/6/1/8261259/hotel-wild-rose-manali_orig.jpg' },
          { name: 'Manali Homestay 6', price: '$60/night', img: 'https://image3.mouthshut.com/images/imagesp/925803246s.jpg' },
          { name: 'Manali Homestay 7', price: '$65/night', img: 'https://spanresorts.com/wp-content/uploads/2023/07/elite3-2.jpg' },
          { name: 'Manali Homestay 8', price: '$70/night', img: 'https://i.pinimg.com/736x/75/9b/20/759b20918007c39546e127a67f077131.jpg' }
      ]
  },
  Ladakh: {
      homestays: [
          { name: 'Ladakh Homestay 1', price: '$50/night', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/e8/1a/db/angkasa-ladakh-resort.jpg?w=1400&h=-1&s=1' },
          { name: 'Ladakh Homestay 2', price: '$55/night', img: 'https://www.holidify.com/images/cmsuploads/compressed/170109421_20220223171746.jpg' },
          { name: 'Ladakh Homestay 3', price: '$60/night', img: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/11/215317267.jpg' },
          { name: 'Ladakh Homestay 4', price: '$65/night', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/2f/ed/20/ladakh-residency.jpg?w=900&h=-1&s=1' },
          { name: 'Ladakh Homestay 5', price: '$70/night', img: 'https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/ladakh-himalayan-retreat9.jpg' },
          { name: 'Ladakh Homestay 6', price: '$75/night', img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/419128248.jpg?k=ba31fe7d09a21445a753d70b18c7edc21d582d8687d53954580e5a6e8cee05f3&o=&hp=1' },
          { name: 'Ladakh Homestay 7', price: '$80/night', img: 'https://unwindoutdoor.com/wp-content/uploads/2020/01/slider_2-1400x510.jpg?v=1638339052' },
          { name: 'Ladakh Homestay 8', price: '$85/night', img: 'https://www.mantrahotelleh.com/img/gallery/7.jpg' }
      ]
  },
  Ooty: {
      homestays: [
          { name: 'Ooty Homestay 1', price: '$45/night', img: 'https://www.holidify.com/images/cmsuploads/compressed/230028774_20210122153350.jpg' },
          { name: 'Ooty Homestay 2', price: '$50/night', img: 'https://th.bing.com/th/id/R.7873440cd02e5c4fd99e754f960e0307?rik=b7W3ZRbyc1ilOw&riu=http%3a%2f%2fpix3.agoda.net%2fhotelimages%2f344320%2f-1%2f58ce1c1f9e944a712b60aef828854168.jpg%3fs%3d1200x%26ca%3d8%26ce%3d1&ehk=OCjWZl3gURilB%2b324ohL6KK0QJx1B2mWopdMmO2U6Nc%3d&risl=&pid=ImgRaw&r=0' },
          { name: 'Ooty Homestay 3', price: '$55/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1e8-7ie5VzeqhLF7PafwpkpV9z7Cz8qi2Q&s' },
          { name: 'Ooty Homestay 4', price: '$60/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpg-Pum5mC311TYUVc4A-fkvtsoBoGtoD4SQ&s' },
          { name: 'Ooty Homestay 5', price: '$65/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgk3nEqUZS5qxQmyfOa54rSDrdqHCtHfHpg&s' },
          { name: 'Ooty Homestay 6', price: '$70/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKFWJs49bi33c3JbjW_06jP_OxwHLTjgZ6Q&s' },
          { name: 'Ooty Homestay 7', price: '$75/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOVLnleS9JspT17ogEHvIklERbxPLcisf6A&s' },
          { name: 'Ooty Homestay 8', price: '$80/night', img: 'https://r1imghtlak.ibcdn.com/cea4f38a062e11eca09a0a58a9feac02.jpg?&downsize=400:200&crop=400:200;0,2&output-format=webp' }
      ]
  },
  Darjeeling: {
      homestays: [
          { name: 'Darjeeling Homestay 1', price: '$30/night', img: 'homestay1.jpg' },
          { name: 'Darjeeling Homestay 2', price: '$35/night', img: 'homestay2.jpg' },
          { name: 'Darjeeling Homestay 3', price: '$40/night', img: 'homestay3.jpg' },
          { name: 'Darjeeling Homestay 4', price: '$45/night', img: 'homestay4.jpg' },
          { name: 'Darjeeling Homestay 5', price: '$50/night', img: 'homestay5.jpg' },
          { name: 'Darjeeling Homestay 6', price: '$55/night', img: 'homestay6.jpg' },
          { name: 'Darjeeling Homestay 7', price: '$60/night', img: 'homestay7.jpg' },
          { name: 'Darjeeling Homestay 8', price: '$65/night', img: 'homestay8.jpg' }
      ]
  },
  Kanyakumari: {
      homestays: [
          { name: 'Kanyakumari Homestay 1', price: '$25/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfp0y59cjhythVy3RMl0PUdcJk7YnGcbapg&s' },
          { name: 'Kanyakumari Homestay 2', price: '$30/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtbUwtHE28q3jTlJcu3vdLUwq5EscMvS74g&s' },
          { name: 'Kanyakumari Homestay 3', price: '$35/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQjQFuJOQ9IiQGgqgoBQeT4nGUeBVccFXJw&s' },
          { name: 'Kanyakumari Homestay 4', price: '$40/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBK6v-pT--hLAk-Ou7zqA5CexzmpRPRxtVQ&s' },
          { name: 'Kanyakumari Homestay 5', price: '$45/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQjQFuJOQ9IiQGgqgoBQeT4nGUeBVccFXJw&s' },
          { name: 'Kanyakumari Homestay 6', price: '$50/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7Qpi-MrU_23jQoqU9_LurjCsfhqosWe2tw&s' },
          { name: 'Kanyakumari Homestay 7', price: '$55/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7en8QrdgxBcgnzqQu6WzwGxJn6Ipat0tsw&s' },
          { name: 'Kanyakumari Homestay 8', price: '$60/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9026D7C1MbCAfPu1bgIo6a7LxJgnQYCrDWw&s' }
      ]
  },
  Jaipur: {
      homestays: [
          { name: 'Jaipur Homestay 1', price: '$40/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQnLyrY-9Y2n9uPTd5Q9YD_emdkxxzNRypQ&s' },
          { name: 'Jaipur Homestay 2', price: '$45/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-00ANzfd7WMle3HxR0jypHm_C8kXimbqMg&s' },
          { name: 'Jaipur Homestay 3', price: '$50/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTptLPqRntxqeC2s_QI_OkgJTNz5XLAGmlUXQ&s' },
          { name: 'Jaipur Homestay 4', price: '$55/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2ht8AJ9YDrM6SIaYZrch4PxxfdTCZvXoWQ&s' },
          { name: 'Jaipur Homestay 5', price: '$60/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-N_WDycSjpmiZipUsYy5G5q77QmFSNzSaAw&s' },
          { name: 'Jaipur Homestay 6', price: '$65/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRE_4LWnwQSMpVT8GWQSpxU83PHLzLno6Abg&s' },
          { name: 'Jaipur Homestay 7', price: '$70/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-PovxwBafGrjYE1W4MsT1HWEWTjaXc9AuA&s' },
          { name: 'Jaipur Homestay 8', price: '$75/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQae9ThCc-X3zAtksq0Wks6uxx-1DFM04JZ3w&s' }
      ]
  },
  Shimla: {
      homestays: [
          { name: 'Shimla Homestay 1', price: '$35/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-00ANzfd7WMle3HxR0jypHm_C8kXimbqMg&s' },
          { name: 'Shimla Homestay 2', price: '$40/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQglVeRWAYxOq_tJ6w1qwRXmS2ygovYrvRubA&s' },
          { name: 'Shimla Homestay 3', price: '$45/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRly-kGe5_LXelLoBuJMvQBwKovFfdIlBi5JA&s' },
          { name: 'Shimla Homestay 4', price: '$50/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-C8oitS1YJgnEy78yK_uh9dEG336A88law&s' },
          { name: 'Shimla Homestay 5', price: '$55/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCBhzwXSzv6YM38pkFFd29uqzoR6Jac-Wjg&s' },
          { name: 'Shimla Homestay 6', price: '$60/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWz2MWiP7ctI3oCVMNT6JQk4Vdwcb-I5wAw&s' },
          { name: 'Shimla Homestay 7', price: '$65/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItNz-zuphIy-yl7plcMKhgISchH5eXOJsQ&s' },
          { name: 'Shimla Homestay 8', price: '$70/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJIvipaAKdXzS45o2ZJXe0LQiNcxxtFHNYg&s' }
      ]
  },
  Coorg: {
      homestays: [
          { name: 'Coorg Homestay 1', price: '$50/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEC-91sqp0XCcjhExAiXaWnjaZ87ONQEWciA&s' },
          { name: 'Coorg Homestay 2', price: '$55/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdUtwyrB89Zrh4Ul7x9jOt8t_5a5rT-E3pA&s' },
          { name: 'Coorg Homestay 3', price: '$60/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJp044XEROLmolevKImss2xfiPlMpqsv6Eg&s' },
          { name: 'Coorg Homestay 4', price: '$65/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TTlMIi4Gn0uZy4bdbAoZ5-RkMWqeFFeYuA&s' },
          { name: 'Coorg Homestay 5', price: '$70/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Rn2IeNmHfN2AwU5suHtnghzv8_em2JxcmA&s' },
          { name: 'Coorg Homestay 6', price: '$75/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JWiLdOa3YSCVRR1YIVD0JeTgLx4Ayc7MsQ&s' },
          { name: 'Coorg Homestay 7', price: '$80/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fEXU0rQ7-9UuPMDKmhaPXF-S9weIWcss4g&s' },
          { name: 'Coorg Homestay 8', price: '$85/night', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPy0ZUzQYibCRvObYThOtQ-PeZ_mGsnn9azg&s' }
      ]
  }
};

const Homestays = () => {
    const [selectedCity, setSelectedCity] = useState('Delhi'); // default city
    const navigate = useNavigate();

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div className="homestays-container">
            <h2>Homestays in {selectedCity}</h2>

            {/* Dropdown to select city */}
            <select value={selectedCity} onChange={handleCityChange} className="city-select">
                {Object.keys(data).map((city) => (
                    <option key={city} value={city}>{city}</option>
                ))}
            </select>

            <div className="homestay-list">
                {data[selectedCity].homestays.map((homestay, index) => (
                    <div key={index} className="homestay-card">
                        <img src={homestay.img} alt={homestay.name} className="homestay-image" />
                        <h3>{homestay.name}</h3>
                        <p>{homestay.price}</p>
                        <button
                            onClick={() => navigate('/booking')}
                            className="book-now-btn"
                        >
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homestays;

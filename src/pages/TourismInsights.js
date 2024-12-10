import React, { useState } from 'react';
import '../Style/TourismInsights.css';


const TourismInsights = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [tourPlan, setTourPlan] = useState([]);

  // List of places with images, descriptions, and itineraries
  const allPlaces = [
    {
      id: 1,
      name: 'Paris',
      description: 'The City of Light, known for the Eiffel Tower and the Louvre.',
      itinerary: [
        { time: '7:00 PM', activity: 'Visit the Eiffel Tower for evening lights.', image: 'https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg' },
        { time: '9:00 AM', activity: 'Explore the Louvre Museum.', image: 'https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2020/02/714px-Louvre_Museum_Wikimedia_Commons.jpg' },
        { time: '12:00 PM', activity: 'Walk along the Champs-Élysées.', image: 'https://cdn.sortiraparis.com/images/80/97130/812281-visuels-musee-et-monument-arc-de-triomphe.jpg' },
        { time: '3:00 PM', activity: 'Relax at Jardin du Luxembourg.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VGv6I5dMGgk7mMMr74bBxJHC69luHVl_rQ&s' },
        { time: '8:00 PM', activity: 'Dinner at a Seine riverside café.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKboQbkdj5QBN9E4Q9NC26UaUs_0oGgSqF0A&s' },
      ],
    },
    {
      id: 2,
      name: 'Dubai',
      description: 'Luxury shopping, ultramodern architecture, and vibrant nightlife.',
      itinerary: [
        { time: '10:00 AM', activity: 'Visit the Burj Khalifa observation deck.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREthwRp_Ey_9_KhtEz8lUlIpIcvNWSumWLUA&s' },
        { time: '1:00 PM', activity: 'Explore Dubai Mall and its aquarium.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1iwaoHEjeMZypFAiOfDK-MYCekyIW_xvrg&s' },
        { time: '4:00 PM', activity: 'Relax at Jumeirah Beach.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtldKVJX85x_PT2OeldE70NCNFF5b0ZFigA&s' },
        { time: '7:00 PM', activity: 'Watch the Dubai Fountain show.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mlOxq8mA35T_nadmB36Fnw348E1rPP0dfQ&s' },
        { time: '9:00 PM', activity: 'Dine at a rooftop restaurant.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpKuP0k7H13sfmWVktaeJ9wUXqfPl5bGNqAw&s' },
      ],
    },
    {
      id: 3,
      name: 'Tokyo',
      description: 'A bustling metropolis with ancient temples and modern skyscrapers.',
      itinerary: [
        { time: '9:00 AM', activity: 'Visit Senso-ji Temple.', image: 'https://res-1.cloudinary.com/jnto/image/upload/w_2064,h_1300,c_fill,f_auto,fl_lossy,q_auto/v1675339920/tokyo/Tokyo_s_id19_18' },
        { time: '12:00 PM', activity: 'Explore the streets of Akihabara.', image: 'https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2023-01/things-to-do-akihabara_1.jpeg?itok=oNAlOvwW' },
        { time: '3:00 PM', activity: 'Relax at Ueno Park.', image: 'https://c8.alamy.com/comp/P110C9/ueno-park-is-most-popular-public-relax-green-space-lake-with-pedal-boats-in-central-of-tokyo-established-in-1873-with-8800-trees-and-sakura-that-bloo-P110C9.jpg' },
        { time: '7:00 PM', activity: 'Experience Shibuya Crossing at night.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQaaYlEzfTkLLaO_MVe735H5C7gFG_yP_uw&s' },
        { time: '9:00 PM', activity: 'Dinner in a traditional sushi restaurant.', image: 'https://media.cntraveller.com/photos/6227266967f49d736421419e/master/w_320%2Cc_limit/sushisamba-mar22-pr-Steven%2520Joyce-.jpg' },
      ],
    },
    {
      id: 4,
      name: 'New York',
      description: 'The Big Apple, famous for Times Square and Central Park.',
      itinerary: [
        { time: '9:00 AM', activity: 'Walk through Central Park.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlzgyxfXaYuRygzFDUwXSfEIeevz3eKwMdWQ&s' },
        { time: '11:00 AM', activity: 'Visit the Statue of Liberty.', image: 'https://aws-tiqets-cdn.imgix.net/images/content/372d4735e3d8401b9370fcf214652296.jpg?auto=format%2Ccompress&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=d5b4b244c911ab05b0a874a17775c3b1' },
        { time: '2:00 PM', activity: 'Explore the Metropolitan Museum of Art.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpC_P3Kp-VY0piR6iX7fWWqBO3KkEugldQtQ&s' },
        { time: '5:00 PM', activity: 'Walk through Times Square.', image: 'https://media.cntraveler.com/photos/53db21cf6dec627b14a1c453/master/pass/Times-Square-Tourist-Tips.jpg' },
        { time: '8:00 PM', activity: 'Dinner at a rooftop restaurant.', image: 'https://sumesshmenonassociates.com/wp-content/uploads/2020/10/flying-saucer-andheri-banner-desk.jpg' },
      ],
    },
    {
      id: 5,
      name: 'London',
      description: 'Known for Big Ben, Buckingham Palace, and rich history.',
      itinerary: [
        { time: '9:00 AM', activity: 'Watch the Changing of the Guard at Buckingham Palace.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVy6g3zkXXzLn-deE4OMjYIGD4pZIfsU53Bg&s' },
        { time: '11:00 AM', activity: 'Tour the Tower of London.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjnVTwkt6jnOYlsba8k1G-neooeq2RLY96g&s' },
        { time: '2:00 PM', activity: 'Walk across Tower Bridge.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjckPWxsrAwLq9rREjDUxqgHr-Vq_CGGFOMw&s' },
        { time: '4:00 PM', activity: 'Visit the British Museum.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuW1xb-t0mtdkBsG-OjcPG6H63svA72bRlA&s' },
        { time: '7:00 PM', activity: 'Dinner in Covent Garden.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5d3a5OtQQ6DARjtZdkmrpvHqshbudjMbcZA&s' },
      ],
    },
    {
      id: 6,
      name: 'Rome',
      description: 'Famous for ancient history and landmarks like the Colosseum and the Roman Forum.',
      itinerary: [
        { time: '10:00 AM', activity: 'Visit the Colosseum.', image: '' },
        { time: '1:00 PM', activity: 'Explore the Roman Forum.', image: '' },
        { time: '3:00 PM', activity: 'Relax at the Spanish Steps.', image: '' },
        { time: '6:00 PM', activity: 'See the Trevi Fountain.', image: '' },
        { time: '8:00 PM', activity: 'Dinner in Trastevere.', image: '' },
      ],
    },
    {
      
      id: 7,
      name: 'Sydney',
      description: 'Known for its beautiful harbor and landmarks like the Sydney Opera House.',
      itinerary: [
        { time: '9:00 AM', activity: 'Visit the Sydney Opera House.', image: 'https://destinationlesstravel.com/wp-content/uploads/2023/10/Inside-the-concert-hall-of-the-Sydney-Opera-House-as-seen-on-a-tour-1200x800.jpg.webp' },
        { time: '12:00 PM', activity: 'Relax at Bondi Beach.', image: 'https://media.istockphoto.com/id/515070480/photo/people-relaxing-on-the-bondi-beach-in-sydney-australia.jpg?s=612x612&w=0&k=20&c=pPSH0cIH6gagZS5PSecVwOm1fDgEaDkYVy_PzJyt9ms=' },
        { time: '3:00 PM', activity: 'Explore Darling Harbour.', image: 'https://digital.ihg.com/is/image/ihg/crowne-plaza-sydney-7151558164-2x1' },
        { time: '6:00 PM', activity: 'Walk across Sydney Harbour Bridge.', image: 'https://www.tripsavvy.com/thmb/2sCPfySOTvqYEX8utL2_YJnrG1Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SydneyHarbour_2WEB-699b7bb46d674b3caaf3a3f556fd5356.jpg' },
        { time: '8:00 PM', activity: 'Dinner at Circular Quay.', image: 'https://sitchu.com.au/media/c0odyi2k/whalebridge-3.jpg?crop=0,0.17740106731708219,0,0.37826559934958459&cropmode=percentage&width=540&height=360&rnd=133488560560570000&format=webp&quality=80' },
      ],
    },
    {
      id: 8,
      name: 'Barcelona',
      description: 'Known for its architecture and landmarks like the Sagrada Família.',
      itinerary: [
        { time: '9:00 AM', activity: 'Visit Sagrada Família.', image: 'https://via.placeholder.com/300x200?text=Sagrada+Familia' },
        { time: '12:00 PM', activity: 'Walk down La Rambla.', image: 'https://via.placeholder.com/300x200?text=La+Rambla' },
        { time: '3:00 PM', activity: 'Relax at Parc Güell.', image: 'https://via.placeholder.com/300x200?text=Parc+Güell' },
        { time: '6:00 PM', activity: 'Explore the Gothic Quarter.', image: 'https://via.placeholder.com/300x200?text=Gothic+Quarter' },
        { time: '8:00 PM', activity: 'Dinner at a tapas bar.', image: 'https://via.placeholder.com/300x200?text=Tapas+Bar' },
      ],
    },
    {
      id: 9,
      name: 'Cairo',
      description: 'Famous for its ancient pyramids and the Great Sphinx.',
      itinerary: [
        { time: '9:00 AM', activity: 'Visit the Great Pyramid of Giza.', image: 'https://via.placeholder.com/300x200?text=Great+Pyramid+of+Giza' },
        { time: '12:00 PM', activity: 'Explore the Egyptian Museum.', image: 'https://via.placeholder.com/300x200?text=Egyptian+Museum' },
        { time: '3:00 PM', activity: 'Relax by the Nile River.', image: 'https://via.placeholder.com/300x200?text=Nile+River' },
        { time: '6:00 PM', activity: 'See the Sphinx.', image: 'https://via.placeholder.com/300x200?text=Great+Sphinx' },
        { time: '8:00 PM', activity: 'Dinner at a rooftop restaurant with a view of the pyramids.', image: 'https://via.placeholder.com/300x200?text=Rooftop+Restaurant' },
      ],
    },
    {
      id: 10,
      name: 'Cape Town',
      description: 'Known for its stunning beaches and Table Mountain.',
      itinerary: [
        { time: '9:00 AM', activity: 'Take the cable car to Table Mountain.', image: 'https://via.placeholder.com/300x200?text=Table+Mountain' },
        { time: '12:00 PM', activity: 'Relax at Camps Bay Beach.', image: 'https://via.placeholder.com/300x200?text=Camps+Bay+Beach' },
        { time: '3:00 PM', activity: 'Visit the Kirstenbosch Botanical Gardens.', image: 'https://via.placeholder.com/300x200?text=Kirstenbosch+Botanical+Gardens' },
        { time: '6:00 PM', activity: 'Walk through the V&A Waterfront.', image: 'https://via.placeholder.com/300x200?text=V&A+Waterfront' },
        { time: '8:00 PM', activity: 'Dinner at a waterfront restaurant.', image: 'https://via.placeholder.com/300x200?text=Waterfront+Restaurant' },
      ],
    }
  ];
  
  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter places based on search query
  const filteredPlaces = allPlaces.filter((place) =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle place selection
  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setTourPlan(place.itinerary);
  };

  return (
    <div className="tourism-insights">
      <h1>Tourism Insights</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a place..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Selected Place and Tour Planning */}
      {selectedPlace && (
        <div className="tour-plan">
          <h2>Plan Your Tour for {selectedPlace.name}</h2>
          <p>{selectedPlace.description}</p>

          {/* Display Planned Activities with Images */}
          <div className="activity-list">
            <h3>Suggested Two-Day Itinerary</h3>
            <ul>
              {tourPlan.map((item, index) => (
                <li key={index}>
                  <div className="activity">
                    <strong>{item.time}</strong>: {item.activity}
                    <img src={item.image} alt={item.activity} className="activity-image" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Places List (removed "Best Places to Explore" section) */}
      <div className="places-list">
        <div className="places-grid">
          {filteredPlaces.map((place) => (
            <div key={place.id} className="place-card" onClick={() => handlePlaceSelect(place)}>
              <img src={place.image} alt={place.name} className="place-image" />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourismInsights;

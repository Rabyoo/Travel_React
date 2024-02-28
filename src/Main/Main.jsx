import React, {useEffect} from 'react'
import './Main.css'

// Images Div
import img from './images/pexels-aleksandar-pasaric-1285625.jpg';
import img2 from './images/pexels-asad-photo-maldives-1266831.jpg';
import img3 from './images/pexels-quang-nguyen-vinh-2132126.jpg';
import img4 from './images/pexels-daria-voronkov-14704105.jpg';
import img5 from './images/pexels-ensaio-da-cegueira-14417904.jpg';
import img6 from './images/pexels-jack-redgate-5855579.jpg';
import img7 from './images/pexels-james-wheeler-417074.jpg';
import img8 from './images/pexels-jason-steffan-2125075.jpg';
import img9 from './images/pexels-josh-withers-16625678.jpg';
import img10 from './images/pexels-julien-riedel-19869392.jpg';

// Import Icons
import { GrLocation } from "react-icons/gr";
import { BsClipboard2Check } from "react-icons/bs";

// Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        "address": {
            "geolocation": {
                "lat": "-37.3159",
                "long": "81.1496"
            },
            "city": "kilcoole",
            "street": "new road",
            "number": 7682,
            "zipcode": "12926-3874"
        },
        "id": 1,
        "email": "john@gmail.com",
        "username": "johnd",
        "password": "m38rmF$",
        "name": {
            "firstname": "john",
            "lastname": "doe"
        },
        "phone": "1-570-236-7033",
        "__v": 0,
        imgSrc:img,
        destImg:'Description for this image',
        destTitle: "Bora Bora",
        grade:"Cultural Relax",
        description:"bla bla bla bla bla bla bla",
    },
    {
        "address": {
            "geolocation": {
                "lat": "-37.3159",
                "long": "81.1496"
            },
            "city": "kilcoole",
            "street": "Lovers Ln",
            "number": 7267,
            "zipcode": "12926-3874"
        },
        "id": 2,
        "email": "morrison@gmail.com",
        "username": "mor_2314",
        "password": "83r5^_",
        "name": {
            "firstname": "david",
            "lastname": "morrison"
        },
        "phone": "1-570-236-7033",
        "__v": 0,
        imgSrc:img2,
        destImg:'Description for this image',
        destTitle: "Bora Bora",
        grade:"Cultural Relax",
        description:"bla bla bla bla bla bla bla",
    },
    {
        "address": {
            "geolocation": {
                "lat": "40.3467",
                "long": "-30.1310"
            },
            "city": "Cullman",
            "street": "Frances Ct",
            "number": 86,
            "zipcode": "29567-1452"
        },
        "id": 3,
        "email": "kevin@gmail.com",
        "username": "kevinryan",
        "password": "kev02937@",
        "name": {
            "firstname": "kevin",
            "lastname": "ryan"
        },
        "phone": "1-567-094-1345",
        "__v": 0,
        imgSrc:img3,
        destImg:'Description for this image',
        destTitle: "Bora Bora",
        grade:"Cultural Relax",
        description:"bla bla bla bla bla bla bla",
    },
    {
        "address": {
            "geolocation": {
                "lat": "50.3467",
                "long": "-20.1310"
            },
            "city": "San Antonio",
            "street": "Hunters Creek Dr",
            "number": 6454,
            "zipcode": "98234-1734"
        },
        "id": 4,
        "email": "don@gmail.com",
        "username": "donero",
        "password": "ewedon",
        "name": {
            "firstname": "don",
            "lastname": "romer"
        },
        "phone": "1-765-789-6734",
        "__v": 0,
        imgSrc:img4,
        destImg:'Description for this image',
        destTitle: "Bora Bora",
        grade:"Cultural Relax",
        description:"bla bla bla bla bla bla bla",
    },
    {
        "address": {
            "geolocation": {
                "lat": "40.3467",
                "long": "-40.1310"
            },
            "city": "san Antonio",
            "street": "adams St",
            "number": 245,
            "zipcode": "80796-1234"
        },
        "id": 5,
        "email": "derek@gmail.com",
        "username": "derek",
        "password": "jklg*_56",
        "name": {
            "firstname": "derek",
            "lastname": "powell"
        },
        "phone": "1-956-001-1945",
        "__v": 0,
        imgSrc:img5,
        destImg:'Description for this image',
        destTitle: "Bora Bora",
        grade:"Cultural Relax",
        description:"bla bla bla bla bla bla bla",
    },
    {
        "address": {
            "geolocation": {
                "lat": "20.1677",
                "long": "-10.6789"
            },
            "city": "el paso",
            "street": "prospect st",
            "number": 124,
            "zipcode": "12346-0456"
        },
        "id": 6,
        "email": "david_r@gmail.com",
        "username": "david_r",
        "password": "3478*#54",
        "name": {
            "firstname": "david",
            "lastname": "russell"
        },
        "phone": "1-678-345-9856",
        "__v": 0,
        imgSrc:img6,
        destImg:'Description for this image',
        destTitle: "Bora Bora",
        grade:"Cultural Relax",
        description:"bla bla bla bla bla bla bla",
    },
    {
        "address": {
            "geolocation": {
                "lat": "10.3456",
                "long": "20.6419"
            },
            "city": "fresno",
            "street": "saddle st",
            "number": 1342,
            "zipcode": "96378-0245"
        },
        "id": 7,
        "email": "miriam@gmail.com",
        "username": "snyder",
        "password": "f238&@*$",
        "name": {
            "firstname": "miriam",
            "lastname": "snyder"
        },
        "phone": "1-123-943-0563",
        "__v": 0,
        imgSrc:img7,
        destImg:'Description for this image',
        destTitle: "Bora Bora",
        grade:"Cultural Relax",
        description:"bla bla bla bla bla bla bla",
    },
    {
        "address": {
            "geolocation": {
                "lat": "50.3456",
                "long": "10.6419"
            },
            "city": "mesa",
            "street": "vally view ln",
            "number": 1342,
            "zipcode": "96378-0245"
        },
        "id": 8,
        "email": "william@gmail.com",
        "username": "hopkins",
        "password": "William56$hj",
        "name": {
            "firstname": "william",
            "lastname": "hopkins"
        },
        "phone": "1-478-001-0890",
        "__v": 0,
        imgSrc:img8,
        destImg:'Description for this image',
        destTitle: "Bora Bora",
        grade:"Cultural Relax",
        description:"bla bla bla bla bla bla bla",
    },
    {
        "address": {
            "geolocation": {
                "lat": "40.12456",
                "long": "20.5419"
            },
            "city": "miami",
            "street": "avondale ave",
            "number": 345,
            "zipcode": "96378-0245"
        },
        "id": 9,
        "email": "kate@gmail.com",
        "username": "kate_h",
        "password": "kfejk@*_",
        "name": {
            "firstname": "kate",
            "lastname": "hale"
        },
        "phone": "1-678-456-1934",
        "__v": 0,
        imgSrc:img9,
        destImg:'Description for this image',
        destTitle: "Bora Bora",
        grade:"Cultural Relax",
        description:"bla bla bla bla bla bla bla",
    },
    {
        "address": {
            "geolocation": {
                "lat": "30.24788",
                "long": "-20.545419"
            },
            "city": "fort wayne",
            "street": "oak lawn ave",
            "number": 526,
            "zipcode": "10256-4532"
        },
        "id": 10,
        "email": "jimmie@gmail.com",
        "username": "jimmie_k",
        "password": "klein*#%*",
        "name": {
            "firstname": "jimmie",
            "lastname": "klein"
        },
        "phone": "1-104-001-4567",
        "__v": 0,
        imgSrc:img10,
        destImg:'Description for this image',
        destTitle: "Bora Bora",
        grade:"Cultural Relax",
        description:"bla bla bla bla bla bla bla",
    }
]

const Main = () => {

    useEffect(() => {
    Aos.init({
        duration: 1000,
      });
    }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" 
        className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/* So guys, here we are going to use high order array method (map), 
        To do that we shall use a list of object in one array, I`m going to 
        create an array named data and from that we shall. (map) array
        to fetch each destinations at once. I hope this will make sense to You. */}


        {
          data.map(({id, imgSrc, grade, destTitle, address,
            destImg, fees, email, description, username, password, phone}) => {
            return( 
              <div key={id}
              data-aos="fade-up"
               className="singleDestination">
                {/* Here it will return single id from the map array */}
              <div className="imageDiv">
                <img src={imgSrc} alt={destImg} />
                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className="content flex">
                    <GrLocation className='icon' />
                    <span className="name">{address.city}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>${address.geolocation.long}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <BsClipboard2Check className='icon' />
                  </button>
                </div>
              </div>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default Main;
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    accommodation: Model,
  },

  seeds(server) {
    server.create("accommodation", {
      id: "c67ab8a7",
      title: "Cosy Appartement",
      cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
      ],
      description: "Your home away from home. Whether you're coming from the other side of the world or just a few metro stations away, you'll feel at home in your new appartment.",
      host: {
        name: "Nathalie Jean",
        picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
      },
      rating: "5",
      location: "Paris - 17th arrondissement",
      amenities: [
        "Basic Appliances",
        "Microwave",
        "Italian Shower",
        "Fridge",
        "WIFI"
      ],
      tags: [
        "Batignolle",
        "Montmartre"
      ]
    });

    server.create("accommodation", {
      id: "b9123946",
      title: "Magnificent Apartment Near Saint Martin's Canal",
      cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
      ],
      description: "Immerse yourself in the charm of the Parisian lifestyle in this beautiful apartment. Only 3 minutes from Saint Martin's Canal and close to public transportation and shops. Fully equiped, the apartment also has a parking space.",
      host: {
        name: "Della Case",
        picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
      },
      rating: "4",
      location: "Paris - 10th arrondissement",
      amenities: [
        "Parking space",
        "Hair Dryer",
        "Washing Machine",
        "Wifi",
        "Fully equiped kitchen",
        "TV"
      ],
      tags: [
        "Canal Saint Martin",
        "Republique",
        "Apartment"
      ]
    });

    server.create("accommodation", {
      id: "46d188c5",
      title: "Charming Studio - Buttes Chaumont",
      cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-4.jpg"
      ],
      description: "Only a short walk away from the Buttes Chaumont park, this is the perfect spot for visiting Paris. Fully equiped for your confort (and decorated), you'll live like a Parisian while you're here.",
      host: {
        name: "Franck Maher",
        picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg"
      },
      rating: "3",
      location: "Paris - 20th Arrondissement",
      amenities: [
        "Wifi",
        "Equiped Kitchen",
        "TV",
        "Hair Dryer"
      ],
      tags: [
        "Buttes Chaumont",
        "Laumiere",
        "Studio"
      ]
    });

    server.create("accommodation", {
      id: "7af00cd6",
      title: "A Little Nest in the 11th Arrondissement",
      cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-4.jpg"
      ],
      description: "Come and discover Paris by staying in this cosy nest in the heart of the 11th district. The view from this residential park will make you feel rested after long days of visiting the French capital. And for the partygoers among you, the rue Jean Pierre Timbaud will allow you to discover the Parisian night-life only 5 minutes away from the apartment.",
      host: {
        name: "Della Case",
        picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
      },
      rating: "3",
      location: "Paris - 11th Arrondissement",
      amenities: [
        "Microwave",
        "Wifi",
        "Private Room",
        "Air Conditioning",
        "TV"
      ],
      tags: [
        "Parmentier",
        "Marais",
        "Park",
        "Night Life"
      ]
    });

    server.create("accommodation", {
      id: "0979876d",
      title: "Luxery Apartment - 10th Arrondissement",
      cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-5.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-6.jpg"
      ],
      description: "This fully renovated loft, equiped with luxury furniture will seduce you. Ideally located in the 10th district, moving around Paris will be child's play.",
      host: {
        name: "Franck Maher",
        picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg"
      },
      rating: "5",
      location: "Paris - 10th Arrondissement",
      amenities: [
        "Fridge",
        "Hair Dryer",
        "Wifi",
        "Private Room",
        "Parking space"
      ],
      tags: [
        "Goncourt",
        "Near Shops"
      ]
    });

    server.create("accommodation", {
      id: "f72a452f",
      title: "Artist's Studio",
      cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-5.jpg"
      ],
      description: "Come and immerse yourself in Parisian culture in this tastefully decorated former artist's studio in the heart of Montmartre.",
      host: {
        name: "Line Rolland",
        picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-3.jpg"
      },
      rating: "5",
      location: "Ile de France - Paris 18e",
      amenities: [
        "Private Room",
        "Parking space"
      ],
      tags: [
        "Montmartre",
        "Culture",
        "Charm"
      ]
    });

    server.create("accommodation", {
      id: "b4c67936",
      title: "Cheap - Studio 18th Arrondissement",
      cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-4.jpg"
      ],
      description: "This fully functional Studio will be your perfect pied-à-terre for all your Parisian excursions. Ideally located near lines 2 and 4, you will quickly reach all the tourist points of Paris.",
      host: {
        name: "Hugo Perrier",
        picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg"
      },
      rating: "3",
      location: "Paris - 18th Arrondissement",
      amenities: [
        "Bathroom",
        "Fridge",
        "Wifi",
        "Hair Dryer",
        "Desk",
        "Parking space"
      ],
      tags: [
        "Transportation",
        "Cheap",
        "18th Arrondissement"
      ]
    });

    server.create("accommodation", {
      id: "bc6f7112",
      title: "Superb Apartment Close to the Eiffel Tower",
      cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-5.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-6.jpg"
      ],
      description: "This superb apartment will surprise you with its charm. Entirely renovated, it is tastefully equipped. The size of the rooms will make you doubt that you are in Paris. But you just have to go outside to see that you are in the heart of the most beautiful attractions of Paris: the Louvre, the Eiffel Tower, the Grand Palais are just a few steps away. It's up to you to come and discover Paris!",
      host: {
        name: "Sébastien Fournier",
        picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-5.jpg"
      },
      rating: "5",
      location: "Paris - 6th Arrondissement",
      amenities: [
        "Wifi",
        "Hair Dryer",
        "Washing Machine",
        "Parking space",
        "King Size Bed",
        "Elevator"
      ],
      tags: [
        "Luxery",
        "Eiffel Tower",
        "3 bedroom",
        "6th Arrondissement"
      ]
    });

    server.create("accommodation", {
      id: "cb2f9222",
      title: "Family Sized Apartment",
      cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-5.jpg"
      ],
      description: "Paris welcomes you! With family or friends, come and discover the city of love in a tasteful apartment. You will be able to take advantage of all the shops only a few minutes away from the apartment. Its proximity to the Montparnasse train station also makes it an ideal choice for those who have to take a train.",
      host: {
        name: "Adrien Chiran",
        picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg"
      },
      rating: "4",
      location: "Paris - 14th Arrondissement",
      amenities: [
        "Air Conditioning",
        "Washing Machine",
        "Hair Dryer",
        "Wifi",
        "Parking space"
      ],
      tags: [
        "Montparnasse",
        "Shops",
        "Family"
      ]
    });

    server.create("accommodation", {
      id: "d60ca600",
      title: "Modern Apartment With Park View",
      cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-4.jpg"
      ],
      description: "Relaxation in the heart of Paris? It's possible! Overlooking a residential park, you will be able to open the windows without having to suffer from the noise of cars and pollution. On the contrary, you will be able to listen to the birds. Our apartment is also ideally located in the heart of the 11th district. Close to lines 3 and 2, you will be able to discover Paris without effort!",
      host: {
        name: "Adrien Chiran",
        picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg"
      },
      rating: "3",
      location: "Paris - 11th Arrondissement",
      amenities: [
        "Park View",
        "Heating",
        "Dryer",
        "Hair Dryer",
        "Wifi",
        "Elevator"
      ],
      tags: [
        "Père Lachaise",
        "11th Arrondissement",
        "Metro 3",
        "Metro 2"
      ]
    });

    server.create("accommodation", {
        id: "2cf259e1",
        title: "Charming Studio in the Marais",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg",
        pictures: [
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-2.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-3.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-4.jpg"
        ],
        description: "Located in the heart of the Marais, our studio is ideal for tourists looking for discovery. Its fully equipped kitchen is particularly practical.",
        host: {
          name: "Victor Moran",
          picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-7.jpg"
        },
        rating: "4",
        location: "Ile de France - Paris 11e",
        amenities: [
          "Fold-out Couch",
          "Oven",
          "Hair Dryer",
          "Wifi"
        ],
        tags: [
          "Marais",
          "Studio",
          "ParK"
        ]
      });
  
      server.create("accommodation", {
        id: "5323c29b",
        title: "Utilitairan Studio in Republique",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-3.jpg",
        pictures: [
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-3.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-2.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-4.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-5.jpg"
        ],
        description: "Ideally located 2 steps from the Place de la République, this particularly functional studio is perfect for discovering Paris. Close to all points of interest thanks to the 5 metro lines which are 5 minutes away, you will be able to make the most of your time in the capital.",
        host: {
          name: "Sarah Devit",
          picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg"
        },
        rating: "3",
        location: "Paris - 3rd Arrondissement",
        amenities: [
          "Storage",
          "Bed",
          "Hair Dryer",
          "Wifi",
          "TV",
          "Kettle"
        ],
        tags: [
          "Marais",
          "Republique",
          "Studio",
          "Close to Metros",
          "Shops"
        ]
      });
  
      server.create("accommodation", {
        id: "af6d2d48",
        title: "Bungalow in the Forest",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-1.jpg",
        pictures: [
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-1.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-2.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-3.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-4.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-5.jpg"
        ],
        description: "Leave Paris and go green. Only 30 minutes from the Gare du Nord train station, come and discover the Ecouen forest directly from the window of your bungalow. Fully equipped, this accommodation will welcome you in comfort, while allowing you to concentrate on the essentials. In the morning, open the windows and enjoy the birds singing.",
        host: {
          name: "Sarah Devit",
          picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg"
        },
        rating: "5",
        location: "Ecouen",
        amenities: [
          "Bathroom",
          "Equiped Kitchen",
          "Dry Toilet",
          "Fridge",
          "Kettle"
        ],
        tags: [
          "Forest",
          "Nature",
          "Ecouen Museum"
        ]
      });
  
      server.create("accommodation", {
        id: "7cbb378e",
        title: "Large House in Nearby Suburb",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-2.jpg",
        pictures: [
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-2.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-3.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-4.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-5.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-6.jpg"
        ],
        description: "Looking for a place to celebrate a birthday with friends while staying close to Paris? Look no further! Fully equipped, this house is the perfect place to get together.",
        host: {
          name: "Karen Guillet",
          picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-9.jpg"
        },
        rating: "4",
        location: "Arnouville",
        amenities: [
          "Bathroom",
          "Equiped kitchen",
          "Fridge",
          "Kettle",
          "WIFI",
          "TV",
          "Hangers",
          "Basics"
        ],
        tags: [
          "Forest",
          "Nature",
          "Big House"
        ]
      });
  
      server.create("accommodation", {
        id: "ba55a0cc",
        title: "4 Bedroom House - Le Vésinet",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-1.jpg",
        pictures: [
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-1.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-2.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-3.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-4.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-5.jpg"
        ],
        description: "4 bedroom house. Ideal for large groups. 45 minutes from Paris Saint-Lazare.",
        host: {
          name: "Karen Guillet",
          picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-9.jpg"
        },
        rating: "3",
        location: "Arnouville",
        amenities: [
          "Kettle",
          "Bathroom",
          "Equiped Kitchen",
          "Fridge",
          "WIFI",
          "TV",
          "Hangers",
          "Oven",
          "Microwave",
          "Parking space"
        ],
        tags: [
          "Nature",
          "Group",
          "House"
        ]
      });
  
      server.create("accommodation", {
        id: "1e181317",
        title: "Luxery Loft Near La Defense",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-1.jpg",
        pictures: [
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-1.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-2.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-3.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-4.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-5.jpg"
        ],
        description: "If you're looking for the perfect place to put your suitcases between business meetings, look no further. Our loft is the perfect place. Right in the heart of La Défense, it also has all the amenities to make you feel at home.",
        host: {
          name: "Julie Donatella",
          picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-10.jpg"
        },
        rating: "3",
        location: "Paris - La Défense",
        amenities: [
          "Bay Windows",
          "TV",
          "Oven",
          "Fridge",
          "Wifi",
          "Microwave",
          "Parking space"
        ],
        tags: [
          "La Défense",
          "Loft",
          "Luxery"
        ]
      });
  
      server.create("accommodation", {
        id: "1e180563",
        title: "Charming apartment on the Edge of Paris",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
        pictures: [
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-2.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-3.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-4.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-5.jpg"
        ],
        description: "This charming apartment offers luxury amenities at the gates of Paris. A stone's throw from line 3, you will be able to access all the tourist attractions you have always dreamed of.",
        host: {
          name: "Julie Donatella",
          picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-10.jpg"
        },
        rating: "4",
        location: "Levallois",
        amenities: [
          "TV",
          "Oven",
          "Fridge",
          "Hair Dryer",
          "Wifi",
          "Microwave"
        ],
        tags: [
          "Park View",
          "Charming"
        ]
      });
  
      server.create("accommodation", {
        id: "2139a317",
        title: "Cheap - Room in 20th Arrondissement",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-17-1.jpg",
        pictures: [
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-17-1.jpg"
        ],
        description: "This room has all the basics. Near subway and shops.",
        host: {
          name: "Hugo Perrier",
          picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg"
        },
        rating: "2",
        location: "Paris - 20th Arrondissement",
        amenities: [
          "Kettle",
          "Wifi",
          "Microwave"
        ],
        tags: [
          "Parc View",
          "Metros"
        ]
      });
  
      server.create("accommodation", {
        id: "6ff132c6",
        title: "Charming studio",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg",
        pictures: [
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-2.jpg",
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-3.jpg"
        ],
        description: "This tastefully decorated studio will be your cozy nest after a long day spent discovering Paris.",
        host: {
          name: "Michel Romy",
          picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-11.jpg"
        },
        rating: "4",
        location: "Paris - 13th Arrondissement",
        amenities: [
          "Basic Appliances",
          "Oven",
          "Fridge",
          "Wifi",
          "Microwave"
        ],
        tags: [
          "Studio",
          "Charming",
          "13th Arrondissement"
        ]
      });
  
      server.create("accommodation", {
        id: "cb02d69b",
        title: "Beautiful Rivoli Apartment",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg",
        pictures: [
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg"
        ],
        description: "In the heart of the historic Marais district, this apartment is ideal for a couple discovering Paris. Located on the rue de Rivoli, it is 5 minutes from the Louvre.",
        host: {
          name: "Nathalie Jean",
          picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
        },
        rating: "4",
        location: "Paris - 13th Arrondissement",
        amenities: [
          "Wifi",
          "Basic Appliances",
          "Microwave",
          "Fridge",
          "Bathtub"
        ],
        tags: [
          "Louvre",
          "Marais",
          "Rivoli"
        ]
      });
  },

  routes() {
    this.namespace = 'api';

    this.get('/accommodations', (schema) => {
      return schema.accommodations.all();
    });

    this.get('/accommodations/:id', (schema, request) => {
        let id = request.params.id;
        return schema.accommodations.find(id);
    });
  }
});
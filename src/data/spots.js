// ## Spot
// id
// name
// location {lat, lng, address}
// category
// createdByUserID
// officialOwnerID // optional future
// tags[]
// rating
// createdAt
// updatedAt


const spotsData = [
    {
        id: 1,
        name: "Eiffel Tower",
        location: { lat: 48.8584, lng: 2.2945, address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France" },
        category: "Landmark",
        createdByUserID: 1,
        officialOwnerID: null,
        tags: ["Tourist Attraction", "Historical"],
        rating: 4.7,
        createdAt: "2023-01-01T12:00:00Z",
        updatedAt: "2023-01-02T12:00:00Z",
    }, 
    {
        id: 2,
        name: "Louvre Museum",
        location: { lat: 48.8611, lng: 2.3361, address: "Rue de Rivoli, 75001 Paris, France" },
        category: "Museum",
        createdByUserID: 1,
        officialOwnerID: null,
        tags: ["Art", "Culture"],
        rating: 4.6,
        createdAt: "2023-01-01T12:00:00Z",
        updatedAt: "2023-01-02T12:00:00Z",
    }, 
    {
        id: 3,
        name: "Central Park",
        location: { lat: 40.7851, lng: -73.9683, address: "New York, NY, USA" },
        category: "Park",
        createdByUserID: 2,
        officialOwnerID: null,
        tags: ["Nature", "Relaxation"],
        rating: 4.8,
        createdAt: "2023-01-01T12:00:00Z",
        updatedAt: "2023-01-02T12:00:00Z",
    }, 
    {
        id: 4,
        name: "Tokyo Tower",
        location: { lat: 35.6586, lng: 139.7454, address: "4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan" },
        category: "Landmark",
        createdByUserID: 3,
        officialOwnerID: null,
        tags: ["Tourist Attraction", "Historical"],
        rating: 4.5,
        createdAt: "2023-01-01T12:00:00Z",
        updatedAt: "2023-01-02T12:00:00Z",
    },
    {
        id: 5,
        name: "Sydney Opera House",
        location: { lat: -33.8568, lng: 151.2153, address: "Bennelong Point, Sydney NSW 2000, Australia" },
        category: "Landmark",
        createdByUserID: 4,
        officialOwnerID: null,
        tags: ["Tourist Attraction", "Cultural"],
        rating: 4.7,
        createdAt: "2023-01-01T12:00:00Z",
        updatedAt: "2023-01-02T12:00:00Z",
    }, 
    {
        id: 6,
        name: "Great Wall of China",
        location: { lat: 40.4319, lng: 116.5704, address: "Huairou District, China" },
        category: "Historical Site",
        createdByUserID: 5,
        officialOwnerID: null,
        tags: ["Tourist Attraction", "Historical"],
        rating: 4.6,
        createdAt: "2023-01-01T12:00:00Z",
        updatedAt: "2023-01-02T12:00:00Z",
    }, 
    {
        id: 7,
        name: "Colosseum",
        location: { lat: 41.8902, lng: 12.4922, address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy" },
        category: "Historical Site",
        createdByUserID: 6,
        officialOwnerID: null,
        tags: ["Tourist Attraction", "Historical"],
        rating: 4.7,
        createdAt: "2023-01-01T12:00:00Z",
        updatedAt: "2023-01-02T12:00:00Z",
    }
]

export default spotsData;
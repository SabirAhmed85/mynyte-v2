import { FeedCategory } from "../types/feed";

const FEED_SEARCH_CATEGORIES: FeedCategory[] = [
    {
        name: 'Restaurant',
        visible: false,
        icon: 'utensils',
        items: [
            {
                name: 'Italian',
                image: 'italian-food.jpg'
            },
            {
                name: 'Indian',
                image: 'indian-food.jpg'
            },
            {
                name: 'Chinese',
                image: 'chinese-food.jpg'
            },
            {
                name: 'Thai',
                image: 'italian-food.jpg'
            },
            {
                name: 'Mexican',
                image: 'indian-food.jpg'
            },
            {
                name: 'Gastropub',
                image: 'chinese-food.jpg'
            }
        ]
    },
    {
        name: 'Cinema',
        visible: true,
        icon: 'ticket-alt',
        items: [
            {
                name: 'Action',
                image: 'action-movie.png'
            },
            {
                name: 'Comedy',
                image: 'comedy-movie.png'
            },
            {
                name: 'Fantasy',
                image: 'fantasy-movie.png'
            },
            {
                name: 'Romance',
                image: 'romance-movie.png'
            },
            {
                name: 'Sci-fi',
                image: 'scifi-movie.png'
            },
            {
                name: 'Horror',
                image: 'horror-movie.png'
            }
        ]
    },
    {
        name: 'Takeaway',
        visible: false,
        icon: 'box',
        items: [
            {
                name: 'Pizza',
                image: 'pizza-takeaway.jpg'
            },
            {
                name: 'Indian',
                image: 'indian-takeaway.jpg'
            },
            {
                name: 'Chinese',
                image: 'chinese-takeaway.jpg'
            }
        ]
    },
    {
        name: 'Sports Bar',
        visible: false,
        icon: 'baseball-ball',
        items: [
            {
                name: 'Football',
                image: 'football-sport.jpg'
            },
            {
                name: 'Rugby',
                image: 'rugby-sport.jpg'
            },
            {
                name: 'Boxing',
                image: 'boxing-sport.jpeg'
            }
        ]
    },
    /*
    {
        name: 'Offers',
        visible: false,
        icon: 'pound-sign',
        items: [
            {
                name: 'Football',
                image: 'football-sport.jpg'
            },
            {
                name: 'Rugby',
                image: 'rugby-sport.jpg'
            },
            {
                name: 'Boxing',
                image: 'boxing-sport.jpeg'
            }
        ]
    }
    */
];

export { FEED_SEARCH_CATEGORIES };
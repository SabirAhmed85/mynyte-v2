import { FeedCategory } from "../types/feed";

const FEED_SEARCH_CATEGORIES: FeedCategory[] = [
    {
        name: 'Restaurant',
        visible: false,
        icon: 'utensils',
        items: [
            {
                name: 'Italian',
                image: 'italian-food.png'
            },
            {
                name: 'Indian',
                image: 'indian-food.png'
            },
            {
                name: 'Chinese',
                image: 'chinese-food.png'
            },
            {
                name: 'Thai',
                image: 'thai-food.png'
            },
            {
                name: 'Mexican',
                image: 'mexican-food.png'
            },
            {
                name: 'Gastropub',
                image: 'gastropub-food.png'
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
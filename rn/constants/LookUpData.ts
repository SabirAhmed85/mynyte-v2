import { FeedCategory } from "../types/feed";

const FEED_SEARCH_CATEGORIES: FeedCategory[] = [
    {
        name: 'Restaurant',
        visible: true,
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
        visible: false,
        icon: 'ticket-alt',
        items: [
            {
                name: 'Action',
                image: 'action-movie.jpg'
            },
            {
                name: 'Comedy',
                image: 'comedy-movie.jpg'
            },
            {
                name: 'Horror',
                image: 'horror-movie.jpg'
            },
            {
                name: 'Fantasy',
                image: 'comedy-movie.jpg'
            },
            {
                name: 'Romance',
                image: 'horror-movie.jpg'
            },
            {
                name: 'Sci-fi',
                image: 'comedy-movie.jpg'
            },
            {
                name: 'Horror',
                image: 'horror-movie.jpg'
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
    }
];

export { FEED_SEARCH_CATEGORIES };
export const getFeedSearchImageName = (name: string) => {
  switch (name) {
    case "italian-food.jpg":
      return require(`../assets/images/feed-search/italian-food.jpg`);
    case "indian-food.jpg":
      return require(`../assets/images/feed-search/indian-food.jpg`);
    case "chinese-food.jpg":
      return require(`../assets/images/feed-search/chinese-food.jpg`);
    case "action-movie.png":
      return require(`../assets/images/feed-search/action-movie.png`);
    case "scifi-movie.png":
      return require(`../assets/images/feed-search/scifi-movie.png`);
    case "comedy-movie.png":
      return require(`../assets/images/feed-search/comedy-movie.png`);
    case "horror-movie.png":
      return require(`../assets/images/feed-search/horror-movie.png`);
    case "fantasy-movie.png":
      return require(`../assets/images/feed-search/fantasy-movie.png`);
    case "romance-movie.png":
      return require(`../assets/images/feed-search/romance-movie.png`);
    case "indian-takeaway.jpg":
      return require(`../assets/images/feed-search/indian-takeaway.jpg`);
    case "chinese-takeaway.jpg":
      return require(`../assets/images/feed-search/chinese-takeaway.jpg`);
    case "pizza-takeaway.jpg":
      return require(`../assets/images/feed-search/pizza-takeaway.jpg`);
    case "football-sport.jpg":
      return require(`../assets/images/feed-search/football-sport.jpg`);
    case "rugby-sport.jpg":
      return require(`../assets/images/feed-search/rugby-sport.jpg`);
    case "boxing-sport.jpeg":
      return require(`../assets/images/feed-search/boxing-sport.jpeg`);
  }
};

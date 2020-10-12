export type FeedCategory = {
  name: string;
  visible: boolean;
  icon: string;
  items: {
    name: string;
    image: string;
  }[];
};

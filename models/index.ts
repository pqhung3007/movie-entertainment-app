export interface Data {
  title: string;
  id: number;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface Thumbnail {
  regular: {
    small: string;
    medium: string;
    large: string;
  };
}

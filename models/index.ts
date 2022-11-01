export interface Film {
  title: string;
  id: number;
  thumbnail: Thumbnail;
  year: string;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface Thumbnail {
  trending: {
    small: string;
    large: string;
  };
  regular: {
    small: string;
    medium: string;
    large: string;
  };
}
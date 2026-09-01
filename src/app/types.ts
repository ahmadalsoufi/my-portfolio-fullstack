export type ProjectType = {
  id: number;
  title: string | null;
  excerpt: string | null;
  description: string | null;
  url: string | null;
  slug: string;
  featured: boolean;
  image: {
    url: string;
    formats: {
      large: { url: string };
      medium: { url: string };
      small: { url: string };
      thumbnail: { url: string };
    };
  };
};

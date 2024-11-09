interface categoryData {
  id: number | string;
  name: string;
  icon: any;
}

interface BannerData {
  id: number;
  image: string;
}

interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

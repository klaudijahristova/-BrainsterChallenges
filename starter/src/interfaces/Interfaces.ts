export interface PropsHomePage {
  bannerData: BannerProps;
  featuredProductsData: FeaturedProductsProps[];
  featuredBlogsData: FeaturedBlogsProps[];
}
export interface BannerProps {
  preTitle: string;
  title: string;
}
export interface FeaturedProductsProps {
  id: string;
  price: string;
  title: string;
  gender: string;
  img: string;
  description: string;
}

export interface FeaturedBlogsProps {
  id: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  img: string;
  title: string;
  first_content: string;
  second_content: string;
}
export interface FeaturedProductsComponentProps {
  featuredProducts: FeaturedProductsProps[];
}
export interface ProductItamsProps {
  product: FeaturedProductsProps;
}
export interface FeaturedBlogsProps {
  featuredBlogs: FeaturedBlogsProps[];
}
export interface FeaturedBlogsListProps {
  featuredBlogs: FeaturedBlogsProps[];
}
export interface BlogDetailProps {
  blogDetailData: FeaturedBlogsProps;
  randomBlogsData: FeaturedBlogsProps[];
}
export interface PageTitleProps {
  title: string;
}

export interface RandomBlogsProps {
  randomBlogs: FeaturedBlogsProps[];
}

export interface AboutPageProps {
  aboutPageData: {
    title: string;
    first_content: string;
    second_content: string;
    third_content: string;
    first_image: string;
    second_image: string;
    second_title: string;
    fourth_content: string;
    fifth_content: string;
    author: string;
  };
}

export interface ShopDetailProps{
  shopDetailData:FeaturedProductsProps;
  randomShopData:FeaturedProductsProps[];
}
export interface RandomProductsProps{
  randomProducts:FeaturedProductsProps[];
}
export interface ShopPageProps{
  data:FeaturedProductsProps[];
}

export interface BlogPAgeProps{
  data:FeaturedBlogsProps[]
}

export interface BlogsProps{
  blogs:FeaturedBlogsProps;
}
export interface SearchPageProps{
  blogsData:FeaturedBlogsProps[];
  productsData:FeaturedProductsProps[];
}
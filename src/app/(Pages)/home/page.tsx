import BlogsSection from "@/components/Home/BlogsSection";
import BrandSection from "@/components/Home/BrandSection";
import DealOfTheWeek from "@/components/Home/DealOfTheWeek";
import ShopProducts from "@/components/Home/FeatureCollection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroSection from "@/components/Home/hero";
import NewsletterSection from "@/components/Home/NewsletterSection";
import NewCollection from "@/components/Home/shopNewCollection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import TopCategories from "@/components/Home/topCategory";


export default function HomePages() {
  return (

    <>
    <HeroSection/>
    <NewCollection/>
    <TopCategories/>
    <ShopProducts/>
    <DealOfTheWeek/>
    <ShopProducts/>
    <BrandSection/>
    <TestimonialSection/>
    <BlogsSection/>
    <NewsletterSection/>
    <FeaturesSection/>
    </>
  );
}
     
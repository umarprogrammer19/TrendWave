import FeaturesSection from "@/components/Home/FeaturesSection";
import Newsletter from "@/components/shop/ourNewLetter";
import ProductList from "@/components/shop/WishlistSection";

export default function Wishlist() {
  return (
    <>
      <ProductList />
      <FeaturesSection />
      <Newsletter />
    </>
  );
}

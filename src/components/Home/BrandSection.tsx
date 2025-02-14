import brandBtn from "../../../public/brand-btn.png";
import Image from "next/image";

const BrandSection = () => {
  const brands = [
    { name: "Dior", logo: "/brand-1.png" },
    { name: "Sailor", logo: "/brand-2.png" },
    { name: "Tomosa", logo: "/brand-3.png" },
    { name: "Cofox", logo: "/brand-4.png" },
    { name: "Adidssi", logo: "/brand-5.png" },
    { name: "Paopi", logo: "/brand-6.png" },
    { name: "Lotoria", logo: "/brand-7.png" },
    { name: "Monjon", logo: "/brand-8.png" },
    { name: "Adidas", logo: "/brand-9.png" },
    { name: "Carogi", logo: "/brand-10.png" },
  ];

  return (
    <section className="bg-[#fff7ed] py-16 px-6 md:px-12">
      {/* Heading & Button Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-center md:gap-[600px] text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-6 md:mb-0">
          We Continue To Expand With <br />
          The Trust Of 10+ Brand.
        </h2>
        <Image src={brandBtn} alt="img" className="w-28 md:w-auto" />
      </div>

      {/* Brand Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12 md:mt-24">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              className="w-22 h-22 md:w-18 md:h-18 object-contain mb-2"
              height={130}
              width={130}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandSection;

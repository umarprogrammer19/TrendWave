import { Truck, Headphones, RotateCcw, ShieldCheck } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Truck size={30} className="text-gray-900" />,
      title: "Free Shipping",
      description: "You get your items delivered without any extra cost.",
    },
    {
      icon: <Headphones size={30} className="text-gray-900" />,
      title: "Great Support 24/7",
      description: "Our customer support team is available around the clock.",
    },
    {
      icon: <RotateCcw size={30} className="text-gray-900" />,
      title: "Return Available",
      description:
        "Making it easy to return any items if you're not satisfied.",
    },
    {
      icon: <ShieldCheck size={30} className="text-gray-900" />,
      title: "Secure Payment",
      description:
        "Shop with confidence knowing that our secure payment system protects your data.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-black">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

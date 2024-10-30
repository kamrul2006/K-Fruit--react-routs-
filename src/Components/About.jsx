import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-green-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">About Our Fruit Shop</h2>
        <p className="text-gray-700 text-lg mb-8">
          Welcome to K-Fruit, where we bring you the freshest and finest fruits
          sourced directly from local farms and trusted growers. Our commitment to quality and
          customer satisfaction ensures that you receive only the best. Enjoy nature’s sweetness
          and vibrant flavors with every bite.
        </p>
        <Link to="/product">          <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg shadow-md hover:bg-orange-600">
          Explore Our Fruits
        </button></Link>

      </div>
    </section>
  );
};

export default AboutSection;

import FoodCard from "../components/cards/food-card";

function HomePage() {
  return (
    <div>
      <h1> HOME PAGE</h1>
      <FoodCard
        src={
          "https://img.freepik.com/free-photo/top-view-green-cream-soups_23-2148519096.jpg"
        }
        name={"Pollo con papas"}
        price={54.45}
      />
    </div>
  );
}

export default HomePage;

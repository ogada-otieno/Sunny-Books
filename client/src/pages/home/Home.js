import MainCarousel from "./MainCarousel";
import BookList from "./BookList";
import Subscribe from "./Subscribe";


const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <BookList />
      <Subscribe />
    </div>
  );
};

export default Home;

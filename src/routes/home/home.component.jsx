import Directory from "../../components/directory/directory.component";

const Home = () => {


  const categories = [
    { id: 1, title: "Crystals" },
    { id: 2, title: "Books" },
    { id: 3, title: "Artifacts" },
    { id: 4, title: "Womens" },
    { id: 5, title: "Mens" },
  ];

  return (
    
      <Directory categories={ categories } />
      

  );
};

export default Home;

import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maxime
        sequi nam temporibus ratione beatae quasi odio mollitia natus eius ipsa
        necessitatibus ut voluptate, perspiciatis 
        repudiandae eum modi corrupti.
        Optio.
      </p>
      <div className={styles.wrapper}>

      {pizzaList.map((pizza) => (
        <PizzaCard key={pizza._id} pizza={pizza} />
      ))}
        
    

      </div>
    </div>
  );
};

export default PizzaList;

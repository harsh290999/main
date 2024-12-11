import { Item } from "./Item";
import styles from "./FoodItems.module.css";

export let FoodItems = ({ items }) => {
  return (
    <>
      <ul className={`${styles.list} list-group`}>
        {items.map((item) => (
          <Item
            key={item}
            foodItems={item}
            handleOnClick={() => console.log(`${item} brought`)}
          ></Item>
        ))}
      </ul>
    </>
  );
};

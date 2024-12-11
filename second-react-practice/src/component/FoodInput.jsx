import style from "./FoodInput.module.css";
const FoodInput = ({handleOnChange}) => {
  
  return (
    <input
      type="text"
      placeholder="Enter food item here"
      className={style.foodInput}
      onChange={handleOnChange}
    />
  );
};
export default FoodInput;

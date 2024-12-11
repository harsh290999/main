import style from "./Item.module.css";
export const Item = ({ foodItems,handleOnClick }) => {
  // const handleOnClick=(foodItems)=>{console.log(event);
  // console.log(`${foodItems} brought` );
//}
  return (
    <>
      <li className={`$ list-group-item {style["hg-Item"]}`}>
        <span className={style["hg-Span"]}>
          {foodItems}{" "}
          <button
            className={`${style.button} btn btn-success`}
            onClick={handleOnClick}>
            Buy
          </button>
        </span>
      </li>
    </>
  );
};

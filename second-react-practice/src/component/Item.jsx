import style from "./Item.module.css"
export const Item=({foodItems})=>{
  return<>
  <li className={`$ list-group-item {style["hg-Item"]}`} ><span className={style["hg-Span"]}>{foodItems} <button className={`${style.button} btn btn-success`}>Buy</button></span></li>
  </>
}
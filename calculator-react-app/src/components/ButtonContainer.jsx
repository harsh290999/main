import style from"./ButtonContainer.module.css";
const ButtonContainer=()=>{
  const buttonNames =["c","1","2","+","3","4","-","5","6","*","7","8","9","0","=","."]
  return<div className={style.buttonContainer}>
    {buttonNames.map((buttonName)=>(<button className={style.button}>{buttonName}</button>))}
  
  
</div>
}
export default ButtonContainer
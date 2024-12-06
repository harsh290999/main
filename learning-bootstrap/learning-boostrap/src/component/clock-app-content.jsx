export const TimeDate= ()=>{
  let time= new Date()
  return <div className="clockapp">{time.toLocaleDateString()} <br/> {time.toLocaleTimeString()}</div>

}
function SecondRow(){
  let task='buy milk'
  let date='26/04/2024'
  return<div className="row">
  <div className="col-6">{task}</div>
  <div className="col-4">{date}</div>
  <div className="col-2"><button type="button" className="btn btn-danger newbtn">Delete</button></div>
</div>
}
export default SecondRow
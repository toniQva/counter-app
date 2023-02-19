import PropTyps from "prop-types";


const CounterApp = ({ value }) => {

    // handleAdd
     const handleAdd = (e)=>{
        console.log(e);
     }



  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>

      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.PropTyps = {
  value: PropTyps.number
};

CounterApp.dedauldProps = {
  value: 20,
};


export default CounterApp; 
import PropTyps from "prop-types";


const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
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
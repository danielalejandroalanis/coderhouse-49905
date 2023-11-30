import { useState, useEffect } from "react";

const CountComponent = () => {
  const [count, setCount] = useState(1);
  const [countDos, setCountDos] = useState(10)
  //useEffect

  //Se va a ejecutar siempre que el componente se renderize (useEffect sin dependencias)
  // useEffect(() => {
  //   console.log('Se ejecuta el useEffect SIN DEPENDENCIAS')
  // });

  // Se va a ejecutar la primera vez que el componente se renderize - no en su actualizacion(useEffect con array de dependencias vacias)
  // useEffect(() => {
  //   console.log('Se ejecuta el useEffect con array de dependencias vacias')
  // }, [])

  // (useEffect con dependencias)
  useEffect(() => {
    console.log('Se ejecuta el useEffect con dependencias')
  }, [count, countDos])

  const handleAddCount = () => {
    // setCount(count + 1);
    setCountDos(countDos + 10)
  };
  const handleRemoveCount = () => {
    setCount(count - 1);
    // setCountDos(countDos - 10)
  };

  return (
    <div>
      <button onClick={handleAddCount}>+</button>
      <div>{count}</div>
      <div>{countDos}</div>
      <button onClick={handleRemoveCount}>-</button>
    </div>
  );
};

export default CountComponent;

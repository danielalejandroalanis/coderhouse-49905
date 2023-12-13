// import React from 'react'
// import PropTypes from 'prop-types'

// const UserData = ({firstName, lastName, age, birthdate}) => {

//     const newAge = age + 1;

//   return (
//     <div>
//         <ul>
//             <li>{firstName}</li>
//             <li>{lastName}</li>
//             <li>{newAge}</li>
//             <li>{birthdate}</li>
//         </ul>
//     </div>
//   )
// }

// export default UserData

// UserData.propTypes = {
//     firstName: PropTypes.string,
//     lastName: PropTypes.string,
//     age: PropTypes.number
// }

import React from "react";
import PropTypes from "prop-types";

const UserData= ({ firstName, lastName, age, birthdate, myObject }) => {
  const newAge = age + 1;
    console.log(myObject)
  return (
    <div>
      <ul>
        <li>{firstName}</li>
        <li>{lastName}</li>
        <li>{newAge}</li>
        <li>{birthdate}</li>
      </ul>
    </div>
  );
};

export default UserData;

UserData.propTypes = {
    myObject: PropTypes.shape({
        product: PropTypes.string,
        quantity: PropTypes.number
    }),

}
import React from 'react';
import logo from './logo.svg';
import './Form.css';


class Form extends React.Component {

render(){


  return (

        
<form action="" id="doit" method="post">
<div className="title">Form spaced with external css</div>
        <p>Enter your name:</p>
    <label>
        Name
        <input id="name" name="name" type="text" />
    </label>
    <label>
        Phone number
        <input id="phone" name="phone" type="text" />
    </label>
    <label>
        Year
        <input id="year" name="year" type="text" />
    </label>

<input id="year" name="year" type="submit" />
</form>





    
  );

}
}

export default Form;

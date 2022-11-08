import './dog.css'
import { useNavigate } from 'react-router';
import update from "immutability-helper";
import axios from "axios";

const UpdateForm = ({data, clicks, setClicks}) => {
  const {id, name, current_weight, final_weight, age_in_mos } = data;
  let navigate = useNavigate();

  const formSubmit = (data) => {
    const apiURL = `/api/v1/dogs/${id}`;
    
    fetch(apiURL, {
      method: 'PUT',
      mode: 'cors',
      body: data
    }).then((response) => setClicks(prevClick => prevClick + 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('current_weight', e.target[0].value);
    formData.set('age_in_mos', e.target[1].value);
    formSubmit(formData);

    navigate('/');
  };
  
  return (
    <div className='FormContainer'>

        <form className='UpdateForm' onSubmit={(e) => handleSubmit(e)}>
            <input type='text' placeholder='Current weight in pounds' name='current_weight'></input>
            <input type='text' placeholder='Current age in weeks' name='age_in_mos'></input>
            <button type='submit'>Add Data</button>
        </form>
    </div>
  )
};

export default UpdateForm;
import './dog.css'
import UpdateForm from './UpdateForm';

const Dog = ({data, clicks, setClicks}) => {
    const {id, name, current_weight, final_weight, age_in_mos } = data;
    const ratio = (current_weight/final_weight)*200;

    return (
        <section className="dogtracker">
            <h2 className='title'>Your pup, {name} is {current_weight} lbs at {age_in_mos} weeks old. </h2>
            <div className='imgholder'>
                <div className='before'>
                <p>Currently: {current_weight} lbs</p>
                <img style={{width: ratio, height:'auto'}} src={require(`../img/${name}.png`)} alt={name}/>
                </div>
                <div className='after'>
                <p>Full Grown: {final_weight} lbs</p>
                <img style={{width: 200, height:'auto'}} src={require(`../img/${name}.png`)} alt={name}/>
                </div>
            </div>
            <UpdateForm data={data} key={data.id} clicks={clicks} setClicks={setClicks}/>
        </section>
    )


}

export default Dog;
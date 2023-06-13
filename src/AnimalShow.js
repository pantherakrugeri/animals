import { useState } from 'react'; 
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import horse from './svg/horse.svg';
import aligator from './svg/gator.svg';
import cow from './svg/cow.svg';
import heart from './svg/heart.svg';
import './AnimalShow.css';

const svgMap = {
    bird, cat, dog, horse, aligator, cow
};

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" alt="animal" src={svgMap[type]} style={{ width: '100px', height: '100px'}}/>
            <img className="heart" alt="heart" src={heart} style={{ width: 20 + 10 * clicks + 'px'}}/>
        </div>
    );
}

export default AnimalShow;
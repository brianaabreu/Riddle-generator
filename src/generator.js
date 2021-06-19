import axios from "axios";
import {React, useEffect, useState} from 'react';


function Generator() {
    
    useEffect(() => {
        riddles();
        console.log("hi")
    },[]);
    
    const [riddle, setRiddles] = useState('');

    const [showPunchline, setShowPunchline] = useState(false)

    const onClick = () => setShowPunchline(showPunchline => !showPunchline)
    
    
    const options = {
        method: 'GET',
        url: 'https://official-joke-api.appspot.com/jokes/random',
        //   headers: {
            //    'x-rapidapi-key': '0e61ce02c6msh2fd5bbfe48e5470p187a74jsn71c927953590',
            //     'x-rapidapi-host': 'riddles.p.rapidapi.com'
            //   }
    };

    const riddles = () => {
        axios.request(options)
            .then((response) => {
                const riddles = response.data.setup;
                const punchline = response.data.punchline;
                console.log(riddles)
                console.log(punchline)
                setRiddles({riddles, punchline})
            })
            .catch(error => console.error(`Error: ${error}`));
        setShowPunchline(false);
    }

    const showRiddles = () => {
        return (
            <div>
                <p>
                    {riddle.riddles}
                </p>
            </div>
        )
    }

    const showPunchlines = () => {
        return (
            <div>
                <p className='punchline' >
                    {riddle.punchline}
                </p>
            </div>
        )
    }



    return (
        <div className="buttonRiddle">
            
            <div className="buttons">

                <button className="riddles" onClick={riddles}>
                    Generate Riddle
                </button>
                {showRiddles()}
                {showPunchline ? showPunchlines() : null}
                <button className="punchlineButton" onClick={onClick}>
                    Give up?
                </button>
            </div>       
        </div>
            
            )
}

export default Generator;

// {riddle}
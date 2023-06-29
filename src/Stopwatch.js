import ReactStopwatch from 'react-stopwatch';

export default function Stopwatch(props) {
    return (
        <ReactStopwatch
            seconds={0}
            minutes={0}
            hours={0}
            onChange={({ hours, minutes, seconds }) => {
                if(props.tenzies) {
                    console.log("The game is finished, stop the watch and save time")
                }
            }}
            render={({ formatted }) => {
                return (
                    <div className='clock'>
                        { formatted }
                    </div>
                );
            }}
        />
    );
}
import { useEffect, useState } from 'react';
import bgs from '../../src/assets/bgs.jpg'

const Counter = () => {

    const [counters, setCounters] = useState([]);

    useEffect(() => {
        fetch('counters.json')
            .then(res => res.json())
            .then(data => {
                setCounters(data)
            })
    }, []);
    return (


        <div className='lg:my-20 my-10'>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgs})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "400px",
                padding: "1px",



            }}
            >
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-8 my-20 w-12/12 lg:mx-8 mx-4'>
                    {
                        counters.map(counter => (
                            <div key={counter.id} className="w-full max-w-sm rounded-md shadow-md">
                                <div className="flex justify-end px-4 pt-4"></div>
                                <div className="left-content flex flex-col items-center text-white lg:mt-14">
                                    <span className="mb-1 text-xl font-bold">{counter.digit}</span>
                                    <h5 className="text-black-500 dark:text-gray-400 text-lg font-semibold">{counter.title}</h5>
                                </div>
                            </div>
                        ))}


                </div>


            </div>

        </div>
    );
};

export default Counter;
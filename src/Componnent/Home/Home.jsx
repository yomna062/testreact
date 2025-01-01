import img from '../imgs/avataaars.svg';
import { useEffect } from 'react';

export default function Home() {

        useEffect(() => {
            document.title = "Home Page";
        }, []);

    return (
        <>
            <div className=" home vh-100">
                <div className="d-flex justify-content-center align-items-center flex-column h-100" >
                    <div className="home-img w-25">
                    
                        <img src={img} alt="Your Image" className="img-fluid rounded-circle" />
                    </div>
                    <div className="text-center mt-4">
                        <h2>Start Framework</h2>
                        <h5>Graphic Artist - Web Designer - Illustrator</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

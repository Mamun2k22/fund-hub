import Contact from "../pages/contact/Contact";
import Counter from "./Counter";

import Footer from "./Footer";

import { Navbar } from "./Navbar";

import Video from "./Video";



export const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Video></Video>

            <Counter></Counter>



            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};


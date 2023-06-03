

import '../../pages/contact/contact.css'
import cn from '../../assets/cn.jpg'
import GettingStat from '../../home/GettingStat';

const Contact = () => {

    return (
        <div>
            <GettingStat></GettingStat>
            <div className="lg:my-16 my-32">
                <section style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${cn})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "repeat",
                    height: "580px",
                }}

                    className="main_form flex flex-col md:flex-row justify-center">

                    <div className="from_section p-2 text-center">
                        <h4 className="mb-6 lg:mt-6 text-2xl font-semibold text-white">
                            CONTACT US
                        </h4>
                        <h1 id='start' className="start text-3xl md:text-4xl mb-10 text-[#D0B47F]">
                            Submit a Message
                        </h1>
                        <form
                            action="https://formspree.io/f/mjvdaovd"
                            method="POST"
                            className="mx-auto flex flex-col gap-2 lg:w-11/12 w-11/12 text-white"
                        >
                            <input
                                type="text"
                                id="name"
                                className="bg-[#ffffff00] hover:border-b-gray-50"
                                placeholder="Your Name*"
                                name="name"
                            />
                            <input
                                type="email"
                                id="email"
                                required
                                className="bg-[#ffffff00] hover:border-b-gray-50"
                                name="email"
                                placeholder="Your Email*"
                            />
                            <input
                                type="text"
                                id="subject"
                                className="bg-[#ffffff00] hover:border-b-gray-50"
                                name="subject"
                                placeholder="Your Subject*"
                            />
                            <textarea
                                id="message"
                                className="bg-[#ffffff00] mt-5"
                                name="message"
                                cols="10"
                                rows="5"
                                placeholder="Message"
                            />
                            <input
                                className="baton mt-5 rounded-full border-[2px] border-yellow-500 text-[#FFD700] lg:ml-96 lg:mr-96"
                                type="submit"
                                value="Submit"
                            />
                        </form>
                    </div>

                </section>

            </div>
        </div>
    );
};

export default Contact;

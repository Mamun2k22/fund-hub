import contact from "../assets/contact.jpg"

const GettingStat = () => {
    return (
        <div>
            {/* Contact */}
            <div className="lg:my-16">
                <section
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${contact})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "repeat",
                        height: "600px",
                    }}
                    className="main_form flex flex-col md:flex-row justify-center"
                >
                    <div className="from_section p-2 md:text-center">
                        <h1 className="text-3xl md:text-4xl mb-10 text-[#D0B47F] lg:pt-10 pt-24">
                            Need help getting started?
                        </h1>
                        <p className="mb-6 md:mt-6 text-lg font-normal text-white md:mx-72 mx-4">
                            Working with us can help grow your magazine company in many ways. Our team of experts can provide valuable insights and strategies to increase your readership, boost your online presence, and drive revenue growth. We work closely with our clients to understand their specific needs and tailor our solutions accordingly. Whether it's developing a comprehensive marketing plan, optimizing your digital content, or enhancing your subscription model, we're committed to helping you achieve your goals and succeed in the competitive magazine industry. With our guidance and support, you can take your magazine company to the next level and thrive in today's rapidly changing media landscape.
                        </p>
                        <div className="text-center">
                            <a href="#start"> <button className="text-white border-2 p-4 md:my-10">START NOW</button></a>

                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default GettingStat;
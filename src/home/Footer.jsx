import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className=" text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-8">


                <div className="flex">
                    <img
                        src="https://uc5416719fd493c7e93eb4815c11.previews.dropboxusercontent.com/p/thumb/AB5ZESFI-f2E9K5wP-hAG9DVioHdXZrJ-m1KvPlNm4C98fVpnm0wChCHn-WU0EH1otXpPPbjjdC8t0spoI6jyp-VTxSPoJMTtfwduwyBslHU_ITMYODUsyBm2hBl04eAewSdhO5mR6_frX8qDLydv9RA3o_YfEgcLh4oP0tZf_GKIEpm9Hx2RrZsEz5POYDCxq9KW6vLZ4TOrJCSsi1md8Zi_ROItwAcNCfE10GdQ2nH_cMD5qEgJjUxoNlEdNf4Mvxi_pZT84xcZMEhsOiQMCMDgXpd5LNn-I6GKuZc0f-BNv9Hhc12LoC0wxlpWVgiQtJQmJBZRYKgVweHB8vCAqUyE1NbEY0c_jrzGidKYngp6ajIucaVtkPcyjEjVuph3CM/p.png"
                        className="h-20 mr-4"
                    />
                </div>
                <div className='flex items-center'>  <FaEnvelope className="text-gray-500 text-xl mt-2 " />
                    <span className="ml-2 text-black lg:mx-4 mx-4 mt-2">yourproject@jordancollective.com</span></div>

                <div className="flex items-center mt-2 md:mt-0 lg:mt-0">
                    <FaEnvelope className="text-gray-500 text-xl hidden " />
                    <span className="ml-2 text-black hidden">yourproject@jordancollective.com</span>
                    <div className="flex">
                        <a href="https://www.facebook.com">
                            <FaFacebook className="text-black text-xl mx-2" />
                        </a>
                        <a href="https://www.instagram.com">
                            <FaInstagram className="text-black text-xl mx-2" />
                        </a>
                        <a href="https://www.youtube.com">
                            <FaYoutube className="text-black text-xl mx-2" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

const Footer = ({click}) => (
    <>
    <div className="fixed bg-white bottom-0 flex justify-center left-0 right-0 text-gray-600 text-sm">
        <div className="w-1/3 border-t p-2">
            <span className="px-2"><span onClick={click} className="cursor-pointer text-green-800">Toggle Theme</span> &copy; 2021 Naries' Team </span><span className="border-l px-2">casts.com</span>
        </div>
    </div>
    </>
);

export default Footer;
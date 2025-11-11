import React from "react";


const Footer = () => {
    return (

        <footer className="bg-[#333333] py-8 mt-0">
            <div className="container mx-auto px-4 text-center text-[#FFFFFF] justify-center flex flex-col items-center gap-2">
    
                <img  src="/footer.png" alt="footer" />
                <p className="text-sm">&copy; {new Date().getFullYear()} Batana by Cleo. All rights reserved.</p>
                
            </div>
        </footer>   
    );
};

export default Footer;
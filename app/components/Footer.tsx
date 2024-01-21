import Orb from "./Orb";

const Footer = () => {
    return (
        <div className="flex flex-col items-center w-[1440px] mx-auto">
            <div className="relative bottom-5 left-64">
                <Orb></Orb>
            </div>
            <div className="relative top-48 right-80">
                <Orb></Orb>  
            </div>
            <div className=" w-1/2 backdrop-blur-3xl backdrop-opacity-60 h-56 rounded-xl shadow-[0_0_30px_1px_var(--special-color)] mb-20 mx-auto flex flex-col items-center">
                <h1 className="text-3xl font-bold py-10">Want to be aware of all update</h1>
                <div className="flex gap-10">
                    <input className="w-[28rem] rounded-md border-[var(--special-color)] border-2" type="email" name="email" />
                    <button className="bg-[var(--special-color)] rounded-2xl px-16 py-2 text-sm font-bold text-[var(--main-color)]">Subscribe</button>
                </div> 
            </div>
        </div> 
     );
}
 
export default Footer;
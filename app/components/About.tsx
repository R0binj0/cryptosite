import Image from "next/image";
import Orb from "./Orb";

const About = () => {
    return ( 
        <div className="flex flex-col items-center pt-36 mx-auto">
            <div className="relative bottom-10 right-[36rem]">
                <Orb></Orb>
            </div>
            <div className="flex gap-10 px-20">
                <div>
                    <h1 className="text-7xl font-bold w-[700px] pb-2">Save, Buy and Sell Your blockchain asset</h1>
                    <h2 className="text-4xl font-medium w-[500px]">The easy to manage and trade your cryptocurency asset</h2>
                    <div className="flex gap-10 pt-16">
                        <button className="bg-[var(--special-button)] text-[var(--main-color)] w-48 py-2 rounded-xl font-bold">Connect Wallet</button>
                        <button className="bg-[var(--text-color)] text-[var(--main-color)] w-48 py-2 rounded-xl font-bold">Start Trading</button>
                    </div>
                </div>
                <div>
                    <Image src="/image_1.svg" width={662} height={487} alt="First image" />
                    <div className="relative left-72">
                       <Orb></Orb> 
                    </div>
                </div>
            </div>
            <div className="w-[70%] flex flex-col items-center py-64">
                <div className="relative bottom-24 right-[20rem]">
                    <Orb></Orb>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-5xl font-bold text-center">Global Decentralize currency based on blockchain technology</h1>
                    <p className="text-xl font-medium text-[var(--special-color)]">Web3 is the latest efficient technology</p>
                </div>
            </div>
            <div className="flex items-center pt-18 pb-32">
                <div className="relative top-16 left-24">
                    <Orb></Orb>
                </div>
                <div className="flex">
                    <Image src="/image_2.svg" width={703} height={477} alt="First image" />
                    <div className="gap-10 flex flex-col">
                        <div className="bg-gradient-to-r from-[var(--main-color)] to-[var(--special-color)] rounded-lg w-[600px] flex flex-col items-end h-32 justify-center pr-12">
                            <h1 className="font-bold text-3xl">Access Token Market</h1>
                            <p className="font-medium text-xl text-[var(--main-color)] w-1/2 text-center">Buy and sell token anytime and anywhere</p>
                        </div>
                        <div className="bg-gradient-to-r from-[var(--main-color)] to-[var(--special-color)] rounded-lg w-[600px] flex flex-col items-end h-32 justify-center pr-12">
                            <h1 className="font-bold text-3xl">User Friendly Interface </h1>
                            <p className="font-medium text-xl text-[var(--main-color)] w-1/2 text-center">Easy to navigate</p>
                        </div>
                        <div className="bg-gradient-to-r from-[var(--main-color)] to-[var(--special-color)] rounded-lg w-[600px] flex flex-col items-end h-32 justify-center pr-12">
                            <h1 className="font-bold text-3xl">Ownership Token control</h1>
                            <p className="font-medium text-xl text-[var(--main-color)] w-1/2 text-center">Be in control and own as many asset as possible</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;
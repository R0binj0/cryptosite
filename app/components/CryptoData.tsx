"use client"

import { useState, useEffect } from 'react';
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';

interface CryptoDataProps {
    symbol: string;
}

interface CryptoInfo {
    symbol: string;
    name: string;
    quotes: {
        USD: {
            price: number;
            percent_change_24h: number;
        };
    };
}

const CryptoData: React.FC<CryptoDataProps> = ({ symbol }) => {
    const [cryptoInfo, setCryptoInfo] = useState<CryptoInfo | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.coinpaprika.com/v1/tickers/${symbol}`);
                const data = await response.json();
                setCryptoInfo(data);
            } catch (error) {
                console.error(`Error fetching data for ${symbol} from Coinpaprika:`, error);
            }
        };

        fetchData();
    }, [symbol]);

    return (
        <div className='border border-white border-1 w-[297px] backdrop-blur-3xl backdrop-opacity-60 h-36 rounded-xl shadow-[0_0_15px_1px_var(--special-color)] mb-5 p-2'>
            <header className='flex items-center'>
                <Image src={`https://static.coinpaprika.com/coin/${symbol}/logo.png?rev=10632791`} alt="logo" width={40} height={40}/>
                <div className='flex pl-2 gap-4'>
                    <h1>{cryptoInfo?.symbol}</h1>
                    <h2>{cryptoInfo?.name}</h2>
                </div>
                <button className='text-3xl ml-auto'><MdArrowOutward /></button>
            </header>
            <main className='pt-4'>
                <div className='flex justify-between pb-1'>
                    <h1 className='text-2xl font-semibold'>${cryptoInfo?.quotes?.USD?.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
                    <Image src={`https://graphsv2.coinpaprika.com/currency/chart/${symbol}/24h/chart.svg`} alt="chart" width={150} height={150}/>
                </div>
                <h2>{cryptoInfo?.quotes?.USD?.percent_change_24h}%</h2>
            </main>
        </div>
    );
};

export default CryptoData;

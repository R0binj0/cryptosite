"use client"

import { useState, useEffect } from 'react';
import CryptoData from "./CryptoData";

interface Crypto {
    id: string;
}

const List:  React.FC = () => {
    const [topCryptos, setTopCryptos] = useState<Crypto[]>([]);

    useEffect(() => {
        const fetchTopCryptos = async () => {
            try {
                const response = await fetch('https://api.coinpaprika.com/v1/tickers');
                const data = await response.json();
                setTopCryptos(data.slice(0, 16));
            } catch (error) {
                console.error('Error fetching top cryptocurrencies from Coinpaprika:', error);
            }
        };

        fetchTopCryptos();
    }, []);

    return ( 
        <div className="flex flex-col items-center w-[1260px] mx-auto pb-36">
            <h1 className="font-bold text-5xl pb-8 self-start">Market Trend</h1>
            <div className="flex gap-6 flex-wrap">
                {topCryptos.map((crypto) => (
                    <CryptoData key={crypto.id} symbol={crypto.id} />
                ))}
            </div>
        </div>
    );
}

export default List;

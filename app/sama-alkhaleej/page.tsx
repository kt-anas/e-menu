'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Page = () => {
    const [imagePaths, setImagePaths] = useState([]);

    useEffect(() => {
        fetch('/api/get-store-images?store=sama-alkhaleej')
            .then((res) => res.json())
            .then((data) => setImagePaths(data));
    }, []);

    return (
        <div className="flex  items-center justify-center  bg-gray-100 p-4">
            <div className="w-full max-w-4xl overflow-y-auto border-2 shadow-lg bg-black">
                {imagePaths.map((src, index) => (
                    <div key={index} className="flex justify-center w-full mb-2">
                        <Image
                            src={src}
                            alt={`Page ${index + 1}`}
                            layout="intrinsic"
                            width={500}   
                            height={300} 
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Page;

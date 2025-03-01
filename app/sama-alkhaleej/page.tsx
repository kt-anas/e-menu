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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-4xl h-screen overflow-y-auto border-2 shadow-lg bg-white">
                {imagePaths.map((src, index) => (
                    <div key={index} className="relative w-full h-[600px] mb-2">
                        <Image
                            src={src}
                            alt={`Page ${index + 1}`}

                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;

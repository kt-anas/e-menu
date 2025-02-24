"use client";

import Image from "next/image";

export default function Home() {
    const imagePaths = [
        "/E-menu-images/1.png",
        "/E-menu-images/2.png",
        "/E-menu-images/3.png",
        "/E-menu-images/4.png",
        "/E-menu-images/5.png",
        "/E-menu-images/6.png",
        "/E-menu-images/7.png",
        "/E-menu-images/8.png",
        "/E-menu-images/9.png",
        "/E-menu-images/10.png",
        "/E-menu-images/11.png",
        "/E-menu-images/12.png",
        "/E-menu-images/13.png",
        "/E-menu-images/14.png",
        "/E-menu-images/15.png",
        "/E-menu-images/16.png",
        "/E-menu-images/17.png",
        "/E-menu-images/18.png",
        "/E-menu-images/19.png",
        "/E-menu-images/20.png",
        "/E-menu-images/21.png",
        "/E-menu-images/22.png",
        "/E-menu-images/23.png",
        "/E-menu-images/24.png",
       
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-4xl h-screen overflow-y-auto border-2 shadow-lg bg-white">
                {imagePaths.map((src, index) => (
                    <Image 
                        key={index} 
                        src={src} 
                        alt={`Page ${index + 1}`} 
                        width={800} 
                        height={1000} 
                        className="w-full mb-2"
                    />
                ))}
            </div>
        </div>
    );
}

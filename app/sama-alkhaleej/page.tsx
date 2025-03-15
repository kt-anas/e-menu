"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Page = () => {
    const [imagePaths, setImagePaths] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch("/api/get-store-images?store=sama-alkhaleej")
            .then((res) => res.json())
            .then((data) => {
                setImagePaths(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error loading images:", error);
                setLoading(false);
            });
    }, []);

    const mainSectionImages =
        imagePaths.length >= 2
            ? [imagePaths[0], imagePaths[1]]
            : ["/placeholder.svg", "/placeholder.svg"];

    const additionalImages = imagePaths.length > 2 ? imagePaths.slice(2) : [];

    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-6">

        

            <section className="max-w-6xl mx-auto mb-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black tracking-wide font-serif text-center">
                            <span className="block">Welcome to</span>
                            <span className="text-amber-600 block my-2">SAMA ALKHALEEJ</span>
                            <span className="block">Restaurant</span>
                            <div className="w-24 h-1 bg-amber-500 mx-auto mt-3"></div>
                        </h1>
                    </div>
                    <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-64 md:h-80">
                        <div className="relative w-full h-full">
                            <Image
                                src={mainSectionImages[0]}
                                alt="First section image"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain cursor-pointer"
                                priority
                                onClick={() => setSelectedImage(mainSectionImages[0])}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto h-1 bg-black mb-10"></div>

            {additionalImages.length > 0 && (
                <section className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {additionalImages.map((src, index) => (
                            <div
                                key={index}
                                className="bg-gray-200 rounded-lg overflow-hidden h-48 cursor-pointer"
                                onClick={() => setSelectedImage(src)}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={src}
                                        alt={`Gallery image ${index + 1}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-gray-200 text-black p-2 rounded-full hover:bg-gray-300 flex items-center justify-center w-8 h-8 "
                            aria-label="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="relative w-full h-[80vh]">
                            <Image
                                src={selectedImage}
                                alt="Selected preview"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Page;
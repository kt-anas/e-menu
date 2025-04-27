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
            .then(async (res) => {
                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(`Fetch error: ${res.status} ${text}`);
                }
                return res.json();
            })
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

            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-gray-300 border-t-amber-500 rounded-full animate-spin"></div>
                        <p className="mt-4 text-lg text-gray-700">Loading...</p>
                    </div>
                </div>
            )}

            <section className="max-w-6xl mx-auto mb-10">
                <div className="flex flex-col md:flex-row items-center gap-8">

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
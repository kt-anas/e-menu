"use client";
import { useState } from "react";
import Image from "next/image";

const Page = () => {
    const imagePaths: string[] = [
        "/images/E-menu-images/1.png",
        "/images/E-menu-images/2.png",
        "/images/E-menu-images/3.png",
        "/images/E-menu-images/4.png",
        "/images/E-menu-images/5.png",
        "/images/E-menu-images/6.png",
        "/images/E-menu-images/7.png",
        "/images/E-menu-images/8.png",
        "/images/E-menu-images/9.png",
        "/images/E-menu-images/10.png",
        "/images/E-menu-images/11.png",
        "/images/E-menu-images/12.png",
        "/images/E-menu-images/13.png",
        "/images/E-menu-images/14.png",
        "/images/E-menu-images/15.png",
        "/images/E-menu-images/16.png",
        "/images/E-menu-images/17.png",
        "/images/E-menu-images/18.png",
        "/images/E-menu-images/19.png",
        "/images/E-menu-images/20.png",
        "/images/E-menu-images/21.png",
        "/images/E-menu-images/22.png",
        "/images/E-menu-images/23.png",
        "/images/E-menu-images/24.png",

    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const mainSectionImages =
        imagePaths.length >= 2
            ? [imagePaths[0], imagePaths[1]]
            : [imagePaths[0], imagePaths[0]]; // show same image twice if only one available

    const additionalImages = imagePaths.length > 2 ? imagePaths.slice(2) : [];

    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-6">
            {/* Main Section */}
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

                    <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-64 md:h-80">
                        <div className="relative w-full h-full">
                            <Image
                                src={mainSectionImages[1]}
                                alt="Second section image"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain cursor-pointer"
                                priority
                                onClick={() => setSelectedImage(mainSectionImages[1])}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Images */}
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

            {/* Image Modal */}
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

"use client";

import { useEffect, useState } from "react";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf";


pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

export default function Home() {
    const [images, setImages] = useState<string[]>([]);
    const pdfURL = "/menu/E-menu.pdf";

    useEffect(() => {
        const loadPDF = async () => {
            try {
                const loadingTask = pdfjs.getDocument(pdfURL);
                const pdf = await loadingTask.promise;

                let extractedImages: string[] = [];

                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const viewport = page.getViewport({ scale: 2 });
                    const canvas = document.createElement("canvas");
                    const context = canvas.getContext("2d");

                    if (!context) continue;
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;

                    const renderTask = page.render({ canvasContext: context, viewport });
                    await renderTask.promise;

                    extractedImages.push(canvas.toDataURL("image/png"));
                }

                setImages(extractedImages);
            } catch (error) {
                console.error("Failed to load PDF:", error);
            }
        };

        loadPDF();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Scrollable PDF Viewer</h1>

            {/* Scrollable Image Container */}
            <div className="w-full max-w-4xl h-screen overflow-y-auto border-2 shadow-lg bg-white">
                {images.length > 0 ? (
                    images.map((img, index) => (
                        <img key={index} src={img} alt={`Page ${index + 1}`} className="w-full mb-2" />
                    ))
                ) : (
                    <p>Loading PDF...</p>
                )}
            </div>
        </div>
    );
}

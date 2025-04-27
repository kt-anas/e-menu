'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Page = () => {
    const [loading, setLoading] = useState(true)

    const mainSectionImages = ['/images/Al-Tasheed/IMG_1.jpg']
    const additionalImages = [
        '/images/Al-Tasheed/IMG_1.jpg',
        '/images/Al-Tasheed/IMG_2.jpg',
        '/images/Al-Tasheed/IMG_3.jpg',
        '/images/Al-Tasheed/IMG_4.jpg',
        '/images/Al-Tasheed/IMG_5.jpg',
        '/images/Al-Tasheed/IMG_6.jpg',
        '/images/Al-Tasheed/IMG_7.jpg',
        '/images/Al-Tasheed/IMG_8.jpg',
    ]

    useEffect(() => {
        const fakeLoading = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(fakeLoading)
    }, [])

    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-6 relative overflow-x-hidden">

            {/* Loading Spinner */}
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-gray-600 border-t-amber-500 rounded-full animate-spin"></div>
                        <p className="mt-4 text-lg text-white">Loading...</p>
                    </div>
                </div>
            )}

            {/* Main Content */}
            {!loading && (
                <>
                    {/* Main Section */}
                    <section className="max-w-6xl mx-auto mb-10">
                        <div className="flex flex-col items-center gap-8">
                            <div className="w-full rounded-lg overflow-x-auto">
                                <Image
                                    src={mainSectionImages[0]}
                                    alt="First section image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    className="cursor-pointer"
                                    priority
                                />
                            </div>
                        </div>
                    </section>

                    {additionalImages.length > 0 && (
                        <section className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {additionalImages.map((src, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
                                    >
                                        <div className="relative w-full">
                                            <Image
                                                src={src}
                                                alt={`Gallery image ${index + 1}`}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: 'auto' }}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </>
            )}


        </main>
    )
}

export default Page

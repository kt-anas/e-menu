"use client"
import { useState, useEffect } from "react"
import Image from "next/image"



const Page = () => {
  const [imagePaths, setImagePaths] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch("/api/get-store-images?store=sama-alkhaleej")
      .then((res) => res.json())
      .then((data) => {
        setImagePaths(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading images:", error)
        setLoading(false)
      })
  }, [])
  const mainSectionImages = imagePaths.length >= 2 
    ? [imagePaths[0], imagePaths[1]] 
    : ["/placeholder.svg", "/placeholder.svg"]

  const additionalImages = imagePaths.length > 2 ? imagePaths.slice(2) : []

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-6">
<section className="max-w-6xl mx-auto mb-10">
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">Welcome to Our Store</h1>
    </div>
    <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-64 md:h-80">
      <div className="relative w-full h-full">
        <Image
          src={mainSectionImages[0]}
          alt="First section image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  </div>
</section>

      <div className="max-w-6xl mx-auto h-1 bg-black mb-10"></div>      
      {additionalImages.length > 0 && (
        <>
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">E-Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalImages.map((src, index) => (
                <div key={index} className="bg-gray-200 rounded-lg overflow-hidden h-48">
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
        </>
      )}


    </main>
  )
}

export default Page
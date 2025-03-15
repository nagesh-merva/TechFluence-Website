import React, { useState, useEffect } from 'react';

const mockPosts = [
  {
    id: "post1",
    media_type: "IMAGE",
    media_url: "https://via.placeholder.com/600x600.png?text=Instagram+Post+1",
    caption:
      "This is an amazing shot from our latest tech conference! #TechFluence #Innovation #FutureTech",
    permalink: "https://instagram.com/p/mock-post-1",
    name: "Tech Conference",
    owner: "@techfluence",
    price: "New Post",
    bgColor: "rgba(20, 40, 60, 0.5)"
  },
  {
    id: "post2",
    media_type: "IMAGE",
    media_url: "https://via.placeholder.com/600x600.png?text=Instagram+Post+2",
    caption:
      "Behind the scenes at our cyberpunk-themed photoshoot. The future is now! #CyberAesthetic #TechFluence #DigitalArt",
    permalink: "https://instagram.com/p/mock-post-2",
    name: "Cyberpunk Shoot",
    owner: "@digitalartist",
    price: "Trending",
    bgColor: "rgba(40, 20, 60, 0.5)"
  },
  {
    id: "post3",
    media_type: "VIDEO",
    media_url:
      "https://instagram.com/p/mock-post-6",
    caption:
      "Check out this incredible demo of our new AR technology. #AugmentedReality #TechFluence #FutureTech",
    permalink: "https://instagram.com/p/mock-post-3",
    name: "AR Demo",
    owner: "@futuretechs",
    price: "Featured",
    bgColor: "rgba(20, 60, 40, 0.5)"
  },
  {
    id: "post4",
    media_type: "IMAGE",
    media_url: "https://via.placeholder.com/600x600.png?text=Instagram+Post+4",
    caption:
      "Retro-futuristic designs inspire our latest collection. What do you think? #RetroFuture #DigitalAesthetics #TechFluence",
    permalink: "https://instagram.com/p/mock-post-4",
    name: "Retro Future",
    owner: "@retrodesigner",
    price: "Popular",
    bgColor: "rgba(60, 40, 20, 0.5)"
  },
  {
    id: "post5",
    media_type: "IMAGE",
    media_url: "https://via.placeholder.com/600x600.png?text=Instagram+Post+5",
    caption:
      "The intersection of technology and art - our latest exhibition opens next week! #TechArt #DigitalGallery #TechFluence",
    permalink: "https://instagram.com/p/mock-post-5",
    name: "Tech Art",
    owner: "@gallery",
    price: "Exhibition",
    bgColor: "rgba(40, 50, 70, 0.5)"
  },
  {
    id: "post6",
    media_type: "IMAGE",
    media_url: "https://via.placeholder.com/600x600.png?text=Instagram+Post+6",
    caption:
      "Neon lights and digital dreams. Our new studio space is ready for creation! #NeonAesthetic #CreativeSpace #TechFluence",
    permalink: "https://instagram.com/p/mock-post-6",
    name: "Neon Dreams",
    owner: "@studio",
    price: "New Space",
    bgColor: "rgba(70, 30, 90, 0.5)"
  },
];

export default function NFTGrid() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://127.0.0.1:8000/api/instagram-media/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setPosts(data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching Instagram posts:", err)
        setError(err.message)
        setPosts(mockPosts)
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="bg-black min-h-screen p-6 flex justify-center items-center">
        <div className="text-white font-mono">Loading posts...</div>
      </div>
    )
  }

  if (error && posts.length === 0) {
    return (
      <div className="bg-black min-h-screen p-6 flex justify-center items-center">
        <div className="text-white font-mono">Error loading posts. Please try again later.</div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts && posts.map((nft, index) => (
          <div
            key={index}
            className="relative transition-transform hover:scale-105"
          >

            <div
              className="relative p-0.5"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0))',
              }}
            >

              <div className="bg-transparent relative">

                <div className="absolute top-0 left-0 border-t-[20px] border-l-[20px] border-transparent border-t-black border-l-black"></div>

                <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-transparent border-t-black border-r-black"></div>

                <div className="relative min-h-[300px] p-6" style={{
                  backgroundImage: 'linear-gradient(rgba(100, 200, 200, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 200, 200, 0.07) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  boxShadow: 'inset 0 0 30px rgba(100, 200, 200, 0.1)',
                  backgroundColor: 'transparent'
                }}>

                  <div className="h-full flex flex-col">

                    <div className="mb-4">
                      <h3 className="text-white text-lg font-mono tracking-wider">{nft.name || `Post ${index + 1}`}</h3>
                      <div className="h-0.5 bg-gray-500 w-full relative mt-1">
                        <div className="absolute right-0 top-0 h-0.5 w-12 bg-white"></div>
                      </div>
                    </div>

                    <div
                      className="flex-grow mb-4 relative overflow-hidden flex items-center justify-center"
                      style={{
                        background: nft.bgColor || 'rgba(30, 40, 50, 0.5)',
                        minHeight: "160px",
                        maxHeight: "180px"
                      }}
                    >
                      {nft.media_type === "IMAGE" ? (
                        <img
                          src={nft.media_url}
                          alt={nft.name || `Instagram Post ${index + 1}`}
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <video
                            src={nft.media_url}
                            className="w-full h-full object-contain p-4"
                            controls
                            poster="https://via.placeholder.com/600x600.png?text=Video+Thumbnail"
                            style={{ maxHeight: "160px" }}
                          />
                        </div>
                      )}

                      <div className="absolute top-0 left-0 border-t border-l border-white w-6 h-6"></div>
                      <div className="absolute top-0 right-0 border-t border-r border-white w-6 h-6"></div>
                      <div className="absolute bottom-0 left-0 border-b border-l border-white w-6 h-6"></div>
                      <div className="absolute bottom-0 right-0 border-b border-r border-white w-6 h-6"></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-400 text-sm font-mono">Created by</p>
                        <p className="text-white text-sm font-mono">{nft.owner || '@techfluence'}</p>
                      </div>
                      <div>
                        <a
                          href={nft.permalink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-mono text-lg"
                        >
                          {nft.price || 'View'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 border-b-[20px] border-l-[20px] border-transparent border-b-black border-l-black"></div>

                <div className="absolute bottom-0 right-0 border-b-[20px] border-r-[20px] border-transparent border-b-black border-r-black"></div>
              </div>
            </div>

            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
              <div className="h-6 w-6 rounded-full border border-gray-500 flex items-center justify-center">
                <div className="h-2 w-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
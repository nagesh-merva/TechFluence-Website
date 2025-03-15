import React, { useEffect } from "react"
import GalleryHeader from "@/sections/Gallery/GalleryHeader"
import PostCard from "@/sections/Gallery/PostCard"
import Footer from "@/sections/Footer"
import { useLocation } from "react-router-dom"


export default function GalleryPage() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="w-full h-full bg-black">
            <GalleryHeader />
            <div className="py-20 bg-black">
                <PostCard />
            </div>
            <div className="py-6 bg-black">
                <Footer />
            </div>
        </div>
    );
}


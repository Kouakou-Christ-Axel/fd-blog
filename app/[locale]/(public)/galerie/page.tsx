import React from 'react';
import PageTitle from "@/components/blocks/page-title";
import SectionTitle from "@/components/section-title";
import VideoCard from "@/components/media/video-card";
import {videosList} from "@/app/api/videos";
import Publicite from "@/components/publicite";

function VideosPage() {
    return (
        <div className="page-container">
            <PageTitle
                title="Vidéos"
            />
            <section>
                <SectionTitle text="Emissions" className="mt-6 w-1/2"/>
                <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videosList.map((video) => (
                        <VideoCard video={video} key={video.id}/>
                    ))}
                </div>
                <Publicite className="w-full max-h-36 mt-14"/>
            </section>
        </div>
    );
}

export default VideosPage;
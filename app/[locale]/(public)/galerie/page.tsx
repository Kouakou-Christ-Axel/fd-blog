import React from 'react';
import PageTitle from "@/components/blocks/page-title";
import SectionTitle from "@/components/section-title";
import VideoCard from "@/components/media/video-card";
import {videosList} from "@/app/api/videos";
import Publicite from "@/components/publicite";
import Image from "next/image";
import ComingSoon from "@/components/coming-soon";

function VideosPage() {
	return (
		<div className="page-container">
			<PageTitle
				title="Vidéos"
			/>
			<section>
				<SectionTitle text="Emissions" className="mt-6 w-1/2"/>
				{/*<div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
				{/*    {videosList.map((video) => (*/}
				{/*        <VideoCard video={video} key={video.id}/>*/}
				{/*    ))}*/}
				{/*</div>*/}
				<ComingSoon
					title="La galerie sera bientôt disponibles."
					description="Nous travaillons actuellement à la mise en place de cette section. Revenez bientôt pour découvrir nos
				émissions vidéo passionnantes !"
				/>
				<Publicite className="w-full max-h-36 mt-14"/>
			</section>
		</div>
	);
}

export default VideosPage;
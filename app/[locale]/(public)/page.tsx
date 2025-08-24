import FlashInfo from "@/components/flash-info";
import Publicite from "@/components/publicite";
import * as React from "react";
import LatestNews from "@/components/home/latest-news";
import OtherDailyNews from "@/components/home/other-daily-news";
import DailyAsk from "@/components/home/daily-ask";
import TribuneSportive from "@/components/home/tribune-sportive";
import StayConnected from "@/components/home/stay-connected";
import NewsletterBox from "@/components/home/newsletter-box";
import VideoCard, {IVideo} from "@/components/media/video-card";
import SectionTitle from "@/components/section-title";
import {Link} from "@/i18n/navigation";
import {newsList} from "@/app/api/news";
import NewsCard from "@/components/news/news-card";
import {videosList} from "@/app/api/videos";
import VideosSection from "@/components/home/videos-section";

export default async function HomePage(props: {
    params: Promise<{ locale: string }>;
}) {

    return (
        <>
            <FlashInfo/>
            <div className="page-container">
                <Publicite className="h-40 mt-8 mb-10"/>
                <LatestNews/>
                <OtherDailyNews/>
                <DailyAsk/>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                    <TribuneSportive
                        className="md:col-span-2 lg:col-span-3 xl:col-span-4"
                    />
                    <StayConnected
                        className="md:col-span-1 lg:col-span-2"
                    />
                </div>
                <VideosSection/>
                <NewsletterBox/>
            </div>
        </>
    );
}

import React from 'react';
import PageTitle from "@/components/blocks/page-title";
import SectionTitle from "@/components/section-title";
import NewsCard from "@/components/news/news-card";
import {newsList} from "@/app/api/news";
import Publicite from "@/components/publicite";

async function ActualityNationalePage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const filteredNews = newsList.slice(0, 3)
    return (
        <div className="page-container">
            <PageTitle
                title={`Actualités nationales`}
            />
            <section className="mt-6">
                <SectionTitle
                    text={slug}
                    className="lg:w-1/2"
                />
                <div className="mt-6 grid grid-cols-1 grid-rows-12 md:grid-cols-6 gap-6 overflow-hidden">
                    <div className="space-y-3 md:col-span-3 row-span-12">
                        <NewsCard news={filteredNews[0]} highlighted />
                    </div>

                    <div className="md:col-span-3 space-y-6 grid grid-rows-2 row-span-9">
                        {filteredNews.slice(1).map((item) => (
                            <div key={item.id}>
                                <NewsCard
                                    important
                                    news={item}
                                    orientation="horizontal"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="mt-12 grid grid-cols-[1fr,minmax(100px,30%)] gap-8">
                <div className="grid grid-rows-6 gap-6">
                    {newsList.map((item) => (
                        <div key={item.id} className="min-h-52">
                            <NewsCard news={item} orientation="horizontal" important />
                        </div>
                    ))}
                </div>
                <div className="grid grid-rows-2 gap-8">
                    <Publicite/>
                    <Publicite/>
                </div>
            </section>
        </div>
    );
}

export default ActualityNationalePage;
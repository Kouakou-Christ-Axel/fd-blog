import React from 'react';
import SectionTitle from "@/components/section-title";
import {Link} from "@/i18n/navigation";
import {newsList} from "@/app/api/news";
import NewsCard from "@/components/news/news-card";

function TribuneSportive({className = ''}: {className?: string}) {
    return (
        <section className={className}>
            <div className="flex items-center mb-8">
                <SectionTitle text="Autres actualités du jour"/>
                <Link
                    href={`/news`}
                    className="ml-auto text-[#FF8D28] hover:underline uppercase"
                >
                    Voir tout
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2">
                {newsList.slice(0,4).map((item, i) => (
                    <NewsCard key={item.id} news={item} />
                ))}
            </div>
        </section>
    );
}

export default TribuneSportive;
import React from 'react';
import Image from "next/image";
import {INews} from "@/app/api/news";
import {Badge} from "@/components/ui/badge";
import ArticleCard, {IMedia, MediaCardProps} from "@/components/media/article-card";
import CategoryBadge from "@/components/category-badge";

type NewsCardProps = {
    news: INews;
} & MediaCardProps

function NewsCard({news, ...props}: NewsCardProps) {
    const media: IMedia = {
        title: news.title,
        url: `/articles/${news.id}`,
        publishedAt: news.publishedAt,
    }

    return (
        <ArticleCard {...props} media={media}>
            <Image
                src={news.imageUrl}
                alt={news.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <CategoryBadge
                category={news.category}
                className="absolute top-2 left-2"
            />
        </ArticleCard>
    );
}

export default NewsCard;
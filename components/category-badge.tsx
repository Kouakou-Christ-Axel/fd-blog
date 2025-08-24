import React from 'react';
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";
import {ICategory} from "@/app/api/news";

function CategoryBadge({category, className}: { category: ICategory, className: string }) {
    return (
        <Badge className={cn(
            "first-letter:capitalize text-white rounded-2xl p-2 text-xs",
            category.color,
            className
        )}>
            {category.name}
        </Badge>
    );
}

export default CategoryBadge;
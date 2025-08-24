import React from 'react';
import {Megaphone} from "lucide-react";
import {cn} from "@/lib/utils";

function Publicite(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className={cn('bg-gray-200 rounded-xl flex flex-col items-center justify-center', props.className)}>
            <Megaphone
                className="w-full h-1/2 text-gray-500"
                size={64}
                strokeWidth={1.5}
                style={{display: 'block', margin: '0 auto'}}
            />
            <p className="text-center text-gray-600 mt-2">
                Publicité ici
            </p>
        </div>
    );
}

export default Publicite;
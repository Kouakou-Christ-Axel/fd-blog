import React from 'react';
import SectionTitle from "@/components/section-title";
import Image from "next/image";

function DailyAsk() {
    return (
        <section className="py-8">
            <SectionTitle text="Question du jour" className="mb-6"/>
            <div className="bg-[#F2F2F7] rounded-2xl flex flex-wrap max-md:items-center py-3 px-2">
                <div
                    className="relative overflow-hidden rounded-2xl w-full sm:w-[300px] max-md:h-48 flex items-center justify-center"
                >
                    <Image src="/images/all-img/c1.png" alt="Question du jour" fill/>
                </div>
                <article className="flex flex-col flex-1">
                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Quelle est votre opinion sur les dernières nouvelles politiques ?
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Partagez vos réflexions et engagez-vous dans la discussion.
                        </p>
                        <button
                            className="bg-[#FF8D28] text-white px-4 py-2 rounded-lg hover:bg-[#e07b22] transition-colors"
                        >
                            Répondre
                        </button>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default DailyAsk;
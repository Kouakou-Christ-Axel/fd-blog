import React from 'react';
import {newsList} from "@/app/api/news";
import Image from "next/image";
import Publicite from "@/components/publicite";
import SectionTitle from "@/components/section-title";
import NewsCard from "@/components/news/news-card";

async function ArticleDetailPage({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const news = newsList.find(news => news.id === id);
    return (
        <article className="page-container">
            <figure className="relative mt-6">
                {news && (
                    <>
                        <Image
                            src={news.imageUrl}
                            alt={news.title}
                            width={1200}
                            height={600}
                            className="w-full max-h-[500px] object-cover object-center rounded-xl"
                        />
                        <div
                            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent px-3 lg:px-6 pb-3 md:pb-5 lg:pb-10 rounded-b-xl"
                        >
                            <h1 className="text-white text-sm sm:text-lg md:text-xl lg:text-3xl font-bold transition duration-200">
                                {news.title}
                            </h1>
                        </div>
                    </>
                )}
            </figure>
            <section className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr,minmax(100px,25%)] grid-rows-2 gap-16">
                {news ? (
                    <div className="prose max-w-none row-span-2">
                        <p className="text-justify text-sm md:text-base">
                            Politique nationale, le front commun projette une marche pacifique le 2 août 2025 à Abidjan.
                            Pendant ce temps, sur le terrain, la collecte des parrainages dévore les énergies. Sécurité
                            nationale, même pas peur, 21 nouvelles dames commandos pour nous protéger. Sport, la vache
                            qui rit dans l’enclos de la CAF

                            La démocratie est un tout : liberté, justice, sécurité, respect des règles, respect des
                            institutions, des hommes et des femmes qui les incarnent, bonne gouvernance. Les marches,
                            meetings, prises de parole publique, débats font partie des moyens pour la construction de
                            l’autoroute de la démocratie. Les marches, en particulier, ne doivent pas faire peur. Elles
                            doivent être encadrées et bien coordonnées. Les forces de sécurité nationale savent le faire
                            ça. Quand les principes de base sont respectés, en règle générale, tout se passe bien. Ça,
                            c’est dans le meilleur des mondes.
                            Dans le pays de ton Camarade, les hommes et femmes politiques se parlent, mais ne
                            s’entendent pas. À trois mois de la présidentielle 2025, les incertitudes sont grandes. À
                            tous les niveaux. Du coup, la marche projetée par le front commun le 2 août 2025 à Abidjan
                            sonne un réveil matinal pour tous les occupants de la maison Ivoire. Un test de mobilisation
                            pour les organisateurs, une tribune pour prendre l’opinion nationale et internationale à
                            témoin sur la principale revendication de cette organisation, la réinscription de leurs
                            leaders sur la liste électorale. « Ce n’est ni une rébellion, ni une insurrection, mais un
                            devoir », rassurent les organisateurs.

                            Sur le terrain, les potentiels candidats tournent pour la collecte des parrainages. Plus
                            personne ne dort en fait. « Le plus dur n’est pas de trouver les parrains. Mais, tout le
                            travail administratif derrière », explique une déléguée, proche d’un candidat à la
                            candidature. C’est en fait une précampagne qui ne dit pas son nom. Avec tout ce que cela
                            implique, les moyens physiques, intellectuels et financiers, la logistique,
                            l&#39;organisation
                            optimale, la gestion du temps, un discours convaincant. La collecte des parrainages prend
                            fin dans un mois, soit le 25 août 2025.
                            La démocratie a besoin d’être protégée et sécurisée. 499 nouveaux commandos sont venus
                            grossir les rangs des gendarmes. Au nombre de ceux-ci, 21 dames. Ils ont vaincu les
                            obstacles de la formation et ont acquis selon le ministre de tutelle, Photocopie-le Rempart,
                            « les aptitudes spécifiques qui leur permettront de faire face à toutes les difficultés au
                            cours de leurs différentes missions ». Il a profité de sa présence ce jeudi 24 juillet 2025
                            au camp d’Agban pour faire d’une pierre, quatre coups: remise des épaulettes aux commandos
                            de la 22e promotion ( dont 24 officiers), inauguration de la section d’analyse des traces
                            technologiques de la gendarmerie nationale, du bloc opératoire de l’unité de chirurgie du
                            centre de santé et de la remise de véhicules aux forces armées.
                            Vous connaissez la vache qui rit? Elle a rejoint la CAN2025 en tant que fournisseur
                            officiel. Partenariat signé ce jeudi 24 juillet 2025 à Casa avec la CAF. « Rejoindre la
                            Coupe d’Afrique des Nations 2025 est un prolongement naturel de notre mission : créer du
                            lien, soutenir les communautés, et célébrer ce qui nous unit tous : la joie », a expliqué le
                            patron de la marque à l&#39;occasion.
                            Mon dernier vendredi au PPEF avant mon repos annuel. Tu es au courant comme ça...
                        </p>
                        <div className="mt-14">
                            <div>
                                <SectionTitle
                                    text="A suivre aussi"
                                    className="w-2/3"
                                />
                                <div className="grid grid-rows-2 gap-6 mt-6 ">
                                    {newsList.slice(4, 6).map((item) => (
                                        <div key={item.id} className="min-h-44">
                                            <NewsCard news={item} orientation="horizontal" important/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Article non trouvé.</p>
                )}
                <Publicite/>
            </section>
        </article>
    );
}

export default ArticleDetailPage;
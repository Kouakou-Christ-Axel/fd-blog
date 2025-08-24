export interface IMenuItem {
    name: string;
    href: string;
    hasSubMenu?: boolean;
    subMenuItems?: IMenuItem[];
};

export const publicMenuItems: IMenuItem[] = [
    {
        name: "A la Une",
        href: "/a-la-une",
    },
    {
        name: "Actualités nationales",
        href: "/actualites-nationales",
        hasSubMenu: true,
        subMenuItems: [
            {
                name: "Politique",
                href: "/actualites-nationales/politique",
            },
            {
                name: "Economie",
                href: "/actualites-nationales/economie",
            },
            {
                name: "Santé",
                href: "/actualites-nationales/societe",
            },
            {
                name: "Sociale",
                href: "/actualites-nationales/culture",
            },
            {
                name: "Nouveautés",
                href: "/actualites-nationales/nouveautes",
            },
        ]
    },
    {
        name: "Sports",
        href: "/sports",
    },
    {
        name: "Podcasts",
        href: "/podcasts",
    },
    {
        name: "Galerie",
        href: "/galerie",
    },
];
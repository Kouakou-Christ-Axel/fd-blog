import {
    Dribbble,
    Facebook,
    Github,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";
import LogoFd from "@/components/logo-fd";
import FooterColumn from "@/components/partials/public-footer/footer-column";

const data = {
    facebookLink: 'https://facebook.com/mvpblocks',
    instaLink: 'https://instagram.com/mvpblocks',
    twitterLink: 'https://twitter.com/mvpblocks',
    githubLink: 'https://github.com/mvpblocks',
    dribbbleLink: 'https://dribbble.com/mvpblocks',
    services: {
        webdev: '/web-development',
        webdesign: '/web-design',
        marketing: '/marketing',
        googleads: '/google-ads',
    },
    about: {
        history: '/company-history',
        team: '/meet-the-team',
        handbook: '/employee-handbook',
        careers: '/careers',
    },
    help: {
        faqs: '/faqs',
        support: '/support',
        livechat: '/live-chat',
    },
    contact: {
        email: 'hello@mvpblocks.com',
        phone: '+91 8637373116',
        address: 'Kolkata, West Bengal, India',
    },
    company: {
        name: 'Mvpblocks',
        description:
            'Building beautiful and functional web experiences with modern technologies. We help startups and businesses create their digital presence.',
        logo: '/logo.webp',
    },
};

const socialLinks = [
    {icon: Facebook, label: 'Facebook', href: data.facebookLink},
    {icon: Instagram, label: 'Instagram', href: data.instaLink},
    {icon: Twitter, label: 'Twitter', href: data.twitterLink},
    {icon: Github, label: 'GitHub', href: data.githubLink},
    {icon: Dribbble, label: 'Dribbble', href: data.dribbbleLink},
];

const aboutLinks = [
    {text: 'Company History', href: data.about.history},
    {text: 'Meet the Team', href: data.about.team},
    {text: 'Employee Handbook', href: data.about.handbook},
    {text: 'Careers', href: data.about.careers},
];

const serviceLinks = [
    {text: 'Web Development', href: data.services.webdev},
    {text: 'Web Design', href: data.services.webdesign},
    {text: 'Marketing', href: data.services.marketing},
    {text: 'Google Ads', href: data.services.googleads},
];

const helpfulLinks = [
    {text: 'FAQs', href: data.help.faqs},
    {text: 'Support', href: data.help.support},
    {text: 'Live Chat', href: data.help.livechat, hasIndicator: true},
];

const contactInfo = [
    {icon: Mail, text: data.contact.email},
    {icon: Phone, text: data.contact.phone},
    {icon: MapPin, text: data.contact.address, isAddress: true},
];

export default function PublicFooter() {
    return (
        <footer className="bg-black text-white mt-16 w-full place-self-end rounded-t-xl">
            <div className="mx-auto max-w-screen-xl px-4 pt-6 pb-6 sm:px-6 lg:px-8 lg:pt-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <LogoFd
                            className="size-64 transition-all duration-300"
                        />

                        <p className="mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left font-bold">
                            Le portail de référence de l&#39;actualité ivoirienne
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-32 lg:grid-cols-2 justify-around lg:col-span-3">
                        <FooterColumn links={aboutLinks} title={"About Us"}/>
                        <FooterColumn links={serviceLinks} title={"Our Services"}/>
                    </div>
                </div>

                <div className="mt-10 pt-6">
                    <p className="text-center text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
                        &copy; 2025 Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}

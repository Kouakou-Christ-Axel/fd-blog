import Image from "next/image";
import LogoFd from "@/components/logo-fd";
import Link from "next/link";

export default function PublicFooter() {
	return (
		<footer className="bg-black text-white mt-16 w-full place-self-end rounded-t-xl">
			<div className="mx-auto max-w-screen-xl px-4 pt-6 pb-6 sm:px-6 lg:px-8 lg:pt-10">
				<div className="flex justify-around items-center gap-8">
					<div className="lg:col-span-2">
						<LogoFd
							className="size-64 transition-all duration-300"
						/>

						<p className="mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left font-bold">
							Le portail de référence de l&#39;actualité ivoirienne
						</p>
					</div>

					<div className="text-center">
						<h6 className="text-3xl">
							Projet de modernisation de la presse: une stratégie de transformation digitale
							pour tout ces acteurs.
						</h6>
						<p className="text-center mx-auto text-gray-300 mt-4">
							Idée originale, conçue et développée par {" "}
							<Link href="https://www.lunion-lab.com/" className="font-semibold">LUNION-LAB</Link>.
						</p>
					</div>
					<Image
						src="/logo-lunion.png"
						alt="LUNION-LAB"
						width={200}
						height={200}
						className="mx-auto sm:mx-0"
					/>
				</div>

				<div className="mt-10 pt-6">
					<p className="text-center text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
						COPYRIGHT &copy; 2025 Fernand Dedeh, Développé par {" "}
						<strong className="font-semibold">
							LUNION-LAB
						</strong> .
					</p>
				</div>
			</div>
		</footer>
	);
}

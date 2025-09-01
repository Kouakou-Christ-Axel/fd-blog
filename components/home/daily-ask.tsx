import React from 'react';
import SectionTitle from "@/components/section-title";
import Image from "next/image";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

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
						<Dialog>
							<form>
								<DialogTrigger asChild>
									<Button
										type={"button"}
										className="bg-[#FF8D28] text-white px-4 py-2 rounded-lg hover:bg-[#e07b22] transition-colors"
									>
										Répondre
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>
											Répondre à la question du jour
										</DialogTitle>
										<DialogDescription>
											Vous pouvez partager vos pensées et opinions ici.
										</DialogDescription>
										<DialogContent className="text-sm">
											<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
												<div>
													<Label htmlFor="fullname">
														Nom complet
													</Label>
													<Input
														id="fullname"
														type="text"
														placeholder="Votre nom"
													/>
												</div>
												<div>
													<Label htmlFor="email">
														Email
													</Label>
													<Input
														id="email"
														type="email"
														placeholder="Votre email"
													/>
												</div>
											</div>

											<Label htmlFor="response">
												Votre réponse
											</Label>
											<Textarea
												id="response"
												className="w-full h-32"
												placeholder="Dites nous tout."
											/>
										</DialogContent>
									</DialogHeader>
								</DialogContent>
							</form>
						</Dialog>
					</div>
				</article>
			</div>
		</section>
	);
}

export default DailyAsk;
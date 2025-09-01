import {z} from "zod";

export const reponseQuestionAddSchema = z.object({
	contenu: z.string({
		required_error: "Le contenu de la réponse est requis",
		invalid_type_error: "Le contenu de la réponse doit être une chaîne de caractères",
	})
		.min(1, "Le contenu de la réponse ne peut pas être vide")
		.max(5000, "Le contenu de la réponse ne peut pas dépasser 5000 caractères")
		.trim()
});

export type ReponseQuestionAddDTO = z.infer<typeof reponseQuestionAddSchema>;
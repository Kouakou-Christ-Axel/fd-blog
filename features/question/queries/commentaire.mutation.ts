import {useMutation,} from '@tanstack/react-query';
import {createCommentAction,} from '../actions/commentaire.action';
import {useInvalidateCommentaireQuery} from './index.query';
import {toast} from "sonner";
import {processAndValidateFormData} from 'ak-zod-form-kit';
import {ReponseQuestionAddDTO, reponseQuestionAddSchema} from "@/features/question/question.schema";

export const useCommentaireCreateMutation = () => {
	const invalidateCommentaireQuery = useInvalidateCommentaireQuery();

	return useMutation({
		mutationFn: async ({ data, questionId }: { data: ReponseQuestionAddDTO }) => {
			const { contenu } = data;

			const dataForSubmit = {
				contenu
			};

			const result = processAndValidateFormData(reponseQuestionAddSchema, dataForSubmit, {
				outputFormat: "json"
			});

			if (!result.success) {
				throw new Error(result.errorsInString || "Une erreur est survenue lors de la validation des données.");
			}

			// Envoyer les données au serveur
			const response = await createCommentAction(result.data as FormData);

			if (!response.success) {
				throw new Error(response.error!);
			}

			return response.data!;
		},
		onSuccess: async () => {
			await invalidateCommentaireQuery();
			toast.success("Réponse ajouté avec succès");
		},
		onError: async (error) => {
			toast.error(error.message);
		},
	});
};
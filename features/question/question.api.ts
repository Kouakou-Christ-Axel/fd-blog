import {api} from "@/lib/api";
import {PaginatedResponse} from "@/types";
import {IQuestion} from "./question.type";

export interface IQuestionAPI {
	obtenirToutesQuestions(): Promise<PaginatedResponse<IQuestion>>;

	repondreQuestion(params: { questionId: number, fullname: string, email: string, response: string }): Promise<{
		success: boolean
	}>;
}

export const questionApi: IQuestionAPI = {
	obtenirToutesQuestions(): Promise<PaginatedResponse<IQuestion>> {
		return api.request<PaginatedResponse<IQuestion>>({
			endpoint: `/questions`,
			method: "GET",
		});
	},

	repondreQuestion({questionId, response}: {
		questionId: number,
		fullname: string,
		email: string,
		response: string
	}): Promise<{ data: any }> {
		return api.request<{ success: boolean }>({
			endpoint: `/comments`, // Assuming this is the correct endpoint
			method: "POST",
			data: {comments:response, question_id:questionId}
		});
	}
};
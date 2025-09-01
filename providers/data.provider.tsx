"use client";

import React, {useEffect} from "react";
import {useArticleStore} from "@/features/articles/stores/article.store";
import {useArticleListQuery} from "@/features/articles/queries/article-list.query";
import {useDailyListQuery} from "@/features/dailies/query/dailies-list.query";
import {useDailyStore} from "@/features/dailies/store/dailiesStore";

export default function DataProvider() {
	const {data, isLoading, isError, error, isFetching} = useArticleListQuery({})
	const {data: dailies, isLoading: dailiesLoading, isError: dailiesIsError, error: dailiesError} = useDailyListQuery();

	const articlesList = React.useMemo(() => data?.data || [], [data]);
	const dailiesList = React.useMemo(() => {
		return dailies?.data || []; // Adaptez selon la structure réelle de `dailies`
	}, [dailies]);

	const {setAllArticles, setQueryState} = useArticleStore();
	const {setAllDailies, setQueryState: setDailyQueryState} = useDailyStore();

	useEffect(() => {
		setQueryState({isLoading, isError, error, isFetching});
	}, [isLoading, isError, error, isFetching, setQueryState]);

	useEffect(() => {
		if (articlesList.length) setAllArticles(articlesList);
	}, [articlesList, setAllArticles]);

	useEffect(() => {
		setDailyQueryState({
			isLoading: dailiesLoading,
			isError: dailiesIsError,
			error: dailiesError,
			isFetching: false
		});
	}, [dailiesLoading, dailiesIsError, dailiesError, setDailyQueryState]);


	useEffect(() => {
		if (dailiesList.length) setAllDailies(dailiesList);
	}, [dailiesList, setAllDailies]);

	return null;
}

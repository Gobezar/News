import {useMemo} from 'react'

export const usePageNews = (currentPage, pageSize, news) => {
    const currentPageNews = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize
        const lastPageIndex = firstPageIndex + pageSize
        return news.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, news, pageSize])

    return currentPageNews
}
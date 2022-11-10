import { useEffect } from "react"

export const useSetTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Optimum Health`

    }, [title])

}
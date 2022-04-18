import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setResponseInfo } from "../app/actions/formActions";

export function usePostRequest() {
    const dispatch = useDispatch()
    const request = useCallback(async (url, data) => {
        try {
            const response = await fetch(url, {     // response configuration
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {     // response validation
                throw new Error(`Error from ${url}, status: ${response.message}`)
            }

            const output = await response.json()
            return output

        } catch (err) {
            console.log("Error from request:", err.message)
            dispatch(setResponseInfo({ message: err.message, status: "error" }))
        }
    }, [])

    return { request }
}
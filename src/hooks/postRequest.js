import { useState, useCallback } from "react";

export function usePostRequest() {
    const [error, setError] = useState("")
    const [status, setStatus] = useState("")

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

            setError(output.status)
            setStatus(output.msg)

            return output

        } catch (error) {
            console.log("Error from sendFormData:", error.message)
            setError(error.status)
            setStatus(error.msg)
        }
    }, [])

    return { request, error, status }
}
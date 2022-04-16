export async function sendPostRequest(url, data) {
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

        return await response.json()

    } catch (error) {
        console.log("Error from sendFormData:", error.message)
    }
}
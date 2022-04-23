export interface formInputsTypes {
    id: number,
    htmlFor: string,
    text: string,
    placeholder: string,
}

export interface currentResponseInfoTypes {
    message: string,
    status: string,
}

export interface currentRequestInfoTypes extends currentResponseInfoTypes {
}
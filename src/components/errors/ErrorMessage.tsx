import React from 'react'
import { IErrorMessage } from './interface/IErrorMessage'

export function ErrorMessage({ error }: IErrorMessage) {
    return (
        <p>{ error }</p>
    )
}
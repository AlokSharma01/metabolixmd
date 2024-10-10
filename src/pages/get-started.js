import MultiStepForm from '@/components/MultiStepForm'
import { getAuthToken } from '@/services/API/apiHelper'
import React from 'react'
import LoginForm from './login'

const GetStarted = () => {
    const token =getAuthToken()
    return (
        <div>
            {
                token ?
                <MultiStepForm/>
                :
                <LoginForm/>
            }
        </div>
    )
}

export default GetStarted
import MultiStepForm from '@/components/MultiStepForm'
import { getAuthToken } from '@/services/API/apiHelper'
import React from 'react'

const GetStarted = () => {
    const token =getAuthToken()
    return (
        <div>
            {
                token &&
                <MultiStepForm/>
            }
        </div>
    )
}

export default GetStarted
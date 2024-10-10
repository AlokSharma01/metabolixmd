import MultiStepForm from '@/components/MultiStepForm'
import { getAuthToken } from '@/services/API/apiHelper'
import React, { useState, useEffect } from 'react'
import LoginForm from './login'
import { useRouter } from 'next/navigation'

const GetStarted = () => {
    const [token, setToken] = useState("")

    const router = useRouter()
    useEffect(() => {
        const val = getAuthToken()
        if (val) {
            setToken(val)
        }
        else {
            router.push("/login")
        }

    }, [])

    return (
        <>

            <MultiStepForm />

        </>
    )
}

export default GetStarted
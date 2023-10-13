import { FormProvider, useTnForm } from '@thinknimble/tn-forms-react'
import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { LoginForm, TLoginForm, LoginFormInputs, userApi } from 'src/services/user'

function LogInInner() {
  const params = useLocation()
  const autoError = params.state?.autoError
  const navigate = useNavigate()

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-3 bg-slate-800">
      <header className="text-2xl text-white">Welcome</header>
      <div className="flex flex-col gap-3">
        <button onClick={() => navigate('/home')} className="text-white">
          Enter
        </button>
      </div>
    </main>
  )
}

export const LogIn = () => {
  return (
    <FormProvider<LoginFormInputs> formClass={LoginForm}>
      <LogInInner />
    </FormProvider>
  )
}

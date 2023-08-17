import { useMutation } from '@apollo/client'
import { LOG_IN } from '../utils/mutations'
import { FormProvider, useTnForm } from '@thinknimble/tn-forms-react'
import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'src/components/button'
import { ErrorsList } from 'src/components/errors'
import { Input } from 'src/components/input'
import { LoginForm, TLoginForm, LoginFormInputs, userApi } from 'src/services/user/index'

import { useAuth, useFollowupRoute } from 'src/utils/auth'
import { localStoreManager } from 'src/utils/local-store-manager'

function LogInInner() {
  const params = useLocation()
  const autoError = params.state?.autoError
  const [error, setError] = useState(autoError ? true : false)
  const { updateToken, updateUserId } = useAuth()
  const { createFormFieldChangeHandler, form } = useTnForm<TLoginForm>()
  const navigate = useNavigate()

  const [logIn] = useMutation(LOG_IN, {
    onCompleted: (data: { tokenAuth: { token: string } }) => {
      localStorage.setItem('auth-token', data.tokenAuth.token)
      updateToken(data.tokenAuth.token)

      navigate('/home')
    },
    onError: (error: { message?: string }) => {
      if (error.message === 'Please enter valid credentials') {
        setError(true)
      }
    },
  })
  const handleLogin = () => {
    const input = {
      variables: {
        password: form.password.value,
      },
    }
    logIn(input)
  }

  const { token } = useAuth()
  const isAuth = Boolean(token)
  const followupRoute = useFollowupRoute()
  //Do not even show this page if they're already logged in
  if (isAuth) {
    // let AppOrAuth address this

    return <Navigate to={'/'} state={{ from: followupRoute }} />
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-3 bg-slate-800">
      <header className="text-2xl text-white">Welcome</header>
      <section className="flex flex-col items-center justify-center gap-3">
        <p className="text-xl text-slate-200">Enter the password to begin</p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="flex flex-col gap-3"
        >
          <div>
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => {
                createFormFieldChangeHandler(form.password)(e.target.value)
              }}
              value={form.password.value ?? ''}
              data-cy="password"
              id="password"
            />
            <ErrorsList errors={form.password.errors} />
          </div>
        </form>
        <Button data-cy="login-btn" onClick={handleLogin}>
          Login
        </Button>
      </section>
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

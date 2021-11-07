import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'

const LoginPage = () => {
  const { logIn, isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>()

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
        <Toaster toastOptions={{ className: 'bg-white', duration: 6000 }} />

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <svg
            viewBox="0 0 567 640"
            className="w-auto h-40 mx-auto text-black fill-current dark:text-white"
          >
            <path d="M323.7 236.8c-2.2 2.4-2.1 4.4.3 7 2.5 2.7 2.7 9.6.4 17.3-1.7 5.6-12.6 28-14.8 30.2-.7.6-2.8 3.2-4.7 5.7-4.3 5.6-19 21-20 21-.5 0-4.1 2-8.1 4.5-7.5 4.5-21.3 9.3-24.1 8.2-.8-.3-3.2-4.1-5.2-8.4-1.9-4.3-4.2-9-5-10.5-.8-1.4-1.5-3.2-1.5-3.8 0-1.9-8.9-25.2-10.6-27.8-1.6-2.4-4.6-2.9-6.1-1-.6.7-1.3 3.8-1.6 6.8-.7 7.7-11.3 30.6-20.4 44-2.6 3.9-5.2 7.9-5.8 8.8-.5 1-1.3 1.9-1.6 2.2-.3.3-2.5 3.2-4.9 6.5-2.4 3.3-6.4 8.6-8.9 11.7-2.6 3.1-6.2 7.8-8.1 10.3-3.6 4.8-25.3 26.2-32.5 32-2.2 1.8-6 4.4-8.5 5.8-13 7.2-25.1 13.6-29.5 15.7-6 2.8-8.5 4.8-8.5 6.8 0 1.2 1.2 1.4 6.3 1 5.9-.5 13.5-3.8 22.7-9.6 1.4-.9 4.6-2.6 7.2-3.8 2.5-1.2 6.9-3.9 9.8-6.1 5.8-4.3 31-27.2 31-28.2 0-.3 2.1-2.9 4.6-5.6 5.9-6.7 6.2-7 10.3-12.9 3.9-5.7 4-5.8 7.9-10.6 2.8-3.4 8.3-11.2 15.1-21.4 3-4.5 7.9-13.4 16.8-31.1l2.5-4.9 3.9 9.4c4 9.8 13.1 28.7 15.8 32.9.8 1.3 1.6 3 1.7 3.8.1.8 1.4 2.9 2.8 4.8 1.4 1.8 2.6 3.6 2.6 4 0 .7 4.7 7.9 8.8 13.5 3.8 5.1 8.1 8.9 10 9 1.9 0 1.5-1.5-2.5-8-10-16.3-15.3-25.7-15.3-27 0-.6 1-1 2.3-1 9.7 0 28.2-11.4 40.9-25.2 4.7-5.1 9.8-10.5 11.2-11.9 1.4-1.5 2.6-3 2.6-3.3 0-.3 1.5-3 3.3-5.9 4.8-7.7 5.4-8.6 8.8-15.7 1.8-3.6 4.2-9.6 5.4-13.3 2.2-6.8 2.2-6.8 3.8-4.4.9 1.3 5.7 10.9 10.7 21.3 32.1 66.3 40.7 80.7 68.4 113.9 11 13.3 32.1 34.5 43.5 43.7 8.3 6.6 38.3 26.8 40 26.8.6 0 1.1-.8 1.1-1.8s-3.1-3.6-8.1-6.7c-6.7-4.2-18-12.3-19.9-14.5-.3-.3-2.1-1.7-4-3.2-11.5-8.7-39.8-37.6-50.6-51.8-2.7-3.5-5.9-7.6-7.1-9-1.2-1.4-3.4-4.3-4.9-6.5-1.4-2.2-4.3-6.5-6.4-9.5-13.2-19.4-21.8-35.2-38-69.5-6.4-13.5-12.7-26.8-14.9-31.5-2.6-5.6-13.3-23.4-14.5-24.2-1.9-1.3-4.2-.9-5.9 1z" />
          </svg>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Don&apos;t have an account?{' '}
            <Link
              to={routes.signup()}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up for free
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <Form onSubmit={onSubmit} className="space-y-6">
              <div>
                <Label
                  name="username"
                  className="block text-sm font-medium text-gray-700"
                  errorClassName="block text-sm font-medium text-red-500"
                >
                  Username
                </Label>
                <div className="mt-1">
                  <TextField
                    name="username"
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    errorClassName="block w-full px-3 py-2 text-red-500 placeholder-gray-400 border border-red-500 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />
                </div>

                <FieldError
                  name="username"
                  className="block mt-1 text-xs font-semibold text-red-500 uppercase"
                />
              </div>

              <div>
                <Label
                  name="password"
                  className="block text-sm font-medium text-gray-700"
                  errorClassName="block text-sm font-medium text-red-500"
                >
                  Password
                </Label>
                <div className="mt-1">
                  <PasswordField
                    name="password"
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    errorClassName="block w-full px-3 py-2 text-red-500 placeholder-gray-400 border border-red-500 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                </div>

                <div className="text-sm text-gray-400 text-right mt-0.5 hover:to-indigo-600">
                  <Link
                    to={routes.forgotPassword()}
                    className="text-sm text-gray-400 text-right mt-0.5 hover:to-indigo-600"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <FieldError
                  name="password"
                  className="block mt-1 text-xs font-semibold text-red-500 uppercase"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block ml-2 text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to={routes.forgotPassword()}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <Submit className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign in
                </Submit>
              </div>
            </Form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-gray-500 bg-white">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                <div>
                  <button
                    onClick={() => navigate('/')}
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => navigate('/')}
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Twitter</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => navigate('/')}
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage

import { Link } from '@redwoodjs/router'
import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { useEffect, useRef } from 'react'

const NewsletterSignup = () => {
  const emailRef = useRef<HTMLInputElement>()

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  const onSubmit = async (/* data */) => {
    // const response = await sendEmail({ ...data })
  }

  return (
    <div className="w-full bg-gray-800 rounded-2xl">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Sign up for our newsletter
          </h2>
          <p className="max-w-3xl mt-3 text-lg leading-6 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <Form onSubmit={onSubmit} className="sm:flex">
            <Label name="email" className="sr-only">
              Email address
            </Label>
            <div>
              <TextField
                name="email"
                className="w-full px-5 py-3 placeholder-gray-500 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs"
                errorClassName="w-full px-5 py-3 placeholder-gray-500 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-500 focus:border-red-500 sm:max-w-xs"
                ref={emailRef}
                placeholder="Enter your email"
                autoComplete="email"
                validation={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
              />

              <FieldError
                name="email"
                className="block mt-1 text-xs font-semibold text-red-500 uppercase"
              />
            </div>

            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <Submit className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Notify me
              </Submit>
            </div>
          </Form>
          <p className="mt-3 text-sm text-gray-300">
            We care about the protection of your data. Read our{' '}
            <Link to="#" className="font-medium text-white underline">
              Privacy Policy.
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSignup

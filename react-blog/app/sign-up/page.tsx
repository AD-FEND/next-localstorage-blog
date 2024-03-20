import Link from 'next/link'
import { FormEvent } from 'react'; 
import SignInForm from './components/SignInForm';


 
export default function SignUpPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

    console.log("Form submitted")
  }
  return (
    <div>
      <h1 className='text-3xl'>Sign up</h1>
      
      
<div>
      <SignInForm></SignInForm>
      {/* Link back to the home page */}
      <Link href="/">Home</Link>
    </div>
    </div>
  )
}


import Link from 'next/link'
import { FormEvent } from 'react'; 
import SignInForm from './components/SignInForm';


 
export default function SignUpPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

    console.log("Form submitted")
  }
  return (
    <div>
      <h1>Sign up</h1>
      <Link href="/">Home</Link>
      
<div>
      <h1>Sign up</h1>
      <SignInForm></SignInForm>
      {/* Link back to the home page */}
      <Link href="/">Home</Link>
    </div>
    </div>
  )
}


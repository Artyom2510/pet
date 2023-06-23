import { GoogleButton } from '@/components/GoogleButton';
import { SignInForm } from '@/components/SignInForm';

const SignUp = async () => {
  return (
    <div>
      <h1>SignIn</h1>
      <SignInForm />
      <GoogleButton />
    </div>
  );
};

export default SignUp;

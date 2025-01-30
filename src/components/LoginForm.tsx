import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';
import { Formik } from 'formik';
import { ILoginPayload } from '@/types/auth';
import { loginSchema } from '@/validations/auth';
import { useLogin } from '@/hooks/auth';
import { Env } from '@/lib/Env';

const initialValues: ILoginPayload = {
  email: '',
  password: '',
};

export function LoginForm() {
  const { login, isLoading } = useLogin();

  const handleSubmit = (values: ILoginPayload) => {
    login(values);
  };

  console.log(Env);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        handleBlur,
      }) => (
        <form className={cn('flex flex-col gap-6')} onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Login to your account</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-6">
            <Input
              id="email"
              type="email"
              label="Email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.email && touched.email}
              helperText={errors.email}
            />

            <Input
              id="password"
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.password && touched.password}
              helperText={errors.password}
            />

            <Button type="submit" className="w-full" isLoading={isLoading}>
              Login
            </Button>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
            <Button type="button" variant="outline" className="w-full">
              <FcGoogle />
              Login with Google
            </Button>
          </div>
          <div className="text-center text-sm">
            Don&apos;t have an account?{' '}
            <a className="underline underline-offset-4 cursor-pointer">
              Sign up
            </a>
          </div>
        </form>
      )}
    </Formik>
  );
}

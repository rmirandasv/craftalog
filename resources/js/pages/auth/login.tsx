import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';

interface LoginProps {
  status?: string;
  canResetPassword: boolean;
  canRegister: boolean;
}

export default function Login({
  status,
  canResetPassword,
  canRegister,
}: LoginProps) {
  return (
    <AuthLayout
      title="Welcome back"
      description="Log in to access your catalog management dashboard"
    >
      <Head title="Log in" />

      <div className="w-full rounded-lg border bg-card p-8 shadow-sm">
        {status && (
          <div className="mb-4 rounded-md bg-green-50 p-3 text-sm font-medium text-green-800 dark:bg-green-950 dark:text-green-100">
            {status}
          </div>
        )}

        <Form
          {...store.form()}
          resetOnSuccess={['password']}
          className="flex flex-col gap-6"
        >
          {({ processing, errors }) => (
            <>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoFocus
                    tabIndex={1}
                    autoComplete="email"
                    placeholder="john@example.com"
                  />
                  <InputError message={errors.email} className="mt-1" />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    {canResetPassword && (
                      <TextLink
                        href={request()}
                        className="text-sm"
                        tabIndex={5}
                      >
                        Forgot password?
                      </TextLink>
                    )}
                  </div>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    required
                    tabIndex={2}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                  />
                  <InputError message={errors.password} className="mt-1" />
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox id="remember" name="remember" tabIndex={3} />
                  <Label htmlFor="remember" className="font-normal">
                    Remember me
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="mt-2 w-full"
                  size="lg"
                  tabIndex={4}
                  disabled={processing}
                  data-test="login-button"
                >
                  {processing && <Spinner />}
                  Sign In
                </Button>
              </div>

              {canRegister && (
                <div className="text-center text-sm">
                  <span className="text-muted-foreground">
                    Don't have an account?{' '}
                  </span>
                  <TextLink href={register()} tabIndex={6}>
                    Sign up
                  </TextLink>
                </div>
              )}
            </>
          )}
        </Form>
      </div>
    </AuthLayout>
  );
}

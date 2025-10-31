import { login } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head } from '@inertiajs/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
  return (
    <AuthLayout
      title="Create your account"
      description="Start creating beautiful product catalogs today"
    >
      <Head title="Register" />
      <div className="w-full rounded-lg border bg-card p-8 shadow-sm">
        <Form
          {...store.form()}
          resetOnSuccess={['password', 'password_confirmation']}
          disableWhileProcessing
          className="flex flex-col gap-6"
        >
          {({ processing, errors }) => (
            <>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    autoFocus
                    tabIndex={1}
                    autoComplete="name"
                    name="name"
                    placeholder="John Doe"
                  />
                  <InputError message={errors.name} className="mt-1" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    tabIndex={2}
                    autoComplete="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <InputError message={errors.email} className="mt-1" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    tabIndex={3}
                    autoComplete="new-password"
                    name="password"
                    placeholder="Create a secure password"
                  />
                  <InputError message={errors.password} className="mt-1" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password_confirmation">
                    Confirm Password
                  </Label>
                  <Input
                    id="password_confirmation"
                    type="password"
                    required
                    tabIndex={4}
                    autoComplete="new-password"
                    name="password_confirmation"
                    placeholder="Re-enter your password"
                  />
                  <InputError
                    message={errors.password_confirmation}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-2 w-full"
                  size="lg"
                  tabIndex={5}
                  data-test="register-user-button"
                >
                  {processing && <Spinner />}
                  Create Account
                </Button>
              </div>

              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  Already have an account?{' '}
                </span>
                <TextLink href={login()} tabIndex={6}>
                  Sign in
                </TextLink>
              </div>
            </>
          )}
        </Form>
      </div>
    </AuthLayout>
  );
}

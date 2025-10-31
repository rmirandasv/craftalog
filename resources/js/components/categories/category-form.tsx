import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import { Form } from '@inertiajs/react';

type CategoryFormProps = {
  formProps: any;
  submitLabel: string;
  defaultValues?: {
    name?: string;
    description?: string;
  };
};

export default function CategoryForm({
  formProps,
  submitLabel,
  defaultValues,
}: CategoryFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...formProps}>
          {({ processing, errors }) => (
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Category name"
                  defaultValue={defaultValues?.name}
                  autoFocus
                />
                <InputError message={errors.name} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Optional description"
                  defaultValue={defaultValues?.description}
                  rows={4}
                />
                <InputError message={errors.description} />
              </div>

              <div className="flex justify-end">
                <Button type="submit">
                  {processing && <Spinner />}
                  {submitLabel}
                </Button>
              </div>
            </div>
          )}
        </Form>
      </CardContent>
    </Card>
  );
}

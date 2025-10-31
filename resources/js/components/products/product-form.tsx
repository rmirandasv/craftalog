import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import { type ProductCategory } from '@/types';
import { Form } from '@inertiajs/react';

type ProductFormProps = {
  formProps: any;
  submitLabel: string;
  categories: ProductCategory[];
  defaultValues?: {
    name?: string;
    description?: string;
    price?: number;
    image?: string;
    product_category_id?: number;
  };
};

export default function ProductForm({
  formProps,
  submitLabel,
  categories,
  defaultValues,
}: ProductFormProps) {
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
                  placeholder="Product name"
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
                  placeholder="Product description"
                  defaultValue={defaultValues?.description}
                  rows={4}
                />
                <InputError message={errors.description} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  name="price"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  defaultValue={defaultValues?.price}
                />
                <InputError message={errors.price} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  type="file"
                  name="image"
                  accept="image/*"
                  className="cursor-pointer border-2 border-gray-300 rounded-md p-2"
                />
                <InputError message={errors.image} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="product_category_id">Category</Label>
                <Select
                  defaultValue={defaultValues?.product_category_id?.toString()}
                  onValueChange={(value) => {
                    const hiddenInput = document.getElementById(
                      'product_category_id',
                    ) as HTMLInputElement;
                    if (hiddenInput) hiddenInput.value = value;
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id.toString()}
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input
                  type="hidden"
                  id="product_category_id"
                  name="product_category_id"
                  defaultValue={defaultValues?.product_category_id?.toString()}
                />
                <InputError message={errors.product_category_id} />
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

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import { Product } from '@/types';
import { Form } from '@inertiajs/react';

type CatalogFormProps = {
  formProps: any;
  submitLabel: string;
  products: Product[];
  defaultValues?: {
    name?: string;
    company_name?: string;
    cover_image?: string;
    description?: string;
    productIds?: number[];
  };
};

export default function CatalogForm({
  formProps,
  submitLabel,
  products,
  defaultValues,
}: CatalogFormProps) {
  return (
    <Form {...formProps}>
      {({ processing, errors }) => (
        <>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Catalog Name</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="My Product Catalog"
                      defaultValue={defaultValues?.name}
                      autoFocus
                    />
                    <InputError message={errors.name} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="company_name">Company Name</Label>
                    <Input
                      id="company_name"
                      type="text"
                      name="company_name"
                      placeholder="Company Inc."
                      defaultValue={defaultValues?.company_name}
                    />
                    <InputError message={errors.company_name} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="cover_image">Company Logo URL</Label>
                      <Input
                      id="cover_image"
                      type="file"
                      name="cover_image"
                      accept="image/*"
                      className="cursor-pointer border-2 border-gray-300 rounded-md p-2"
                    />
                    <InputError message={errors.cover_image} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Catalog description"
                      defaultValue={defaultValues?.description}
                      rows={4}
                    />
                    <InputError message={errors.description} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Products</CardTitle>
              </CardHeader>
              <CardContent>
                {products.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    No products available. Create products first.
                  </p>
                ) : (
                  <div className="grid gap-3">
                    {products.map((product) => (
                      <Label
                        key={product.id}
                        className="flex cursor-pointer items-start space-x-3 rounded-lg border p-3 transition-colors hover:bg-accent/50"
                        htmlFor={product.id.toString()}
                      >
                        <Checkbox
                          id={product.id.toString()}
                          name="products[]"
                          value={product.id.toString()}
                          defaultChecked={defaultValues?.productIds?.includes(
                            product.id,
                          )}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="font-medium">{product.name}</div>
                          {product.description && (
                            <div className="truncate text-sm text-muted-foreground">
                              {product.description}
                            </div>
                          )}
                          <div className="mt-1 flex items-center gap-2">
                            {product.price && (
                              <span className="text-sm font-medium">
                                ${product.price.toFixed(2)}
                              </span>
                            )}
                            {product.category && (
                              <span className="text-xs text-muted-foreground">
                                • {product.category.name}
                              </span>
                            )}
                          </div>
                        </div>
                      </Label>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button type="submit">
                {processing && <Spinner />}
                {submitLabel}
              </Button>
            </div>
          </div>
        </>
      )}
    </Form>
  );
}

import { CatalogPreview } from '@/components/catalogs/catalog-preview';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ColorPicker } from '@/components/ui/color-picker';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import { CatalogColors, Product } from '@/types';
import { Form } from '@inertiajs/react';
import { Eye } from 'lucide-react';
import { useState } from 'react';

type CatalogFormWithPreviewProps = {
  formProps: typeof Form;
  submitLabel: string;
  products: Product[];
  defaultValues?: {
    name?: string;
    company_name?: string;
    cover_image?: string;
    description?: string;
    productIds?: number[];
    colors?: CatalogColors;
    products_per_page?: number;
  };
};

export default function CatalogFormWithPreview({
  formProps,
  submitLabel,
  products,
  defaultValues,
}: CatalogFormWithPreviewProps) {
  const [previewData, setPreviewData] = useState({
    name: defaultValues?.name || '',
    company_name: defaultValues?.company_name || '',
    cover_image: defaultValues?.cover_image || '',
    colors: defaultValues?.colors || {
      primary: '#1e40af',
      secondary: '#6b7280',
      accent: '#3b82f6',
      text: '#1f2937',
      background: '#f9fafb',
    },
    products_per_page: defaultValues?.products_per_page || 3,
    selectedProductIds: defaultValues?.productIds || [],
  });

  const selectedProducts = products.filter((p) =>
    previewData.selectedProductIds.includes(p.id),
  );

  const handleInputChange = (
    field: string,
    value: string | number | boolean,
  ) => {
    setPreviewData((prev) => ({ ...prev, [field]: value }));
  };

  const handleColorChange = (
    colorField: keyof CatalogColors,
    value: string,
  ) => {
    setPreviewData((prev) => ({
      ...prev,
      colors: { ...prev.colors, [colorField]: value },
    }));
  };

  const handleProductToggle = (productId: number, checked: boolean) => {
    setPreviewData((prev) => ({
      ...prev,
      selectedProductIds: checked
        ? [...prev.selectedProductIds, productId]
        : prev.selectedProductIds.filter((id) => id !== productId),
    }));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Form Section */}
      <div className="space-y-6">
        <Form {...formProps}>
          {({ processing, errors }) => (
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
                        onChange={(e) =>
                          handleInputChange('name', e.target.value)
                        }
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
                        onChange={(e) =>
                          handleInputChange('company_name', e.target.value)
                        }
                      />
                      <InputError message={errors.company_name} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="cover_image">Company Logo</Label>
                      <Input
                        id="cover_image"
                        type="file"
                        name="cover_image"
                        accept="image/*"
                        className="cursor-pointer rounded-md border-2 border-gray-300 p-2"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              handleInputChange(
                                'cover_image',
                                reader.result as string,
                              );
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
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
                  <CardTitle className="text-base">Customization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="products_per_page">
                        Products per Page
                      </Label>
                      <Input
                        id="products_per_page"
                        type="number"
                        name="products_per_page"
                        min="1"
                        max="12"
                        defaultValue={defaultValues?.products_per_page || 3}
                        placeholder="3"
                        onChange={(e) =>
                          handleInputChange(
                            'products_per_page',
                            parseInt(e.target.value) || 3,
                          )
                        }
                      />
                      <p className="text-sm text-muted-foreground">
                        Number of products to display per page in the PDF (1-12)
                      </p>
                      <InputError message={errors.products_per_page} />
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="mb-4 text-sm font-medium">Color Scheme</h4>
                      <div className="grid gap-6">
                        <ColorPicker
                          id="color-primary"
                          name="colors[primary]"
                          label="Primary Color"
                          defaultValue={
                            defaultValues?.colors?.primary || '#1e40af'
                          }
                          onChange={(value) =>
                            handleColorChange('primary', value)
                          }
                        />
                        <ColorPicker
                          id="color-secondary"
                          name="colors[secondary]"
                          label="Secondary Color"
                          defaultValue={
                            defaultValues?.colors?.secondary || '#6b7280'
                          }
                          onChange={(value) =>
                            handleColorChange('secondary', value)
                          }
                        />
                        <ColorPicker
                          id="color-accent"
                          name="colors[accent]"
                          label="Accent Color"
                          defaultValue={
                            defaultValues?.colors?.accent || '#3b82f6'
                          }
                          onChange={(value) =>
                            handleColorChange('accent', value)
                          }
                        />
                        <ColorPicker
                          id="color-text"
                          name="colors[text]"
                          label="Text Color"
                          defaultValue={
                            defaultValues?.colors?.text || '#1f2937'
                          }
                          onChange={(value) => handleColorChange('text', value)}
                        />
                        <ColorPicker
                          id="color-background"
                          name="colors[background]"
                          label="Background Color"
                          defaultValue={
                            defaultValues?.colors?.background || '#f9fafb'
                          }
                          onChange={(value) =>
                            handleColorChange('background', value)
                          }
                        />
                      </div>
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
                            onCheckedChange={(checked) =>
                              handleProductToggle(
                                product.id,
                                checked as boolean,
                              )
                            }
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
                <Button type="submit" disabled={processing}>
                  {processing && <Spinner />}
                  {submitLabel}
                </Button>
              </div>
            </div>
          )}
        </Form>
      </div>

      {/* Preview Section */}
      <div className="lg:sticky lg:top-6 lg:h-[calc(100vh-8rem)]">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Eye className="h-4 w-4" />
              Live Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[calc(100%-5rem)]">
            <CatalogPreview
              companyName={previewData.company_name}
              catalogName={previewData.name}
              coverImage={previewData.cover_image}
              colors={previewData.colors}
              productsPerPage={previewData.products_per_page}
              products={selectedProducts}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

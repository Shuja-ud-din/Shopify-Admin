import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  useGetAllTags,
  useGetProductGroup,
  useUpdateProductGroup,
} from '@/hooks/product';
import { ICreateProductGroupPayload } from '@/types/product';
import { CreateProductGroupSchema } from '@/validations/products';
import { Select, Spin } from 'antd';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const initialValues: ICreateProductGroupPayload = {
  name: '',
  description: '',
  tags: [],
};

interface IAntTag {
  value: string;
  label: string;
}

const EditProductGroup = () => {
  const { id } = useParams();

  const [availableTags, setAvailableTags] = useState<IAntTag[]>([]);

  const { tags } = useGetAllTags();
  const { productGroup, isLoading } = useGetProductGroup(id as string);
  const { updateProductGroup, isLoading: isUpdating } = useUpdateProductGroup();

  const onSubmit = (values: ICreateProductGroupPayload) => {
    updateProductGroup({ id: id as string, payload: values });
  };

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema: CreateProductGroupSchema,
    onSubmit,
  });

  useEffect(() => {
    if (tags?.length) {
      setAvailableTags(
        tags.map((tag) => ({ value: tag.name, label: tag.name })),
      );
    }
  }, [tags]);

  useEffect(() => {
    if (productGroup) {
      setValues({
        name: productGroup.name,
        description: productGroup.description,
        tags: productGroup.tags,
      });
    }
  }, [productGroup]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="col-span-2 lg:col-span-3 xl:col-span-4">
        <CardHeader>
          <CardTitle>Update Product Group</CardTitle>
          <CardDescription>
            Update an existing product group with relevant details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              id="name"
              type="text"
              label="Name"
              name="name"
              placeholder="Enter product group name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.name && touched.name}
              helperText={errors.name}
              required
            />

            <Input
              id="description"
              type="textarea"
              label="Description"
              name="description"
              placeholder="Enter product group description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.description && touched.description}
              helperText={errors.description}
              required
            />

            <div className="relative">
              <Label htmlFor={'tags'} className="mb-2">
                Tags
              </Label>
              <div className="mt-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Select
                    id="tags"
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Select tags"
                    options={availableTags}
                    onChange={(value) => {
                      setFieldValue('tags', value);
                    }}
                    value={values.tags}
                  />
                </div>
                {errors.tags && (
                  <p className="mt-1 text-sm text-red-500">{errors.tags}</p>
                )}
              </div>
            </div>

            <Button isLoading={isUpdating} className="w-full" type="submit">
              Update Product Group
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProductGroup;

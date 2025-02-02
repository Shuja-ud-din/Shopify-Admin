import { useEffect, useState } from 'react';
import { PlusCircle } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CardContent } from '@mui/material';
import { Formik } from 'formik';
import { ICreateProductGroupPayload } from '@/types/product';
import { CreateProductGroupSchema } from '@/validations/products';
import { Input } from '@/components/ui/input';
import { Select } from 'antd';
import { useCreateProductGroup, useGetAllTags } from '@/hooks/product';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const initialValues: ICreateProductGroupPayload = {
  name: '',
  description: '',
  tags: [],
};

interface IAntTag {
  value: string;
  label: string;
}

const AddProductGroup = () => {
  const [availableTags, setAvailableTags] = useState<IAntTag[]>([]); // Add this line

  const { tags } = useGetAllTags();
  const { createProductGroup, isLoading } = useCreateProductGroup();

  const handleSubmit = (values: ICreateProductGroupPayload) => {
    createProductGroup(values);
  };

  useEffect(() => {
    if (tags?.length) {
      setAvailableTags(
        tags.map((tag) => ({ value: tag.name, label: tag.name })),
      );
    }
  }, [tags]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="col-span-2 lg:col-span-3 xl:col-span-4">
        <CardHeader>
          <CardTitle>Add Product Group</CardTitle>
          <CardDescription>
            Create a new product group with relevant details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={CreateProductGroupSchema}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              errors,
              touched,
              handleBlur,
              setFieldValue,
            }) => (
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

                <Button isLoading={isLoading} className="w-full" type="submit">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Create Product Group
                </Button>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProductGroup;

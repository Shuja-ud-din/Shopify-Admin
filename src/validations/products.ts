import * as Yup from 'yup';

export const CreateProductGroupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  tags: Yup.array()
    .of(Yup.string())
    .min(1, 'At least one tag is required')
    .required('Tags are required'),
});

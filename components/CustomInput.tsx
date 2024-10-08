import { FormControl, FormField, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

interface CustomInputProps {
    control: Control<z.infer<typeof authFormSchema>>
    name: FieldPath<z.infer<typeof authFormSchema>>
    label: string
    placeholder: string
    type?: string
}

const CustomInput = (props: CustomInputProps) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className='form-label'>{props.label}</FormLabel>
          <div className='flex w-full flex-col'>
            <FormControl>
              <Input
                placeholder={props.placeholder}
                className='input-class'
                type={props.type || 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage className='form-message mt-2' />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput

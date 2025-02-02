import * as React from 'react';

import { useState } from 'react';
import clsx from 'clsx';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Label } from './label';

type IProps = {
  value?: string | number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'textarea';
  className?: string;
  label?: string;
  name?: string;
  required?: boolean;
  readOnly?: boolean;
  helperText?: string;
  error?: boolean;
  icon?: React.ReactNode;
  inlineLabel?: boolean;
  id?: string;
  rows?: number;
  cols?: number;
};

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, IProps>(
  ({
    value,
    onChange,
    onBlur,
    placeholder,
    type = 'text',
    className = '',
    label,
    name,
    required = false,
    readOnly = false,
    helperText = '',
    error = false,
    icon,
    inlineLabel,
    id,
    rows = 3,
    cols = 20,
  }: IProps) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const errorMessage = helperText && error && (
      <p className={`mt-1 text-sm text-red-500 ${className} `}>{helperText}</p>
    );

    if (type === 'textarea') {
      return (
        <div
          className={clsx(
            'flex w-full flex-col',
            inlineLabel && 'x-md:flex-row x-md:items-center x-md:gap-4',
            className,
          )}
        >
          {label && (
            <Label htmlFor={id} className="mb-2">
              {label}
            </Label>
          )}

          <div className={clsx(inlineLabel && 'md:w-full')}>
            <div
              className={clsx(
                'flex  w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ',
                inlineLabel && 'md:w-full',
                !readOnly && 'focus-within:border-primary',
                error ? '!border-red-500' : 'border-subtle',
              )}
            >
              <textarea
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                className={`w-full peer text-sm leading-6 text-dark outline-none placeholder:text-sm placeholder:text-subtle lg:text-base lg:placeholder:text-base `}
                name={name}
                required={required}
                readOnly={readOnly}
              />
            </div>

            {inlineLabel && errorMessage}
          </div>

          {!inlineLabel && errorMessage}
        </div>
      );
    }

    return (
      // <input
      //   type={type}
      //   className={cn(
      //     'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      //     className,
      //   )}
      // />

      <div
        className={clsx(
          'flex w-full flex-col',
          inlineLabel && 'x-md:flex-row x-md:items-center x-md:gap-4',
          className,
        )}
      >
        {label && (
          <Label htmlFor={id} className="mb-2">
            {label}
          </Label>
        )}

        <div className={clsx(inlineLabel && 'md:w-full')}>
          <div
            className={clsx(
              'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ',
              inlineLabel && 'md:w-full',
              !readOnly && 'focus-within:border-primary',
              error ? '!border-red-500' : 'border-subtle',
            )}
          >
            <input
              type={
                type === 'password'
                  ? passwordVisible
                    ? 'text'
                    : 'password'
                  : type
              }
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              className={`${type === 'password' ? 'w-[95%]' : 'w-full'}  peer text-sm leading-6 text-dark outline-none placeholder:text-sm placeholder:text-subtle lg:text-base lg:placeholder:text-base `}
              name={name}
              required={required}
              readOnly={readOnly}
            />

            {type === 'password' && (
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FiEye /> : <FiEyeOff />}
              </button>
            )}

            {icon && icon}
          </div>

          {inlineLabel && errorMessage}
        </div>

        {!inlineLabel && errorMessage}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };

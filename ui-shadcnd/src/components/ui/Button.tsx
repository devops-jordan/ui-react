import { cn } from '@/utils/cn'
import { cva } from 'class-variance-authority'
import React from 'react'

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | "secondary"
}

export const Button = ({ className, variant, ...props }: ButtonProps) => {
  return <button {...props} className={cn(buttonVariants({ variant }), className)} />
}

const buttonVariants = cva('py-2 px-4 rounded-md font-semibold hover:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-slate-100 text-black',
        secondary: 'bg-slate-800'
      },
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)

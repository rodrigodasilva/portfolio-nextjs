'use client'

import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/utils/classnames'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 text-sm font-medium text-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:bg-muted disabled:text-muted-foreground',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:opacity-90',
        secondary: 'bg-muted text-muted-foreground hover:opacity-90'
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-8',
        icon: 'h-9 w-9 rounded-full'
      },
      radius: {
        medium: 'rounded-md',
        full: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      radius: 'medium'
    }
  }
)

const Button = forwardRef(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component
        className={cn(buttonVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }

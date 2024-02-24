'use client'

import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/utils/classnames'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 text-sm font-medium text-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        'fill-primary': 'bg-primary text-primary-foreground hover:opacity-90',
        'fill-secondary':
          'bg-secondary text-secondary-foreground hover:opacity-90',
        'ghost-primary': 'bg-none hover:opacity-90 hover:bg-primary/20',
        'soft-neutral': 'text-foreground bg-foreground/5 hover:bg-foreground/10'
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-8',
        icon: 'h-9 w-9 rounded-md'
      },
      radius: {
        medium: 'rounded-md',
        full: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'fill-primary',
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

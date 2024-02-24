'use client'

import { cva } from 'class-variance-authority'

import { cn } from '@/utils/classnames'

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-5xl font-extrabold',
      h3: 'text-2xl font-bold',
      h4: 'text-xl font-bold',
      h6: 'text-[16px] font-medium',
      large: 'text-lg font-bold',
      body: 'text-sm leading-6 font-regular',
      'body-medium': 'text-sm leading-6 font-medium',
      'body-bold': 'text-sm leading-6 font-bold',
      detail: 'text-xs font-medium',
      list: 'text-base'
    }
  },
  defaultVariants: {
    variant: 'large'
  }
})

function Typography({ className, variant, as = 'p', children, ...props }) {
  const Component = as
  return (
    <Component
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    >
      {children}
    </Component>
  )
}

Typography.displayName = 'Typography'

export { Typography }

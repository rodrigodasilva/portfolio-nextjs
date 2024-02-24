'use client'

import { forwardRef } from 'react'

import { cn } from '@/utils/classnames'

const Separator = forwardRef(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => {
    const ariaOrientation = orientation === 'vertical' ? orientation : undefined
    const semanticProps = decorative
      ? { role: 'none' }
      : { 'aria-orientation': ariaOrientation, role: 'separator' }
    return (
      <div
        ref={ref}
        className={cn(
          'shrink-0 bg-border',
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
          className
        )}
        data-orientation={orientation}
        {...semanticProps}
        {...props}
      />
    )
  }
)
Separator.displayName = 'Separator'

export { Separator }

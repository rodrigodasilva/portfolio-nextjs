import { cn } from '@/utils/classnames'

import { IconLogo } from '../ui/icons'

export function Logo({ className }) {
  return (
    <div className={cn('flex gap-2 items-center text-primary', className)}>
      <IconLogo />
    </div>
  )
}

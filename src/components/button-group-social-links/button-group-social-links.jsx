import { cn } from '@/utils/classnames'

import { IconFacebook, IconInstagram, IconLinkedin } from '../ui/icons'

export function ButtonGroupSocialLinks({ className }) {
  return (
    <div
      className={cn(
        'flex gap-6 items-center text-muted-foreground bg-muted w-max p-2 rounded-md',
        className
      )}
    >
      <IconFacebook />
      <IconInstagram />
      <IconLinkedin />
    </div>
  )
}

'use client'

import { IconChevronUp } from '@/components/ui/icons'
import { cn } from '@/utils/classnames'

import { useScrollPosition } from '@/utils/hooks/use-scroll-position'

export function BackToTopButton() {
  const position = useScrollPosition()

  const showButton = position > 20
  const isPageEnd = position === 100

  const scrollToTop = () => {
    if (!showButton) return

    window?.scrollTo?.({
      top: 0,
      behavior: 'auto'
    })
  }

  return (
    <button
      type="button"
      className={cn(
        'bottom-4 right-4 md:right-[calc(50%-380px)] bg-background text-primary text-sm px-2 py-1 flex gap-1 items-center rounded-full shadow shadow-primary/60',
        {
          fixed: !!showButton,
          hidden: !showButton,
          'shadow-none': isPageEnd
        }
      )}
      onClick={scrollToTop}
    >
      <IconChevronUp />
      Voltar ao topo
    </button>
  )
}

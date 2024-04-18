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
        'bottom-4 right-4 md:right-[calc(50%-380px)] lg:right-[calc(50%-460px)] bg-muted text-muted-foreground text-sm px-2 py-1 flex items-center justify-center rounded-full shadow shadow-muted/60 w-10 h-10 hover:bg-muted/80',
        {
          fixed: !!showButton,
          hidden: !showButton,
          'shadow-none': isPageEnd
        }
      )}
      onClick={scrollToTop}
    >
      <IconChevronUp className="w-4 h-4" />
      {/* Voltar ao topo */}
    </button>
  )
}

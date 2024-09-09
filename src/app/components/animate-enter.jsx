'use client'

import { motion } from 'framer-motion'

import { cn } from '@/utils/classnames'

export function AnimateEnter({ className, delay, children }) {
  return (
    <motion.section
      className={cn(className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.section>
  )
}

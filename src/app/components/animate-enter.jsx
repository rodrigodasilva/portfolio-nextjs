'use client'

import { motion } from 'framer-motion'

import { cn } from '@/utils/classnames'

export function AnimateEnter({ className, delay, children, ...props }) {
  return (
    <motion.section
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

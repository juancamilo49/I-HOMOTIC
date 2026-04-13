import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

export default function PageWrapper({ children }: Props) {
  return (
    <motion.main
      role="main"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.main>
  )
}

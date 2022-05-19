import clsx from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, ...props }: CardProps) => (
  <div
    {...props}
    className={clsx(
      'overflow-hidden rounded-xl border border-gray-200 bg-white shadow',
      props.className
    )}
  >
    {children}
  </div>
)

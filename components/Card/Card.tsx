interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children, ...props }: CardProps) => (
  <div
    {...props}
    className="overflow-hidden bg-white border border-gray-200 shadow rounded-xl"
  >
    {children}
  </div>
)

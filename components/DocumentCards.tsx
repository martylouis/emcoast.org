import { DocumentCard } from './DocumentCard'

export interface Posts {
  id: string
  fields: {
    title?: string
    category: string
  }
}

interface IDocumentCardProps {
  posts: Posts[]
  category: string
}

export const DocumentCards = ({ posts, category }: IDocumentCardProps) => (
  <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
    {posts
      .filter((post) => post.fields.category === category)
      .map((post) => (
        <DocumentCard key={post.id} post={post} />
      ))}
  </div>
)

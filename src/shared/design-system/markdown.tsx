import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
  content: string
  className?: string
}

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <ReactMarkdown 
      className={className}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h2 className="mb-4 text-2xl md:text-3xl font-bold">{children}</h2>
        ),
        h2: ({ children }) => (
          <h3 className="mb-4 mt-8 text-xl md:text-2xl font-bold">{children}</h3>
        ),
        a: ({ href, children }) => (
          <a href={href} className="text-blue-500 hover:underline">
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 list-disc pl-6">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 list-decimal pl-6">{children}</ol>
        ),
        p: ({ children }) => (
          <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

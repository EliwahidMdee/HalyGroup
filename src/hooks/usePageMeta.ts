import { useEffect } from 'react'

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title

    const update = (selector: string, attribute: string, value: string) => {
      const element = document.head.querySelector<HTMLMetaElement>(selector)
      if (element) element.setAttribute(attribute, value)
    }

    update('meta[name="description"]', 'content', description)
    update('meta[property="og:title"]', 'content', title)
    update('meta[property="og:description"]', 'content', description)
  }, [description, title])
}

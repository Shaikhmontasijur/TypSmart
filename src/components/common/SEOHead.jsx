import { useEffect } from 'react'

export function SEOHead({
  title = 'TypeFlow — Master Your Keyboard',
  description = 'Master touch typing with focused practice, speed tests, and daily progress tracking.'
}) {
  useEffect(() => {
    document.title = title.includes('TypeFlow') ? title : `${title} — TypeFlow`

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', title)
    }

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) {
      ogDesc.setAttribute('content', description)
    }
  }, [title, description])

  return null
}

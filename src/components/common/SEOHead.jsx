import { useEffect } from 'react'

export function SEOHead({
  title = 'TypSmart — Master Your Keyboard',
  description = 'Master touch typing with focused practice, speed tests, and daily progress tracking.'
}) {
  useEffect(() => {
    document.title = title.includes('TypSmart') ? title : `${title} — TypSmart`

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]')

    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }

    metaDescription.setAttribute('content', description)

    // Canonical URL
    const canonicalUrl =
      window.location.origin +
      window.location.pathname

    let canonical = document.querySelector('link[rel="canonical"]')

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }

    canonical.setAttribute('href', canonicalUrl)

    // Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]')

    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }

    ogTitle.setAttribute('content', title)

    let ogDesc = document.querySelector('meta[property="og:description"]')

    if (!ogDesc) {
      ogDesc = document.createElement('meta')
      ogDesc.setAttribute('property', 'og:description')
      document.head.appendChild(ogDesc)
    }

    ogDesc.setAttribute('content', description)

    let ogUrl = document.querySelector('meta[property="og:url"]')

    if (!ogUrl) {
      ogUrl = document.createElement('meta')
      ogUrl.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrl)
    }

    ogUrl.setAttribute('content', canonicalUrl)

    // Twitter
    let twitterUrl = document.querySelector('meta[name="twitter:url"]')

    if (!twitterUrl) {
      twitterUrl = document.createElement('meta')
      twitterUrl.setAttribute('name', 'twitter:url')
      document.head.appendChild(twitterUrl)
    }

    twitterUrl.setAttribute('content', canonicalUrl)
  }, [title, description])

  return null
}
export async function shareProfile({ title, text, url = window.location.href }) {
  if (navigator.share) {
    try {
      return await navigator.share({ title, text, url })
    } catch (error) {
      if (error.name === 'AbortError') throw error
    }
  }
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(url)
      return 'copied'
    } catch {
      return false
    }
  }
  return false
}

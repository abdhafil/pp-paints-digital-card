import business from '../../data/business.js'
import IconButton from '../common/IconButton.jsx'
import SectionTitle from '../common/SectionTitle.jsx'
import { Camera, ExternalLink, UsersRound } from 'lucide-react'

const labels = { instagram: 'Instagram', facebook: 'Facebook', justdial: 'Justdial' }

export default function SocialLinks() {
  const icons = { instagram: Camera, facebook: UsersRound, justdial: ExternalLink }
  return <section aria-labelledby="social-title" className="space-y-4"><SectionTitle><span id="social-title">Find us online</span></SectionTitle><nav aria-label="Business profiles" className="flex flex-wrap gap-2">{Object.entries(business.social).map(([key, url]) => { const Icon = icons[key]; return <IconButton key={key} label={labels[key]} href={url} target="_blank" rel="noreferrer" className="gap-2"><Icon size={16} />{labels[key]}</IconButton> })}</nav></section>
}

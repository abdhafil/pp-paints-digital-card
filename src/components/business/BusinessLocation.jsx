import business from '../../data/business.js'
import Button from '../common/Button.jsx'
import SectionTitle from '../common/SectionTitle.jsx'
import { ArrowUpRight, MapPin } from 'lucide-react'

export default function BusinessLocation() {
  return <section aria-labelledby="location-title" className="grid gap-8 rounded-[2rem] bg-[#F3F4F6] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#F97316]">Come say hello</p><SectionTitle><span id="location-title" className="text-3xl tracking-tight text-[#17283F]">Find us in Kalladikode</span></SectionTitle><p className="mt-3 flex items-center gap-2 text-[#66717E]"><MapPin size={17} className="shrink-0 text-[#F97316]" />{business.location}</p></div><Button href={business.maps} target="_blank" rel="noreferrer" className="gap-3 rounded-full bg-[#17283F] px-7 text-white hover:bg-slate-700">Get directions <ArrowUpRight size={17} /></Button></section>
}

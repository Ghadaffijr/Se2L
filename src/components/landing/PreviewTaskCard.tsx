type PreviewTaskCardProps = {
  label: string
  labelColourClass: string
  title: string
  description: string
}

function PreviewTaskCard({
  label,
  labelColourClass,
  title,
  description,
}: PreviewTaskCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 p-4">
      <p
        className={`text-xs font-bold uppercase tracking-wide ${labelColourClass}`}
      >
        {label}
      </p>

      <h3 className="mt-1 font-bold">{title}</h3>

      <p className="mt-1 text-sm text-slate-600">{description}</p>
    </article>
  )
}

export default PreviewTaskCard
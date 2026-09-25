import { useState } from 'react'
import { ImageIcon, PlayCircle } from 'lucide-react'

/**
 * Renders a real screenshot/video when `src`/`videoSrc` is provided.
 * Falls back to a labeled placeholder box when no asset is given yet,
 * so remaining slots stay easy to spot and swap in later.
 */
export default function Placeholder({
  label,
  path,
  aspect = 'aspect-[16/10]',
  variant = 'image', // 'image' | 'video'
  className = '',
  src,
  videoSrc,
  alt,
}) {
  const [videoPlaying, setVideoPlaying] = useState(false)
  const Icon = variant === 'video' ? PlayCircle : ImageIcon

  if (variant === 'video' && videoSrc) {
    return (
      <div
        className={`relative w-full ${aspect} rounded-xl overflow-hidden border border-navy-200 dark:border-white/10 bg-navy-950 ${className}`}
      >
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          controls={videoPlaying}
          preload="metadata"
          onPlay={() => setVideoPlaying(true)}
        />
        {!videoPlaying && (
          <button
            type="button"
            onClick={(e) => {
              const video = e.currentTarget.parentElement.querySelector('video')
              setVideoPlaying(true)
              requestAnimationFrame(() => video?.play())
            }}
            aria-label="Play demo video"
            className="absolute inset-0 flex items-center justify-center bg-navy-950/30 hover:bg-navy-950/40 transition-colors"
          >
            <span className="h-16 w-16 rounded-full bg-white/95 flex items-center justify-center shadow-card">
              <PlayCircle className="h-9 w-9 text-sky-500" strokeWidth={1.5} />
            </span>
          </button>
        )}
      </div>
    )
  }

  if (variant === 'image' && src) {
    return (
      <div
        className={`relative w-full ${aspect} rounded-xl overflow-hidden border border-navy-100 dark:border-white/10 bg-white dark:bg-navy-900 ${className}`}
      >
        <img src={src} alt={alt || label} className="h-full w-full object-cover object-top" />
      </div>
    )
  }

  return (
    <div
      className={`relative w-full ${aspect} rounded-xl border border-dashed border-navy-200 dark:border-white/15 bg-navy-50/70 dark:bg-white/5 flex flex-col items-center justify-center gap-3 overflow-hidden ${className}`}
      role="img"
      aria-label={label}
    >
      <Icon
        className={variant === 'video' ? 'h-12 w-12 text-sky-500' : 'h-8 w-8 text-navy-300 dark:text-navy-500'}
        strokeWidth={1.5}
      />
      <div className="px-6 text-center">
        <p className="text-xs font-medium tracking-wide text-navy-400 dark:text-navy-300">{label}</p>
        {path && <p className="mt-1 text-[11px] text-navy-300 dark:text-navy-500">Replace with: {path}</p>}
      </div>
    </div>
  )
}

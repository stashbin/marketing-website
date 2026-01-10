const features = [
  {
    icon: ShareIcon,
    title: 'Share Extension',
    description: 'Save content from Safari or any app that supports sharing. Just tap share, select StashBin, and you\'re done.',
  },
  {
    icon: PreviewIcon,
    title: 'Rich Link Previews',
    description: 'Automatically get titles, descriptions, and preview images for every link you save. See what you saved at a glance.',
  },
  {
    icon: CategoryIcon,
    title: 'Categories',
    description: 'Organize saved items with custom categories. Create your own system that works for you.',
  },
  {
    icon: CloudIcon,
    title: 'iCloud Sync',
    description: 'Optional iCloud sync keeps everything up to date across all your Apple devices. Your data stays yours.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-magpie-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-magpie-black mb-4">
            Everything you need to{' '}
            <span className="gradient-text">save smarter</span>
          </h2>
          <p className="text-lg text-magpie-dark max-w-2xl mx-auto">
            StashBin is a simple and powerful way to save content you want to revisit later.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="gradient-border rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow bg-magpie-white"
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-magpie-black mb-2">
                {feature.title}
              </h3>
              <p className="text-magpie-dark">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  )
}

function PreviewIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function CategoryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  )
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  )
}

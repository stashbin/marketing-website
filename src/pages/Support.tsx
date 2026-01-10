export default function Support() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-magpie-black mb-8">Support</h1>
        
        <div className="prose prose-lg text-magpie-dark space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-magpie-black">Need Help?</h2>
            <p>
              We're here to help you get the most out of StashBin. Check out the frequently 
              asked questions below to find answers to common questions.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-magpie-black">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="gradient-border rounded-xl p-6 bg-magpie-white">
                <h3 className="font-semibold text-magpie-black mb-2">How do I save a link?</h3>
                <p className="text-magpie-dark">
                  You can save links using the Share Extension. Simply tap the share button in Safari 
                  or any app that supports sharing, then select StashBin from the share sheet.
                </p>
              </div>
              
              <div className="gradient-border rounded-xl p-6 bg-magpie-white">
                <h3 className="font-semibold text-magpie-black mb-2">Is my data synced across devices?</h3>
                <p className="text-magpie-dark">
                  Yes! If you enable iCloud sync in the app settings, your saved links and categories 
                  will be automatically synced across all your Apple devices signed into the same iCloud account.
                </p>
              </div>
              
              <div className="gradient-border rounded-xl p-6 bg-magpie-white">
                <h3 className="font-semibold text-magpie-black mb-2">How do I organize my saved links?</h3>
                <p className="text-magpie-dark">
                  You can create custom categories to organize your links. Tap the category option when 
                  saving a link, or edit a saved link to assign it to a category.
                </p>
              </div>
              
              <div className="gradient-border rounded-xl p-6 bg-magpie-white">
                <h3 className="font-semibold text-magpie-black mb-2">Is StashBin free?</h3>
                <p className="text-magpie-dark">
                  StashBin is free to download with up to 10 saved items. To unlock unlimited saves, 
                  you can upgrade with a one-time purchase of $9.99 — no subscriptions, yours forever.
                </p>
              </div>
              
              <div className="gradient-border rounded-xl p-6 bg-magpie-white">
                <h3 className="font-semibold text-magpie-black mb-2">Where is my data stored?</h3>
                <p className="text-magpie-dark">
                  Your data is stored locally on your device. If you enable iCloud sync, it's also 
                  stored in your personal iCloud account. We never have access to your data.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

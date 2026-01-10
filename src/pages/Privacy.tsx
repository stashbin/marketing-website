export default function Privacy() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-magpie-black mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg text-magpie-dark space-y-6">
          <p className="text-magpie-dark">
            <strong>Last updated:</strong> January 10, 2026
          </p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-magpie-black">Overview</h2>
            <p>
              StashBin is designed with your privacy in mind. We believe that your saved links 
              and content are personal, and we've built the app to keep them that way.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-magpie-black">Data Collection</h2>
            <p>
              <strong>StashBin does not collect any personal data.</strong> All the content you 
              save, including links, articles, and categories, is stored locally on your device 
              or in your personal iCloud account if you choose to enable iCloud sync.
            </p>
            <p>
              We do not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Collect or store your personal information</li>
              <li>Track your browsing history</li>
              <li>Access or analyze the content you save</li>
              <li>Share any data with third parties</li>
              <li>Use analytics or tracking tools</li>
              <li>Display advertisements</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-magpie-black">Data Storage</h2>
            <p>
              Your data is stored in two possible locations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Local Storage:</strong> All your saved items are stored locally on your 
                device using secure on-device storage.
              </li>
              <li>
                <strong>iCloud (Optional):</strong> If you enable iCloud sync, your data is 
                synced through your personal iCloud account. This data is encrypted and managed 
                by Apple according to their privacy policies. We never have access to your 
                iCloud data.
              </li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-magpie-black">Link Previews</h2>
            <p>
              When you save a link, StashBin fetches publicly available metadata (title, 
              description, and preview image) directly from the website to create rich link 
              previews. This is done directly from your device and does not go through any 
              of our servers.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-magpie-black">Share Extension</h2>
            <p>
              The StashBin Share Extension allows you to save content from Safari and other 
              apps. The extension only receives the shared content (such as a URL) and saves 
              it locally. It does not access any other data from the sharing app.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-magpie-black">Children's Privacy</h2>
            <p>
              StashBin does not knowingly collect any information from children. The app is 
              suitable for users of all ages as it does not collect any personal information.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-magpie-black">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted 
              on this page with an updated revision date. We encourage you to review this 
              policy periodically.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-magpie-black">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or StashBin's privacy 
              practices, please contact us at:{' '}
              <a 
                href="mailto:support@stashbin.app" 
                className="text-magpie-teal hover:text-magpie-cyan transition-colors"
              >
                support@stashbin.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

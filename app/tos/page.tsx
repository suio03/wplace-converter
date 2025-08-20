import Link from "next/link"

export const runtime = 'edge'

const TOS = () => {
    return (
        <div className="mt-24">
            <main className="max-w-4xl mx-auto">
                <div className="p-8">
                    <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 mr-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Back to Converter
                    </Link>
                    
                    <h1 className="text-4xl font-bold mb-2 text-gray-800">
                        Terms of Service
                    </h1>
                    <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 mb-4">
                                By accessing and using the Wplace Pixel Art Converter service ("Service"), you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Service Description</h2>
                            <p className="text-gray-600 mb-4">
                                Wplace Pixel Art Converter is a free web-based tool that converts images into pixel art optimized for Wplace.live's collaborative canvas. Our service includes:
                            </p>
                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                <li>Image upload and processing capabilities</li>
                                <li>Automatic color conversion to Wplace's 64-color palette</li>
                                <li>Grid size customization (32×32 to 512×512)</li>
                                <li>Free and premium color identification</li>
                                <li>High-resolution image export</li>
                                <li>Fullscreen viewing with zoom and pan</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Accounts</h2>
                            <p className="text-gray-600 mb-4">
                                No user account is required to use our service. All processing is performed locally in your browser, ensuring privacy and security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Fees and Payment</h2>
                            <p className="text-gray-600 mb-4">
                                Our service is completely free to use. There are no subscription fees, usage limits, or hidden charges.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Acceptable Use</h2>
                            <p className="text-gray-600 mb-4">
                                You agree to use our service responsibly and legally. You may not:
                            </p>
                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                <li>Upload images containing illegal, harmful, or offensive content</li>
                                <li>Upload copyrighted material without proper authorization</li>
                                <li>Attempt to reverse engineer or hack our service</li>
                                <li>Use automated tools to overload our servers</li>
                                <li>Violate any applicable laws or regulations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Intellectual Property</h2>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Service Ownership</h3>
                                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                    <li>We retain all rights to our converter software and website</li>
                                    <li>Wplace color palette data is used for compatibility purposes only</li>
                                    <li>Our service name and branding are protected</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Your Content Rights</h3>
                                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                    <li>You retain full ownership of images you upload</li>
                                    <li>We do not store, access, or claim rights to your images</li>
                                    <li>You are responsible for ensuring you have rights to uploaded content</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Privacy and Data</h2>
                            <p className="text-gray-600 mb-4">
                                Your privacy is important to us. All image processing occurs locally in your browser - your images never leave your device or reach our servers. Please review our Privacy Policy for detailed information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Service Limitations</h2>
                            <p className="text-gray-600 mb-4">
                                Our service is provided "as is" without warranties. We cannot guarantee:
                            </p>
                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                <li>100% uptime or availability</li>
                                <li>Perfect color conversion accuracy</li>
                                <li>Compatibility with all image formats</li>
                                <li>Performance on all devices or browsers</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Limitation of Liability</h2>
                            <p className="text-gray-600 mb-4">
                                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Service Updates</h2>
                            <p className="text-gray-600 mb-4">
                                We may update our service and these terms at any time. Continued use of the service constitutes acceptance of updated terms. We will notify users of significant changes when possible.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Termination</h2>
                            <p className="text-gray-600 mb-4">
                                Since no accounts are required, you may simply stop using our service at any time. We reserve the right to restrict access to users who violate these terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Contact Information</h2>
                            <p className="text-gray-600 mb-4">
                                If you have questions about these Terms of Service, please contact us at: [YOUR-EMAIL@DOMAIN.COM]
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Governing Law</h2>
                            <p className="text-gray-600 mb-4">
                                These terms shall be governed by and construed in accordance with applicable laws. Any disputes will be resolved through appropriate legal channels.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default TOS

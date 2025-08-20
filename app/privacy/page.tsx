import Link from "next/link";

export const runtime = 'edge'

export default function Privacy() {
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
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                            <p className="text-gray-600 mb-4">
                                This Privacy Policy describes how Wplace Pixel Art Converter ("we," "our," or "us") handles your information when you use our web-based image conversion service. We are committed to protecting your privacy and ensuring transparency about our data practices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
                            
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-700 mb-3">Personal Data</h3>
                                <p className="text-gray-600 mb-3">
                                    <strong>We do not collect any personal data.</strong> Our service operates entirely in your browser without requiring:
                                </p>
                                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                    <li>User accounts or registration</li>
                                    <li>Email addresses or contact information</li>
                                    <li>Names, addresses, or demographic data</li>
                                    <li>Payment information (service is free)</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-700 mb-3">Image Data</h3>
                                <p className="text-gray-600 mb-3">
                                    <strong>Your images never leave your device.</strong> All image processing occurs locally in your browser:
                                </p>
                                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                    <li>Images are processed entirely on your device</li>
                                    <li>No images are uploaded to our servers</li>
                                    <li>No image data is stored, cached, or transmitted</li>
                                    <li>We cannot access or view your uploaded images</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-3">Technical Data</h3>
                                <p className="text-gray-600 mb-3">
                                    We may collect minimal technical data for service operation:
                                </p>
                                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                    <li>Basic server logs (IP address, timestamp, requested page)</li>
                                    <li>Browser type and version (for compatibility)</li>
                                    <li>Error logs (for service improvement)</li>
                                    <li>General usage statistics (page views, not linked to individuals)</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Information</h2>
                            <p className="text-gray-600 mb-4">
                                Since we collect minimal data, our usage is limited to:
                            </p>
                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                <li>Providing and maintaining our conversion service</li>
                                <li>Monitoring service performance and uptime</li>
                                <li>Identifying and fixing technical issues</li>
                                <li>Protecting against abuse and security threats</li>
                                <li>Improving service functionality and user experience</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Storage and Retention</h2>
                            <p className="text-gray-600 mb-4">
                                Our privacy-first approach means minimal data storage:
                            </p>
                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                <li><strong>Images:</strong> Never stored - processed locally and discarded</li>
                                <li><strong>Server logs:</strong> Retained for 30 days maximum for security purposes</li>
                                <li><strong>Error logs:</strong> Retained for 90 days for debugging purposes</li>
                                <li><strong>Usage statistics:</strong> Aggregated data retained indefinitely (non-personal)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Sharing and Disclosure</h2>
                            <p className="text-gray-600 mb-4">
                                We do not sell, trade, or share your data with third parties, except:
                            </p>
                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                <li><strong>Legal requirements:</strong> When required by law or to protect rights</li>
                                <li><strong>Service providers:</strong> Minimal technical data with hosting providers</li>
                                <li><strong>Security purposes:</strong> To prevent fraud, abuse, or security threats</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookies and Tracking</h2>
                            <p className="text-gray-600 mb-4">
                                Our service is designed to be privacy-friendly:
                            </p>
                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                <li>We do not use tracking cookies or analytics</li>
                                <li>No third-party tracking scripts or pixels</li>
                                <li>Local storage only used for temporary processing</li>
                                <li>No user profiling or behavioral tracking</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Your Privacy Rights</h2>
                            <p className="text-gray-600 mb-4">
                                Since we collect minimal data, your rights are naturally protected:
                            </p>
                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                <li><strong>Access:</strong> No personal data stored to access</li>
                                <li><strong>Deletion:</strong> Images auto-deleted after processing</li>
                                <li><strong>Portability:</strong> You retain full ownership of your images</li>
                                <li><strong>Correction:</strong> No personal profiles to correct</li>
                                <li><strong>Objection:</strong> Simply stop using the service</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Children's Privacy</h2>
                            <p className="text-gray-600 mb-4">
                                Our service is safe for all ages. We do not knowingly collect personal information from children under 13. Since no personal data is collected from any users, children's privacy is inherently protected.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Security Measures</h2>
                            <p className="text-gray-600 mb-4">
                                We implement security measures to protect our service:
                            </p>
                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                <li>HTTPS encryption for all communications</li>
                                <li>Secure hosting infrastructure</li>
                                <li>Regular security updates and monitoring</li>
                                <li>No sensitive data storage reduces security risks</li>
                                <li>Client-side processing eliminates data transmission risks</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. International Users</h2>
                            <p className="text-gray-600 mb-4">
                                Our service is available globally. Since processing occurs locally in your browser, your images never cross international borders. Server logs may be processed in various jurisdictions where our hosting infrastructure operates.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Third-Party Services</h2>
                            <p className="text-gray-600 mb-4">
                                Our service operates independently:
                            </p>
                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                <li>No third-party analytics or tracking services</li>
                                <li>No social media integrations</li>
                                <li>No advertising networks</li>
                                <li>Wplace color palette used for compatibility only</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Policy Updates</h2>
                            <p className="text-gray-600 mb-4">
                                We may update this Privacy Policy to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised date. Continued use of our service after changes constitutes acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Contact Information</h2>
                            <p className="text-gray-600 mb-4">
                                If you have questions about this Privacy Policy or our privacy practices, please contact us at: [YOUR-EMAIL@DOMAIN.COM]
                            </p>
                        </section>

                        <section className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-green-800 mb-4">🔒 Privacy Summary</h2>
                            <p className="text-green-700 mb-3 font-semibold">
                                Your privacy is our priority. Here's what makes our service privacy-friendly:
                            </p>
                            <ul className="list-disc ml-6 text-green-700 space-y-2">
                                <li>✅ No user accounts or personal data collection</li>
                                <li>✅ Images processed locally in your browser</li>
                                <li>✅ No image uploads or server storage</li>
                                <li>✅ No tracking, cookies, or analytics</li>
                                <li>✅ Complete user control over all data</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

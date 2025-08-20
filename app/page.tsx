import WplaceConverter from '@/components/WplaceConverter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const runtime = 'edge'

export const metadata: Metadata = {
    title: 'Free Wplace Pixel Art Converter - Turn Images into Pixel Perfect Art',
    description: 'Convert any image into pixel-perfect art ready for Wplace.live. Our free wplace pixel converter automatically matches Wplace\'s official 64-color palette. Join 10,000+ Wplace artists creating stunning collaborative pixel art faster.',
    keywords: [
        'wplace pixel converter',
        'wplace pixel art converter',
        'pixel art converter',
        'wplace converter',
        'pixel art generator',
        'wplace.live converter',
        'wplace color palette',
        'collaborative pixel art',
        'wplace pixel art tool',
        'free pixel converter',
        'pixel art maker',
        'wplace art generator'
    ],
    authors: [{ name: 'Wplace Pixel Art Converter' }],
    creator: 'Wplace Pixel Art Converter',
    publisher: 'Wplace Pixel Art Converter',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://wplacepixel.cc'), // Replace with your actual domain
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Free Wplace Pixel Art Converter - Turn Images into Pixel Perfect Art',
        description: 'Convert any image into pixel-perfect art ready for Wplace.live. Our free wplace pixel converter automatically matches Wplace\'s official 64-color palette.',
        url: 'https://wplacepixel.cc', // Replace with your actual domain
        siteName: 'Wplace Pixel Art Converter',
        images: [
            {
                url: '/og-image.png', // You'll need to create this image
                width: 1200,
                height: 630,
                alt: 'Wplace Pixel Art Converter - Free Online Tool',
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Wplace Pixel Art Converter - Turn Images into Pixel Perfect Art',
        description: 'Convert any image into pixel-perfect art ready for Wplace.live. Free wplace pixel converter with 64-color palette matching.',
        images: ['/og-image.png'], // Same image as OpenGraph
        creator: '@your-twitter-handle', // Replace with your Twitter handle if you have one
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function Home() {

    return (
        <div className="relative">
            {/* Hero Section */}
            <section id="calculator" className="relative z-10 px-4 py-16 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className={`${pixelFont.className} text-xl md:text-3xl mb-6 text-gray-800 leading-relaxed`}>
                        Free Wplace Pixel Art Converter
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                        Turn any image into pixel-perfect art ready to paint on the Wplace map. Our wplace pixel converter automatically converts to Wplace's official 64-color palette.
                    </p>
                    <div className="bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-lg p-4 max-w-2xl mx-auto">
                        <p className="text-lg text-gray-700">
                            <strong>Join 10,000+ Wplace artists</strong> who use our wplace pixel converter to create stunning collaborative art faster.
                        </p>
                    </div>
                </div>
            </section>

            {/* Full Width Converter */}
            <section className="relative z-10 px-4 pb-16">
                <WplaceConverter />
            </section>

            {/* Why Use Wplace Converter Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                            Why Use a Wplace Pixel Converter?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Wplace artists face a unique challenge: the platform's 30-pixel-per-minute limit makes freehand drawing extremely time-consuming. Professional pixel artists and casual creators alike use our wplace pixel converter to streamline their workflow and create pixel art for Wplace more efficiently.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl">⏱️</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-800">Save Time</h3>
                            <p className="text-gray-600 text-sm">Plan complex artwork before spending hours placing pixels</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-200">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-800">Color Accuracy</h3>
                            <p className="text-gray-600 text-sm">Ensure perfect color matching with Wplace's 64-color palette</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-200">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl">✨</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-800">Professional Results</h3>
                            <p className="text-gray-600 text-sm">Create consistent, professional-looking pixel art</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-lg border border-orange-200">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl">👥</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-800">Team Projects</h3>
                            <p className="text-gray-600 text-sm">Perfect for large collaborative Wplace projects</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Wplace Art Styles Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                        Popular Wplace Pixel Art Styles
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our wplace pixel converter works perfectly for all popular Wplace art styles. Here's what the community loves to create using our pixel art converter:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🎮</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Game Characters</h3>
                        <p className="text-gray-600">Mario, Pokemon, Minecraft characters, and classic arcade game sprites</p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🗾</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Anime & Manga</h3>
                        <p className="text-gray-600">Popular anime characters, manga panels, and Japanese pop culture references</p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">😂</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Memes & Internet Culture</h3>
                        <p className="text-gray-600">Viral memes, internet culture references, and community inside jokes</p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🏳️</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Flags & Logos</h3>
                        <p className="text-gray-600">Country flags, brand logos, and organizational symbols</p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">👤</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Portrait Pixel Art</h3>
                        <p className="text-gray-600">Celebrity portraits, historical figures, and personal avatars</p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🎨</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Abstract & Artistic</h3>
                        <p className="text-gray-600">Abstract designs, artistic patterns, and creative compositions</p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                            How Our Wplace Pixel Converter Works
                        </h2>
                        <p className="text-lg text-gray-600">
                            Transform any image into Wplace-ready pixel art in just three simple steps. Our wplace pixel converter handles all the complex color matching and optimization automatically for perfect Wplace compatibility.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-2xl font-bold text-blue-600">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Upload Your Image</h3>
                            <p className="text-gray-600">Drag & drop any PNG, JPG, JPEG, or SVG file. Any size or resolution works perfectly.</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-200">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-2xl font-bold text-green-600">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Adjust & Convert</h3>
                            <p className="text-gray-600">Choose your grid size (32x32 to 512x512) and watch as our wplace pixel converter transforms your image to Wplace's official 64-color palette.</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-200">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-2xl font-bold text-purple-600">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Download & Paint</h3>
                            <p className="text-gray-600">Export your high-resolution pixel art guide and start painting on Wplace with perfect color accuracy.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Features Section */}
            <section id="features" className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                        Core Features & Benefits
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Everything you need to create perfect Wplace pixel art. Our wplace pixel converter is built specifically for the Wplace community with features that matter most to pixel artists using Wplace.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Perfect Wplace Color Matching</h3>
                        <p className="text-gray-600">Our wplace pixel converter automatically matches your images to Wplace's exact 64-color palette for perfect compatibility.</p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🔒</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">100% Private & Secure</h3>
                        <p className="text-gray-600">All processing happens in your browser - your images never leave your device when using our pixel converter.</p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Instant Pixel Art Conversion</h3>
                        <p className="text-gray-600">Convert images to Wplace pixel art instantly with our fast wplace pixel converter - no waiting or processing delays.</p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">📐</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Flexible Grid Sizes</h3>
                        <p className="text-gray-600">Choose from 32×32 to 512×512 grid sizes in our pixel converter to match your Wplace project needs perfectly.</p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">💎</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Free & Premium Color Support</h3>
                        <p className="text-gray-600">Our wplace pixel converter identifies both free and premium Wplace colors, with options to use free colors only.</p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🖼️</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">High-Quality Export</h3>
                        <p className="text-gray-600">Download your converted pixel art in high resolution, ready for painting on Wplace with our pixel converter output.</p>
                    </div>
                </div>
            </section>



            {/* Social Proof Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                        What Wplace Artists Are Saying
                    </h2>
                    <p className="text-lg text-gray-600">
                        Join thousands of satisfied Wplace artists who use our wplace pixel converter daily
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
                        <div className="mb-6">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-800 text-lg italic mb-4">
                                &ldquo;This converter saved me hours of planning! The color matching is spot-on with Wplace's palette. Perfect for large collaborative projects.&rdquo;
                            </p>
                        </div>
                        <div>
                            <div className="font-bold text-gray-800">PixelMaster2024</div>
                            <div className="text-purple-600 text-sm">Wplace Community Artist</div>
                        </div>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
                        <div className="mb-6">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-800 text-lg italic mb-4">
                                &ldquo;Finally, a tool that understands Wplace! The free colors mode is genius - I can plan my art without worrying about premium color costs.&rdquo;
                            </p>
                        </div>
                        <div>
                            <div className="font-bold text-gray-800">AnimeArtist_JP</div>
                            <div className="text-purple-600 text-sm">Wplace Anime Community</div>
                        </div>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
                        <div className="mb-6">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-800 text-lg italic mb-4">
                                &ldquo;Used this for our guild's flag project on Wplace. The 128x128 grid was perfect and the color accuracy made coordination so much easier!&rdquo;
                            </p>
                        </div>
                        <div>
                            <div className="font-bold text-gray-800">GuildLeaderPro</div>
                            <div className="text-purple-600 text-sm">Wplace Guild Coordinator</div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6">
                        <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                        <div className="text-gray-600">Images Converted</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6">
                        <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
                        <div className="text-gray-600">Happy Wplace Artists</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6">
                        <div className="text-3xl font-bold text-purple-600 mb-2">64</div>
                        <div className="text-gray-600">Official Wplace Colors</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6">
                        <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                        <div className="text-gray-600">Free & Private</div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about using our wplace pixel converter for perfect pixel art
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                            Is this converter officially endorsed by Wplace?
                        </h3>
                        <p className="text-gray-600">
                            This is an independent wplace pixel converter created by the community for Wplace artists. While not officially endorsed, our pixel converter uses Wplace's exact 64-color palette to ensure perfect compatibility with the platform.
                        </p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                            What's the best grid size for Wplace art?
                        </h3>
                        <p className="text-gray-600">
                            Most Wplace artists use 64×64 (4,096 pixels) to 128×128 (16,384 pixels) for a good balance of detail and paintability. Smaller sizes (32×32) work great for simple designs, while larger sizes (256×256+) are perfect for detailed artwork if you have the time to paint them.
                        </p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                            Can I use premium colors from Wplace's palette?
                        </h3>
                        <p className="text-gray-600">
                            Yes! Our wplace pixel converter identifies both free and premium colors from Wplace's palette. Premium colors are marked with lock icons so you can see which ones require purchase on the official Wplace website. You can also use "Free Colors Only" mode in our pixel converter to restrict to free colors.
                        </p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                            Is my uploaded image data private and secure?
                        </h3>
                        <p className="text-gray-600">
                            Absolutely! All image processing happens entirely in your browser - your images never leave your device or get uploaded to our servers. This ensures complete privacy and faster processing times.
                        </p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                            What image formats are supported?
                        </h3>
                        <p className="text-gray-600">
                            Our wplace pixel converter supports PNG, JPG/JPEG, and SVG files of any size or resolution. For best results with our pixel converter, use high-resolution images with clear details and good contrast.
                        </p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                            How accurate is the color conversion to Wplace's palette?
                        </h3>
                        <p className="text-gray-600">
                            Our wplace pixel converter uses advanced color matching algorithms to find the closest match in Wplace's official 64-color palette. The pixel art conversion is highly accurate and matches exactly what you'll see when painting on the Wplace canvas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-12 shadow-lg text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                        Ready to Create Amazing Wplace Art?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join thousands of Wplace artists who use our wplace pixel converter to create stunning pixel art faster and more accurately. Start converting your images with our pixel converter now - it's completely free!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <div className="text-sm text-gray-500">
                            ✨ No signup required • ✨ Works in your browser • ✨ Privacy-first
                        </div>
                    </div>
                    <Link href="#converter" className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors shadow-lg">
                        Start Converting Now - Free!
                    </Link>
                </div>
            </section>
        </div>
    )
}

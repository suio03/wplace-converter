
import Logo from '@/public/icon.svg'
import Image from 'next/image'
import Link from 'next/link';
import { Press_Start_2P } from 'next/font/google'

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})
export default function Footer() {

  return (
    <footer className="relative z-10 w-full mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src={Logo} alt="Wplace Pixel Art Converter" width={32} height={32} />
                <h3 className={`text-sm font-bold text-gray-800 ${pixelFont.className}`}>Wplace Pixel Art Converter</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Transform any image into pixel-perfect art ready for Wplace.live's collaborative canvas. Free, private, and optimized for Wplace's official 64-color palette.
              </p>
            </div>

            {/* <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4">Tools</h4>
              <ul className="space-y-2">
                <li><a href="#calculator" className="text-gray-600 hover:text-purple-600 transition-colors">Crop Calculator</a></li>
                <li><a href="#trackers" className="text-gray-600 hover:text-purple-600 transition-colors">Live Trackers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">WFL Trading</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Growth Timer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-600 hover:text-purple-600 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Bug Reports</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Feature Requests</a></li>
              </ul>
            </div> */}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Wplace Pixel Art Converter. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors">Privacy Policy</Link>
              <Link href="/tos" className="text-gray-600 hover:text-purple-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
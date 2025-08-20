import { Press_Start_2P } from 'next/font/google'

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})
import Logo from '@/public/icon.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
    return (
        <header className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <Image src={Logo} alt="Wplace Pixel Art Converter" width={32} height={32} />
                            <p className={`text-sm font-bold text-gray-800 ${pixelFont.className}`}>Wplace Pixel Art Converter</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
} 
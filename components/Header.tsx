'use client'

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
                            <h1 className="text-xl font-bold text-gray-800">Wplace Pixel Art Converter</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
} 
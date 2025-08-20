
import type { ReactNode } from 'react'
import '@/app/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Analytics from '@/components/analytics'



export default async function DashboardLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    return (
        <html lang="en">
            <Analytics />
            <body className="font-sans antialiased text-gray-800 tracking-tight">
                {/* Beautiful gradient background */}
                <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
                </div>

                    <div className="min-h-screen flex flex-col">
                        <Header />
                        <main className="flex-1 w-full">
                            {children}
                        </main>
                        <Footer />
                    </div>
            </body>
        </html>
    )
}

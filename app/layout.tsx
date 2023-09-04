import './globals.css'
import PageNavs from "@/components/pageNavs";
import Contact from "@/components/contact";
import localFont from '@next/font/local'

export const metadata = {
    title: "Qinxiin",
    description: "Sharon's personal website",
}

const unbounded = localFont({
    src: [
        {
            path: '../public/fonts/Unbounded-Blond.woff2',
            weight: '400'
        },
        {
            path: '../public/fonts/Unbounded-Bold.woff2',
            weight: '700'
        }
    ],
    variable: '--font-unbounded'
})

const juliette = localFont({
    src: [
        {
            path: '../public/fonts/Juliette-Regular.otf',
            weight: '400'
        },
    ],
    variable: '--font-juliette'
})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${unbounded.variable} ${juliette.variable} font-sans`}>
        <body className={'bg-white font-sans flex flex-col'}>
        <header className="z-50">
            <div className="flex flex-row justify-center bg-white">
                <PageNavs/>
            </div>
        </header>
        <div className={"flex flex-row justify-center"}>
            {children}
        </div>
        <footer id={'contact'} className={'w-full'}>
            <Contact/>
        </footer>
        </body>
        </html>
    )
}

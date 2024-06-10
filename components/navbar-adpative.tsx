/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jerjLAadat0
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export function NavbarAdpative() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white shadow-xl">
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
          <Package2Icon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <form className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Input
            className="pl-10 pr-4 py-2 rounded-md bg-gr focus:outline-none focus:ring-1 focus:ring-gray-500 dark:focus:ring-gray-400 w-full sm:w-[300px] md:w-[200px] lg:w-[300px]"
            placeholder="Search products..."
            type="search"
          />
        </form>
      </div>
      <nav className="hidden md:flex items-center gap-4">
        <Link
          className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
          href="#"
        >
          Products
        </Link>
        <Link
          className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
          href="#"
        >
          Market
        </Link>
        <Link
          className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
          href="#"
        >
          About
        </Link>
        <Link
          className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors bg-green-500"
          href="/add"
        >
          add product
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col gap-4 p-4">
            <Link
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              href="#"
            >
              Products
            </Link>
            <Link
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              href="#"
            >
              Market
            </Link>
            <Link
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              href="#"
            >
              About
            </Link>
            <Link
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              href="#"
            >
              Sale
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

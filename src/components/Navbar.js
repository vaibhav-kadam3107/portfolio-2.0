import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import flag from '../assets/flag.png'
import logo from '../assets/logo2.png'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentPath, setCurrentPath] = useState('/')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const updatePath = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('popstate', updatePath)
    updatePath() // Set initial path

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', updatePath)
    }
  }, [])

  const getLinkClass = (path) => {
    return `h-8 rounded-full px-3 flex items-center justify-center transition-colors duration-300 ease-in-out ${currentPath === path ? 'bg-white text-black' : 'text-current hover:text-black hover:bg-white'}`
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'bg-[rgb(13,15,20)] bg-opacity-80 shadow-md' : ' '} py-8`}>
      <div className="w-10/12 md:w-11/12 max-w-[1080px] mx-auto  h-full px-5">
        <div className="relative h-full w-full">
          {/* Logo */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold">
            <a href="/" className="flex gap-1 text-white hover:text-gray-400 transition-colors duration-300 ease-in-out">
              <img src={logo} alt="Logo" className="w-15 h-7" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <nav className="hidden md:flex items-center justify-center text-sm gap-1">
              <a href="/" className={getLinkClass('/')}>Home</a>
              <a href="/work" className={getLinkClass('/work')}>Work</a>
              <a href="/blog" className={getLinkClass('/blog')}>Blog</a>
              <a href="/projects" className={getLinkClass('/projects')}>Projects</a>
            </nav>
          </div>

          {/* Flag and Buttons */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-4 items-center">
            <a href="./assets/flag.png" aria-label="Flag Icon" className="p-4 bg-transparent flex items-center justify-center">
              <img src={flag} alt="Flag Icon" className="w-10 h-7" />
            </a>

            <div className="flex gap-4 md:hidden">
              <button
                id="header-drawer-button"
                aria-label="Toggle drawer open and closed"
                className="flex p-2 items-center justify-center bg-transparent hover:bg-gray-700 dark:hover:bg-gray-200 rounded-lg border border-gray-700 dark:border-gray-200 transition-colors duration-300 ease-in-out"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Bars3Icon id="drawer-open" className={`w-8 h-6 ${mobileMenuOpen ? 'hidden' : 'block'}`} />
                <XMarkIcon id="drawer-close" className={`w-10 h-6 ${mobileMenuOpen ? 'block' : 'hidden'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dialog */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-gray-900 bg-opacity-80" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full max-w-sm overflow-y-auto bg-gray-900 text-white px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                src="./images/logo2.png"
                width="125px"
                height="30px"
                loading="lazy"
                alt="Logo"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500">
              <a href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700">Home</a>
              <a href="/work" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700">Work</a>
              <a href="/blog" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700">Blog</a>
              <a href="/projects" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700">Projects</a>
              <a href="/search" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700">Search</a>
              <a href="/rss.xml" target="_blank" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700">RSS Feed</a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

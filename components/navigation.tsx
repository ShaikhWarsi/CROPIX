"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Leaf } from "lucide-react"
import { ModeToggle } from "./ui/mode-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/crop-recommendation", label: "Features" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="border-b border-gray-100 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-green-600 cursor-pointer flex items-center">
                <Leaf className="w-6 h-6 mr-2" />
                Cropix
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href ? "text-green-600" : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-600 transition-colors ml-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors ${
                    pathname === item.href ? "text-green-600" : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4">
                <ModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

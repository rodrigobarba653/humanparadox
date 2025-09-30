"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { contactData } from "@/data";
import { CTAButton } from "../UI";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/rehabilitacion", label: "Rehabilitación" },
    { href: "/programas", label: "Programas" },
    { href: "/empresas", label: "Empresas" },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "top-0 bg-[#282828]" : "top-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo-white.svg"
              alt="Human Paradox"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isScrolled
                    ? "text-white hover:text-gray-300"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <CTAButton
              href={contactData.contact.whatsapp.href}
              variant="fill-white"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs"
            >
              Reservar cita
            </CTAButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
              isScrolled
                ? "text-white hover:bg-gray-700"
                : "text-white hover:bg-gray-700"
            }`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Offcanvas */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/80"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Offcanvas Panel */}
            <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-[#282828] shadow-2xl transform transition-transform duration-300 ease-in-out z-50">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-600">
                  <div className="flex items-center">
                    <img
                      src="/images/logo-white.svg"
                      alt="Human Paradox"
                      className="h-8 w-auto"
                    />
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md text-white hover:bg-gray-700 transition-colors duration-200"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-2xl font-normal text-white hover:text-gray-300 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* CTA Button */}
                <div className="p-6 border-t border-gray-600">
                  <CTAButton
                    href={contactData.contact.whatsapp.href}
                    variant="fill-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 text-xs"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Reservar cita
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Footer, FooterCopyright } from "flowbite-react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export const metadata: Metadata = {
  title: "Sangjun's Blog",
  description: "",
};

const Layout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => (
  <html lang="en">
    <body className="w-full min-h-screen flex flex-col">
      <Navbar className="sticky top-0 z-1000 shadow-sm">
        <NavbarBrand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{`Sangjun's Blog`}</span>
        </NavbarBrand>
        <NavbarToggle />
        <div className="flex md:order-2 hidden md:block">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search..." />
          </div>
        </div>
        <NavbarCollapse>
          <NavbarLink href="#about">
            About
          </NavbarLink>
          <NavbarLink href="#projects">
            Projects
          </NavbarLink>
          <NavbarLink href="#posts">Posts</NavbarLink>
        </NavbarCollapse>
      </Navbar>
      <main className={"flex-grow"}>
        {children}
      </main>
      <Footer container>
        <div className="w-full text-center">
          <FooterCopyright href="/" by="Sangjun's Blog" year={2024} />
        </div>
      </Footer>
    </body>
  </html>
)

export default Layout

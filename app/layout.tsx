import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";
import DesktopNavigation from "@/components/navigation/deskstopNavigation";
import localFont from "next/font/local";
import Loading from "@/components/Loading";
import { Anton } from 'next/font/google'

export const metadata: Metadata = {
  title: "Little Lewis",
  description: "Artist and designer",
};

const anton = Anton({
    weight: '400',
    subsets: ['latin']
})

const builtTitling = localFont({
    src: [
        {
            path: '../public/fonts/built-titling/built-titling-el.otf',
            weight: '200'
        },
        {
            path: '../public/fonts/built-titling/built-titling-el-it.otf',
            style: 'italic',
            weight: '200'
        },
        {
            path: '../public/fonts/built-titling/built-titling-lt.otf',
            weight: '300'
        },
        {
            path: '../public/fonts/built-titling/built-titling-lt-it.otf',
            style: 'italic',
            weight: '300'
        },
        {
            path: '../public/fonts/built-titling/built-titling-rg.otf',
            weight: '400'
        },
        {
            path: '../public/fonts/built-titling/built-titling-rg-it.otf',
            style: 'italic',
            weight: '400'
        },
        {
            path: '../public/fonts/built-titling/built-titling-sb.otf',
            weight: '600'
        },
        {
            path: '../public/fonts/built-titling/built-titling-sb-it.otf',
            style: 'italic',
            weight: '600'
        },
        {
            path: '../public/fonts/built-titling/built-titling-bd.otf',
            weight: '700'
        },
        {
            path: '../public/fonts/built-titling/built-titling-bd-it.otf',
            style: 'italic',
            weight: '700'
        },
    ],
    variable: '--built-titling'
})

type RootLayoutProps = {
    children: ReactNode;
}
export default function RootLayout(RootLayoutProps: RootLayoutProps) {
    const { children } = RootLayoutProps;
  return (
    <html lang="fr" className={`${builtTitling.variable} ${anton.className}`}>
      <body>
      <DesktopNavigation />
      <Loading />
      {children}
      </body>
    </html>
  );
}

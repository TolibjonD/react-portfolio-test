import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import About from '@/views/About'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <Section>
      <div className='w-full h-screen flex items-center justify-center flex-col relative'>
        <h1 className='text-white text-[75px]'><span className='text-text-gray'>Designing with</span> Purpose,</h1>
        <h1 className='text-white text-[75px]'><span className='text-text-gray'>Building with</span> Webflow.</h1>
        <Button
          className='mt-5 rounded-full border border-border'
        >
          <span className='flex items-center justify-center gap-2'>
            <span> Say hi</span>
            👋
          </span>
        </Button>
        <Link className='absolute right-20 bottom-10 animate-bounce'
          href={"#about"}
        >
          <Image
            src={"/icons/mouse.png"}
            alt='dribble logo, dribble icon'
            width={40}
            height={60}
          />
        </Link>
      </div>
      <About />
    </Section>
  )
}

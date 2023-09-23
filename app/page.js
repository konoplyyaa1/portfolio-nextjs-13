'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
	return <main className='container mx-auto'></main>
}

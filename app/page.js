'use client'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'

export default function Home() {
	const boxRef = useRef()

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to(boxRef.current, { rotation: 360 })
		}, boxRef)

		return () => ctx.revert()
	}, [])

	return (
		<main>
			<div className='box w-fit' ref={boxRef}>
				Hello
			</div>
		</main>
	)
}

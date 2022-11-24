import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap'
import LogoS from '../../../assets/images/luxury-r-logo.jpg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="R"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M111.28,23.5c21.52,26.95,17.1,66.25-9.86,87.77-26.96,21.52-66.25,17.1-87.77-9.85C-7.87,74.46-3.46,35.16,23.5,13.64,50.45-7.87,89.75-3.46,111.28,23.5h0ZM62.45,119.35c31.43,0,56.9-25.48,56.9-56.9S93.88,5.56,62.45,5.56,5.56,31.03,5.56,62.45s25.47,56.9,56.89,56.9h0Zm0-111.98C32.03,7.37,7.36,32.03,7.36,62.46s24.67,55.09,55.09,55.09,55.1-24.67,55.1-55.09S92.89,7.37,62.45,7.37h0Zm74.6,100.55v6.33l-1.86,.92c-5.37,2.65-11.8,4.11-18.09,4.11-15.18,0-28.96-8.19-38.81-23.07-2.32-3.37-5.5-8.14-8.57-12.75-3.55-5.33-6.91-10.37-8.9-13.2l-.1-.15c-1.1-1.75-1.87-2.82-2.42-3.47v22.01c.03,1.49,1.34,2.75,2.92,2.75h4.47l.13,7.63H29.63v-7.63h4.57c1.56,0,2.83-1.24,2.87-2.82V34.95c-.03-1.49-1.32-2.76-2.87-2.76h-4.53v-7.65h36.54c13.59,0,28.12,5.62,28.12,21.41,0,6.05-2.17,11.61-6.1,15.67-2.08,2.15-4.56,3.78-7.26,4.83,4.08,3.63,7.56,8.13,11.59,13.36,1.51,1.95,3.06,3.97,4.76,6.08,10.14,13.08,20.2,21.79,36.43,21.98l3.29,.04ZM60.94,58.28h.13c2.77-.08,9.38-1.07,10.82-8.5v-.04c.16-.87,.36-2.06,.28-3.89-.26-6.39-4.04-10.36-9.87-10.37h-4.01v22.81c.09,0,.22,0,.36,0,.53,.01,1.46,.04,2.28-.02Zm-27.93-30.4v.99h1.2c3.37,0,6.13,2.71,6.2,6.09v53.73c-.1,3.44-2.91,6.05-6.2,6.05h-1.24v.97h29.46l-.02-.97h-1.19c-3.49,0-6.18-2.79-6.25-6.09V32.16h7.35c7.01,.02,12.84,4.86,13.19,13.56,.1,2.26-.18,3.75-.34,4.7-1.73,8.91-9.36,11.06-14,11.19-1.19,.08-2.6,.02-2.97,.02v.92c1.78,.45,3.47,2.81,5.34,5.8,3.79,5.38,12.53,18.76,17.53,26.03,16.73,25.27,40.09,24.01,52.65,17.81v-.97c-17.41-.19-28.35-9.5-38.99-23.22-8.48-10.54-13.58-18.86-22.38-23.54,9.99,.69,18.65-7.12,18.65-18.49,0-13.81-13.22-18.08-24.79-18.08H33Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo

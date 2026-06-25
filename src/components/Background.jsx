import { useEffect, useRef } from 'react'

const GRID = 64
const BASE_OPACITY = 0.028
const PEAK_OPACITY = 0.14

function waveOpacity(x, y, time) {
  const w1 = Math.sin(x * 0.011 + time * 0.65)
  const w2 = Math.sin(y * 0.009 - time * 0.5)
  const w3 = Math.sin((x + y) * 0.007 + time * 0.38)
  const blend = (w1 + w2 + w3) / 3
  const highlight = Math.pow(Math.max(0, blend), 1.4)
  return BASE_OPACITY + highlight * (PEAK_OPACITY - BASE_OPACITY)
}

function lineOpacity(samples, time) {
  let sum = 0
  for (const [x, y] of samples) sum += waveOpacity(x, y, time)
  return sum / samples.length
}

function drawGrid(ctx, width, height, time) {
  ctx.clearRect(0, 0, width, height)

  ctx.lineWidth = 1

  for (let x = 0; x <= width; x += GRID) {
    const samples = [
      [x, height * 0.2],
      [x, height * 0.5],
      [x, height * 0.8],
    ]
    const opacity = lineOpacity(samples, time)
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
    ctx.beginPath()
    ctx.moveTo(x + 0.5, 0)
    ctx.lineTo(x + 0.5, height)
    ctx.stroke()
  }

  for (let y = 0; y <= height; y += GRID) {
    const samples = [
      [width * 0.2, y],
      [width * 0.5, y],
      [width * 0.8, y],
    ]
    const opacity = lineOpacity(samples, time)
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
    ctx.beginPath()
    ctx.moveTo(0, y + 0.5)
    ctx.lineTo(width, y + 0.5)
    ctx.stroke()
  }

  const cx = width * 0.5
  const cy = height * 0.3
  const radius = Math.max(width, height) * 0.75
  const vignette = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
  vignette.addColorStop(0, 'rgba(0, 0, 0, 1)')
  vignette.addColorStop(0.55, 'rgba(0, 0, 0, 0.85)')
  vignette.addColorStop(1, 'rgba(0, 0, 0, 0)')

  ctx.globalCompositeOperation = 'destination-in'
  ctx.fillStyle = vignette
  ctx.fillRect(0, 0, width, height)
  ctx.globalCompositeOperation = 'source-over'
}

export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let raf = 0
    let time = 0
    let width = 0
    let height = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const render = () => {
      drawGrid(ctx, width, height, time)
      if (!reducedMotion.matches) {
        time += 0.012
        raf = requestAnimationFrame(render)
      }
    }

    const onResize = () => {
      resize()
      if (reducedMotion.matches) drawGrid(ctx, width, height, time)
    }

    const onMotionChange = () => {
      cancelAnimationFrame(raf)
      if (reducedMotion.matches) {
        drawGrid(ctx, width, height, time)
      } else {
        render()
      }
    }

    resize()
    render()

    window.addEventListener('resize', onResize)
    reducedMotion.addEventListener('change', onMotionChange)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      reducedMotion.removeEventListener('change', onMotionChange)
    }
  }, [])

  return (
    <div className="background" aria-hidden="true">
      <div className="background__gradient" />
      <canvas ref={canvasRef} className="background__grid-canvas" />
      <div className="background__orb background__orb--1" />
      <div className="background__orb background__orb--2" />
      <div className="background__orb background__orb--3" />
    </div>
  )
}

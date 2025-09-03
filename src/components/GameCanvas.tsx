import { useRef, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'

const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { isGameStarted } = useGameStore()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 캔버스 크기 설정
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 게임 루프
    const gameLoop = () => {
      if (!isGameStarted) {
        requestAnimationFrame(gameLoop)
        return
      }

      // 캔버스 클리어
      ctx.fillStyle = '#1f2937'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // 게임 렌더링 로직은 여기에 추가
      // TODO: 유닛, 적, 이펙트 렌더링

      requestAnimationFrame(gameLoop)
    }

    gameLoop()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [isGameStarted])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#1f2937' }}
    />
  )
}

export default GameCanvas

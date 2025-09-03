import React from 'react'
import GameCanvas from './GameCanvas'
import GameUI from './GameUI'
import { useGameStore } from '../stores/gameStore'

const Game: React.FC = () => {
  const { isGameStarted } = useGameStore()

  return (
    <div className="relative w-full h-full">
      {/* 게임 캔버스 */}
      <GameCanvas />
      
      {/* 게임 UI */}
      <GameUI />
      
      {/* 게임 시작 화면 */}
      {!isGameStarted && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Idle DPS Game
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              스타크래프트 DPS 강화하기를 모티브로 한 게임
            </p>
            <button 
              className="bg-game-primary hover:bg-game-secondary text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
              onClick={() => useGameStore.getState().startGame()}
            >
              게임 시작
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Game

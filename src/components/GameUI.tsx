import { useGameStore } from '../stores/gameStore'

const GameUI = () => {
  const { 
    isGameStarted, 
    gold, 
    wave, 
    health, 
    selectedUnit,
    units 
  } = useGameStore()

  if (!isGameStarted) return null

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* 상단 UI */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-auto">
        <div className="bg-game-surface bg-opacity-90 rounded-lg p-4 flex gap-6">
          <div className="flex items-center gap-2">
            <span className="text-game-accent font-bold">💰</span>
            <span className="text-white font-semibold">{gold}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-game-primary font-bold">🌊</span>
            <span className="text-white font-semibold">Wave {wave}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-game-danger font-bold">❤️</span>
            <span className="text-white font-semibold">{health}</span>
          </div>
        </div>
      </div>

      {/* 하단 유닛 선택 UI */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-auto">
        <div className="bg-game-surface bg-opacity-90 rounded-lg p-4">
          <div className="flex gap-4">
            {units.map((unit) => (
              <button
                key={unit.id}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedUnit?.id === unit.id
                    ? 'border-game-primary bg-game-primary bg-opacity-20'
                    : 'border-gray-600 hover:border-game-primary'
                }`}
                onClick={() => useGameStore.getState().selectUnit(unit)}
              >
                <div className="text-2xl mb-1">{unit.icon}</div>
                <div className="text-xs text-center text-white">{unit.name}</div>
                <div className="text-xs text-center text-game-accent">{unit.cost}G</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 우측 업그레이드 UI */}
      {selectedUnit && (
        <div className="absolute top-20 right-4 pointer-events-auto">
          <div className="bg-game-surface bg-opacity-90 rounded-lg p-4 w-64">
            <h3 className="text-white font-bold mb-3">{selectedUnit.name} 업그레이드</h3>
            <div className="space-y-2">
              <button className="w-full bg-game-primary hover:bg-game-secondary text-white py-2 px-4 rounded transition-colors">
                공격력 강화 ({selectedUnit.damage * 1.5}G)
              </button>
              <button className="w-full bg-game-primary hover:bg-game-secondary text-white py-2 px-4 rounded transition-colors">
                공격속도 강화 ({selectedUnit.attackSpeed * 2}G)
              </button>
              <button className="w-full bg-game-primary hover:bg-game-secondary text-white py-2 px-4 rounded transition-colors">
                범위 강화 ({selectedUnit.range * 3}G)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GameUI

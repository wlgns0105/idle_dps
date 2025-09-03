import { create } from 'zustand'

export interface Unit {
  id: string
  name: string
  icon: string
  cost: number
  damage: number
  attackSpeed: number
  range: number
  x?: number
  y?: number
}

export interface Enemy {
  id: string
  x: number
  y: number
  health: number
  maxHealth: number
  speed: number
  reward: number
}

interface GameState {
  // 게임 상태
  isGameStarted: boolean
  isPaused: boolean
  
  // 게임 데이터
  gold: number
  wave: number
  health: number
  score: number
  
  // 유닛 관련
  units: Unit[]
  selectedUnit: Unit | null
  placedUnits: Unit[]
  
  // 적 관련
  enemies: Enemy[]
  
  // 게임 액션
  startGame: () => void
  pauseGame: () => void
  resumeGame: () => void
  selectUnit: (unit: Unit) => void
  placeUnit: (x: number, y: number) => void
  upgradeUnit: (unitId: string, upgradeType: 'damage' | 'attackSpeed' | 'range') => void
  addGold: (amount: number) => void
  spendGold: (amount: number) => boolean
  nextWave: () => void
  takeDamage: (amount: number) => void
}

const initialUnits: Unit[] = [
  {
    id: 'archer',
    name: '궁수',
    icon: '🏹',
    cost: 50,
    damage: 10,
    attackSpeed: 1.0,
    range: 100
  },
  {
    id: 'mage',
    name: '마법사',
    icon: '🧙‍♂️',
    cost: 100,
    damage: 25,
    attackSpeed: 0.5,
    range: 80
  },
  {
    id: 'warrior',
    name: '전사',
    icon: '⚔️',
    cost: 75,
    damage: 15,
    attackSpeed: 1.5,
    range: 60
  }
]

export const useGameStore = create<GameState>((set, get) => ({
  // 초기 상태
  isGameStarted: false,
  isPaused: false,
  gold: 100,
  wave: 1,
  health: 100,
  score: 0,
  units: initialUnits,
  selectedUnit: null,
  placedUnits: [],
  enemies: [],

  // 게임 액션
  startGame: () => set({ isGameStarted: true }),
  
  pauseGame: () => set({ isPaused: true }),
  
  resumeGame: () => set({ isPaused: false }),
  
  selectUnit: (unit) => set({ selectedUnit: unit }),
  
  placeUnit: (x, y) => {
    const { selectedUnit, gold, placedUnits } = get()
    if (!selectedUnit || gold < selectedUnit.cost) return
    
    const newUnit: Unit = {
      ...selectedUnit,
      x,
      y
    }
    
    set({
      placedUnits: [...placedUnits, newUnit],
      gold: gold - selectedUnit.cost
    })
  },
  
  upgradeUnit: (unitId, upgradeType) => {
    const { placedUnits, gold } = get()
    const unit = placedUnits.find(u => u.id === unitId)
    if (!unit) return
    
    let upgradeCost = 0
    let updatedUnit = { ...unit }
    
    switch (upgradeType) {
      case 'damage':
        upgradeCost = Math.floor(unit.damage * 1.5)
        updatedUnit.damage = Math.floor(unit.damage * 1.2)
        break
      case 'attackSpeed':
        upgradeCost = Math.floor(unit.attackSpeed * 2)
        updatedUnit.attackSpeed = unit.attackSpeed * 0.9
        break
      case 'range':
        upgradeCost = Math.floor(unit.range * 3)
        updatedUnit.range = Math.floor(unit.range * 1.1)
        break
    }
    
    if (gold >= upgradeCost) {
      const updatedUnits = placedUnits.map(u => 
        u.id === unitId ? updatedUnit : u
      )
      
      set({
        placedUnits: updatedUnits,
        gold: gold - upgradeCost
      })
    }
  },
  
  addGold: (amount) => set(state => ({ gold: state.gold + amount })),
  
  spendGold: (amount) => {
    const { gold } = get()
    if (gold >= amount) {
      set({ gold: gold - amount })
      return true
    }
    return false
  },
  
  nextWave: () => set(state => ({ 
    wave: state.wave + 1,
    gold: state.gold + 50 // 웨이브 보상
  })),
  
  takeDamage: (amount) => set(state => ({ 
    health: Math.max(0, state.health - amount) 
  }))
}))

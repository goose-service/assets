export const wordEng = [
  `Petals dance in the spring breeze.`,
  `Night whispers under starlight.`,
  `Waves gently caress the shore.`,
  `Wind rustles the leaves.`,
  `The sun smiles through the clouds.`,
]

export const wordKor = [
  `봄바람에 꽃잎 춤추다.`,
  `별빛 아래 속삭이는 밤.`,
  `물결이 부드럽게 해변을 간지다.`,
  `바람이 나뭇잎을 흔들어요.`,
  `구름 사이로 해가 미소 짓다.`,
]

export function randomPick(arr)
{
  const idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}

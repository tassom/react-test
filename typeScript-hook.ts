//TypeScript Average Height

export function calcAvgHeight(data: { [name: string]: Person }): number | null {
  let height = 0;
  let count = 0;
  if (!data) return null;

  for (const props in data) {
    height += data[props].height;
    count++;
  }
  if (!height) return null;
  return height / count;
}

interface Person {
  height: number;
  weight: number;
}

export let avgHeight = calcAvgHeight({
  Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 }
});

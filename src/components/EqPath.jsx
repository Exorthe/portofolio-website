export default function EqPath() {
  const eqData = [
    { fc: 62.5, gain: 4, q: 1 }, { fc: 100, gain: 4, q: 2 }, { fc: 160, gain: 3, q: 2 },
    { fc: 250, gain: 0, q: 2 }, { fc: 400, gain: 3, q: 2 }, { fc: 630, gain: 0, q: 2 },
    { fc: 1000, gain: 2, q: 2 }, { fc: 1600, gain: 0, q: 2 }, { fc: 2500, gain: 2, q: 2 },
    { fc: 4000, gain: 2, q: 2 }, { fc: 6300, gain: 2, q: 2 }, { fc: 10000, gain: 5, q: 2 },
    { fc: 16000, gain: 3, q: 2 }, { fc: 12000, gain: -3, q: 3 }, { fc: 14500, gain: -8, q: 3 },
    { fc: 10000, gain: 7, q: 4 }, { fc: 13500, gain: 8, q: 7 }, { fc: 13000, gain: -2, q: 6 },
    { fc: 98, gain: -2, q: 4 }, { fc: 12500, gain: -3, q: 2 }
  ];

  const numPoints = 300;
  const minLog = Math.log10(20);
  const maxLog = Math.log10(20000);
  let pathD = "";

  for (let i = 0; i <= numPoints; i++) {
    const xRatio = i / numPoints;
    const freq = Math.pow(10, minLog + xRatio * (maxLog - minLog));

    let totalGain = 0;
    for (const f of eqData) {
      const w = freq / f.fc;
      const w_inv = f.fc / freq;
      const bandwidth = w - w_inv;
      const gain = f.gain / (1 + Math.pow(f.q * bandwidth, 2));
      totalGain += gain;
    }

    const x = xRatio * 1000;
    const y = 50 - (totalGain * 2.5);

    if (i === 0) pathD += `M ${x},${y} `;
    else pathD += `L ${x},${y} `;
  }

  return (
    <>
      <path
        d={pathD}
        fill="none"
        stroke="#e5e5e5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]"
      />
    </>
  );
}
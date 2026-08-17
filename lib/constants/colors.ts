// Palette aligns with the web templates (next-template-fullstack / react-router-template-fullstack).
// primary = text/foreground (near-black in light, near-white in dark).
// tint = interactive accent (tabs, links). Keep it separate from primary.
export const Colors = {
  light: {
    text: '#1C1C1C', // oklch(0.205 0 0)
    background: '#FFFFFF', // oklch(1 0 0)
    tint: '#0a7ea4',
    icon: '#787878', // oklch(0.556 0 0)
    tabIconDefault: '#787878',
    tabIconSelected: '#0a7ea4',
    surface: '#FFFFFF',
    border: '#E8E8E8', // oklch(0.922 0 0)
  },
  dark: {
    text: '#FAFAFA', // oklch(0.985 0 0)
    background: '#0D0D0D', // oklch(0.065 0 0)
    tint: '#38BDF8',
    icon: '#787878', // oklch(0.556 0 0)
    tabIconDefault: '#787878',
    tabIconSelected: '#38BDF8',
    surface: '#1A1A1A',
    border: '#3D3D3D', // oklch(0.269 0 0)
  },
}

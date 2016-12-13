
import { defaultConfig } from 'understyle'

const { colors } = defaultConfig

const serif = 'Georgia, serif'
const monospace = 'Menlo, Consolas, monospace'

const scale = [
  0,
  8,
  16,
  32,
  64
]

const typeScale = [
  48,
  32,
  24,
  20,
  16,
  14,
  12
]

const zIndex = [
  0,
  2,
  4,
  8,
  16
]

const bold = 600
const borderRadius = 2
const borderColor = 'rgba(0, 0, 0, .25)'
const boxShadow = '0 2px 16px rgba(0, 0, 0, .125)'

const caps = {
  textTransform: 'uppercase',
  letterSpacing: '.2em'
}

const basic = {
  name: 'Basic',
  scale,
  typeScale,
  bold,
  serif,
  monospace,
  caps,
  zIndex,
  colors,
  borderRadius,
  borderColor,
  boxShadow,
  Heading: {
    alt: {
      ...caps
    }
  }
}

export default basic


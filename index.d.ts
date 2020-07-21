import { FC } from 'react'

declare interface Props {
  /** The background color to apply to even elements. */
  even?: string
  /** The background color to apply to odd elements. */
  odd?: string
}

declare const Zebra: FC<Props>

export = Zebra

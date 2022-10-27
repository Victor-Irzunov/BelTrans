import React from 'react'
import { openNotification } from '../drop/DropComp'

function Uvedomlenia() {
  return (
    <span
    onClick={() => openNotification('top')}
    >
      Уведомление
    </span>
  )
}

export default Uvedomlenia
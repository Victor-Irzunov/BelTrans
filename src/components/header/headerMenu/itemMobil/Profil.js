import React, { useState } from 'react'
import ViewComp from '../drop/avatar/viewComp/ViewComp'

function Profil() {
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return (
    <>
      <span
        onClick={showDrawer}
      >
        Профиль
      </span>
      <ViewComp
        open={open}
        onClose={onClose}
      />
    </>

  )
}

export default Profil
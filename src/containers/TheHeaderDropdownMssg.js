import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'

const TheHeaderDropdownMssg = () => {
  
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false} onClick={()=>window.open("https://svtinfra.com:2096/")}>
        <CIcon name="cil-envelope-open" /><CBadge shape="pill" color="info"></CBadge>
      </CDropdownToggle>
    </CDropdown>
  )
}

export default TheHeaderDropdownMssg
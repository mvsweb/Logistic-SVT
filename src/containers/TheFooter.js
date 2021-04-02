import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://visharaminfo.in/index.html_#Home" target="_blank" rel="noopener noreferrer">VisharamInfo</a>
        <span className="ml-1">&copy; 2021 VisharamInfo</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://visharaminfo.in/index.html_#Home" target="_blank" rel="noopener noreferrer">VisharamInfo</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)

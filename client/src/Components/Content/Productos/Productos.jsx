import React, { useEffect } from 'react'

import Democarta from './carnes'

function Productos({ producto, categoria }) {
  return (
    <div>
      {
				categoria === 'carnes'
				  ?				<Democarta />
				  :				null
			}

    </div>
  )
}

export default Productos

import React from 'react'
import {render} from 'react-dom'

// 引入HelloMsg组件
import PerfTest from './PerfTest'

import Perf from 'react-addons-perf'

window.Perf = Perf;

render(
	<PerfTest />,
	document.getElementById('root')
)
import { Tooltip } from 'tinper-bee';


function demo1 () {
  return (
    <div className="demo-tooltip">
      <Tooltip id="tooltip1"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
      <Tooltip id="tooltip2" placement="top"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
      <Tooltip id="tooltip3" placement="right"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
      <Tooltip id="tooltip4" placement="bottom"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
    </div>
  )
}


ReactDOM.render(demo1(), document.getElementById('ReactTooltipDemo1'));



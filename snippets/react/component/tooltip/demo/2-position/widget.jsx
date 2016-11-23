import { Tooltip } from 'tinper-bee';


function demo2 () {
	return (
		<div className="demo-tooltip">
			<Tooltip id="tooltip1" positionTop="20px"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
			<Tooltip id="tooltip2" placement="top" positionLeft="20px"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
			<Tooltip id="tooltip3" placement="right" arrowOffsetLeft="1px"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
			<Tooltip id="tooltip4" placement="bottom" arrowOffsetTop="1px"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
		</div>
	)
}

ReactDOM.render(demo2(), document.getElementById('ReactTooltipDemo2'));



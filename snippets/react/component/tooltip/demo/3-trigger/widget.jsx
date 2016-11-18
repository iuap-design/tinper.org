import { Tooltip } from 'tinper-bee';
import { OverlayTrigger } from 'tinper-bee';
import { Button } from 'Button';


const tooltip1 = function () {
  return (
    <Tooltip id="tooltip5"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
  );
}
const tooltip2 = function () {
  return (
    <Tooltip id="tooltip6"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
  );
}
const tooltip3 = function () {
  return (
    <Tooltip id="tooltip7"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
  );
}
const tooltip4 = function () {
  return (
    <Tooltip id="tooltip8"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
  );
}

function demo3 () {

  return (
    <div className="demo-overlay-trigger">
        <OverlayTrigger overlay = {tooltip1()}  placement="top">
          <Button>tooltip</Button>
        </OverlayTrigger>
        <OverlayTrigger overlay = {tooltip2()}  placement="left">
          <Button>tooltip</Button>
        </OverlayTrigger>
        <OverlayTrigger overlay = {tooltip3()}  placement="right">
          <Button>tooltip</Button>
        </OverlayTrigger>
        <OverlayTrigger overlay = {tooltip4()}  placement="bottom">
          <Button>tooltip</Button>
        </OverlayTrigger>
    </div>
  )
}

ReactDOM.render(demo3(), document.getElementById('ReactTooltipDemo3'));



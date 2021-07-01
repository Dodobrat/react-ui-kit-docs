import { Button, Tooltip } from "@dodobrat/react-ui-kit";
import React, { useRef, useState } from "react";

const TooltipPage = () => {
	const tooltipRef = useRef(null);
	const controlledTooltipRef = useRef(null);

	const [controlledTooltip, setControlledTooltip] = useState(true);

	const TooltipContent = () => {
		return <p className='mb--0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>;
	};

	return (
		// <div style={{ width: "300vw", height: "300vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
		<div>
			<div>
				<h1>Tooltip Default</h1>
				<Tooltip content={<TooltipContent />}>
					<Button className='mr--2'>Top Tooltip</Button>
				</Tooltip>
				<Tooltip content={<TooltipContent />} position='bottom-right'>
					<Button className='mr--2'>Bottom Tooltip</Button>
				</Tooltip>
				<Tooltip content={<TooltipContent />} position='left-center'>
					<Button className='mr--2'>Left Tooltip</Button>
				</Tooltip>
				<Tooltip content={<TooltipContent />} position='right-center'>
					<Button>Right Tooltip</Button>
				</Tooltip>
				<br />
				<h1>Multiple Targets</h1>
				<h3>Trigger same Tooltip from multiple targets |BAD FOR ASSISTIVE TECHNOLOGY|</h3>
				<Tooltip content={<TooltipContent />}>
					<Button className='mr--2'>Tooltip trigger 1</Button>
					<Button className='mr--2'>Tooltip trigger 2</Button>
					<Button className='mr--2'>Tooltip trigger 3</Button>
					<Button className='mr--2'>Tooltip trigger 4</Button>
				</Tooltip>
				<h1>Tooltip Sizes</h1>
				<Tooltip content={"I am tooltip"}>
					<span>Random Tooltip</span>
				</Tooltip>
				<br />
				<br />
				<Tooltip content={<TooltipContent />} sizing='xs'>
					<Button>XS Tooltip</Button>
				</Tooltip>
				<br />
				<br />
				<Tooltip content={<TooltipContent />} sizing='sm'>
					<Button>SM Tooltip</Button>
				</Tooltip>
				<br />
				<br />
				<Tooltip content={<TooltipContent />} sizing='md'>
					<Button>MD Tooltip</Button>
				</Tooltip>
				<br />
				<br />
				<Tooltip content={<TooltipContent />} sizing='lg'>
					<Button>LG Tooltip</Button>
				</Tooltip>
				<br />
				<br />
				<Tooltip content={<TooltipContent />} sizing='xl'>
					<Button>XL Tooltip</Button>
				</Tooltip>
				<br />
				<br />
				<h1>Tooltip Utils</h1>
				<Tooltip content={<TooltipContent />} pigment='info'>
					<Button className='mr--2'>Pigment Tooltip</Button>
				</Tooltip>
				<Tooltip content={<TooltipContent />} elevation='subtle' pigment='warning'>
					<Button className='mr--2'>Elevation + Pigment Tooltip</Button>
				</Tooltip>

				<br />
				<br />
				<br />
				<Tooltip content={<TooltipContent />} flavor='rounded'>
					<Button className='mr--2'>Rounded Tooltip</Button>
				</Tooltip>
				<Tooltip content={<TooltipContent />} flavor='flat'>
					<Button className='mr--2'>Flat Tooltip</Button>
				</Tooltip>

				<br />
				<br />
				<br />
				<Tooltip content={<TooltipContent />} spacing={100}>
					<Button className='mr--2'>Spacing</Button>
				</Tooltip>
				<Tooltip content={<TooltipContent />} disabled>
					<Button className='mr--2'>Disabled</Button>
				</Tooltip>
				<br />
				<br />
				<br />
				<Tooltip content={<TooltipContent />} animation='zoom'>
					<Button className='mr--2'>Zoom Animation</Button>
				</Tooltip>
				<Tooltip content={<TooltipContent />} animation='zoom' position='right-top'>
					<Button className='mr--2'>Zoom Right Animation</Button>
				</Tooltip>
				<Tooltip content={<TooltipContent />} animation='zoom' position='bottom-right'>
					<Button className='mr--2'>Zoom Bottom Animation</Button>
				</Tooltip>
				<Tooltip content={<TooltipContent />} animation='zoom' position='left'>
					<Button className='mr--2'>Zoom Left Animation</Button>
				</Tooltip>
				<Tooltip content={<TooltipContent />} animation='none'>
					<Button className='mr--2'>NO Animation</Button>
				</Tooltip>
				<br />
				<br />
				<br />
				<Tooltip content={<TooltipContent />} seamless>
					<Button>Seamless Tooltip (used if you want to make your own)</Button>
				</Tooltip>
				<h1>Tooltip Events</h1>
				<h2>Show only on hover</h2>
				<Tooltip content={<TooltipContent />} showOnFocus={false}>
					<Button>Only Hover</Button>
				</Tooltip>
				<h2>Show only on focus</h2>
				<Tooltip content={<TooltipContent />} showOnHover={false}>
					<Button>Only Focus</Button>
				</Tooltip>
				<h2>Show only on click</h2>
				<Tooltip content={<TooltipContent />} showOnHover={false} showOnFocus={false} showOnClick>
					<Button>Only Click</Button>
				</Tooltip>
				<h2>Controlled / Visible by default</h2>
				<Tooltip content={<TooltipContent />} triggerElement={tooltipRef} isToggled>
					<Button ref={tooltipRef}>Visible by default needs ref ot the trigger element</Button>
				</Tooltip>
				<br />
				<br />
				<Tooltip
					content={<TooltipContent />}
					isToggled={controlledTooltip}
					onToggle={(isToggled) => console.log(isToggled)}
					showOnHover={false}
					showOnFocus={false}
					position='left-center'
					animation='zoom'
					triggerElement={controlledTooltipRef}>
					<Button ref={controlledTooltipRef} onClick={() => setControlledTooltip((prev) => !prev)}>
						Controlled Tooltip + onToggle callback
					</Button>
				</Tooltip>
				{/* <Tooltip content='haha manqk'>Not component</Tooltip> */}
			</div>
		</div>
	);
};

export default TooltipPage;

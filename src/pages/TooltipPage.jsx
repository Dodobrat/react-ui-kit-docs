import { Button, Tooltip } from "@dodobrat/react-ui-kit";
import React, { useRef, useState } from "react";

const TooltipPage = () => {
	const tooltipRef = useRef(null);
	const controlledTooltipRef = useRef(null);

	const [controlledTooltip, setControlledTooltip] = useState(true);

	const TooltipContent = () => {
		return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>;
	};

	return (
		<div>
			<h1>Tooltip Default</h1>
			<Tooltip content={<TooltipContent />}>
				<Button className='mr--2'>Top Tooltip</Button>
			</Tooltip>
			<Tooltip content={<TooltipContent />} position='bottom'>
				<Button className='mr--2'>Bottom Tooltip</Button>
			</Tooltip>
			<Tooltip content={<TooltipContent />} position='left'>
				<Button className='mr--2'>Left Tooltip</Button>
			</Tooltip>
			<Tooltip content={<TooltipContent />} position='right'>
				<Button>Right Tooltip</Button>
			</Tooltip>
			<br />
			<h1>Tooltip Sizes</h1>
			<Tooltip content={<TooltipContent />} size='xs'>
				<Button>XS Tooltip</Button>
			</Tooltip>
			<br />
			<br />
			<Tooltip content={<TooltipContent />} size='sm'>
				<Button>SM Tooltip</Button>
			</Tooltip>
			<br />
			<br />
			<Tooltip content={<TooltipContent />} size='md'>
				<Button>MD Tooltip</Button>
			</Tooltip>
			<br />
			<br />
			<Tooltip content={<TooltipContent />} size='lg'>
				<Button>LG Tooltip</Button>
			</Tooltip>
			<br />
			<br />
			<Tooltip content={<TooltipContent />} size='xl'>
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
			<Tooltip content={<TooltipContent />} rounded>
				<Button className='mr--2'>Rounded Tooltip</Button>
			</Tooltip>
			<Tooltip content={<TooltipContent />} flat>
				<Button className='mr--2'>Flat Tooltip</Button>
			</Tooltip>
			<Tooltip content={<TooltipContent />} spacing={100}>
				<Button className='mr--2'>Spacing</Button>
			</Tooltip>
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
			<h2>Disable adjust to viewport</h2>
			<Tooltip content={<TooltipContent />} showOnHover={false} showOnFocus={false} showOnClick adjustToViewport={false}>
				<Button>Only Click + No adjusting to viewport(scroll / resize)</Button>
			</Tooltip>
			<h2>Controlled / Visible by default</h2>
			<Tooltip content={<TooltipContent />} isVisible triggerElement={tooltipRef}>
				<Button ref={tooltipRef}>Visible by default needs ref ot the trigger element</Button>
			</Tooltip>
			<br />
			<br />
			<Tooltip
				content={<TooltipContent />}
				isVisible={controlledTooltip}
				onToggle={(isVisible) => console.log(isVisible)}
				showOnHover={false}
				showOnFocus={false}
				triggerElement={controlledTooltipRef}>
				<Button ref={controlledTooltipRef} onClick={() => setControlledTooltip((prev) => !prev)}>
					Controlled Tooltip + onToggle callback
				</Button>
			</Tooltip>
			{/* <Tooltip content='haha manqk'>Not component</Tooltip> */}
		</div>
	);
};

export default TooltipPage;

import { Button, Card, Portal } from "@dodobrat/react-ui-kit";
import { forwardRef } from "react";

const SuspensedPortal = forwardRef((props, ref) => {
	const { onClose, isOpen, ...rest } = props;

	return (
		<Portal onClose={onClose} sizing='xl' verticalAlign='start' innerClassName='py--4 px--2' {...rest} ref={ref} isOpen={isOpen}>
			<Card>
				<Card.Header
					actions={
						<Button sizing='xs' pigment='none' onClick={onClose}>
							X
						</Button>
					}>
					Portal Modal
				</Card.Header>
				<Card.Body>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					{/* <Button onClick={openModalB}>Open 2nd Modal</Button> */}
				</Card.Body>
			</Card>
		</Portal>
	);
});

export default SuspensedPortal;

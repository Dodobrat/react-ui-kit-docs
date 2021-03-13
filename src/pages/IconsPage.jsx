import {
	ArrowDown,
	ArrowLeft,
	ArrowRight,
	ArrowUp,
	CaretDown,
	CaretLeft,
	CaretRight,
	CaretUp,
	Close,
	Completed,
	Danger,
	DblCaretDown,
	DblCaretLeft,
	DblCaretRight,
	DblCaretUp,
	Eye,
	Flex,
	Hamburger,
	Info,
	Minus,
	Moon,
	More,
	MoreVertical,
	Plus,
	Search,
	Settings,
	Sun,
	Warning,
} from "@dodobrat/react-ui-kit";
import React from "react";

const IconsPage = () => {
	return (
		<div className='icons-page'>
			<h1>Icons</h1>
			<Flex>
				<Flex.Col col={{ xs: 4 }}>
					<h2>Arrows</h2>
					<Flex>
						<Flex.Col>
							<ArrowDown />
						</Flex.Col>
						<Flex.Col>
							<ArrowLeft />
						</Flex.Col>
						<Flex.Col>
							<ArrowRight />
						</Flex.Col>
						<Flex.Col>
							<ArrowUp />
						</Flex.Col>
					</Flex>
				</Flex.Col>
				<Flex.Col col={{ xs: 4 }}>
					<h2>Caret</h2>
					<Flex>
						<Flex.Col>
							<CaretDown />
						</Flex.Col>
						<Flex.Col>
							<CaretLeft />
						</Flex.Col>
						<Flex.Col>
							<CaretRight />
						</Flex.Col>
						<Flex.Col>
							<CaretUp />
						</Flex.Col>
					</Flex>
				</Flex.Col>
				<Flex.Col col={{ xs: 4 }}>
					<h2>Dbl Caret</h2>
					<Flex>
						<Flex.Col>
							<DblCaretDown />
						</Flex.Col>
						<Flex.Col>
							<DblCaretLeft />
						</Flex.Col>
						<Flex.Col>
							<DblCaretRight />
						</Flex.Col>
						<Flex.Col>
							<DblCaretUp />
						</Flex.Col>
					</Flex>
				</Flex.Col>
				<Flex.Col col={{ xs: 12 }}>
					<h1>Other</h1>
					<Flex>
						<Flex.Col>
							<Close />
						</Flex.Col>
						<Flex.Col>
							<Completed />
						</Flex.Col>
						<Flex.Col>
							<Danger />
						</Flex.Col>
						<Flex.Col>
							<Eye />
						</Flex.Col>
						<Flex.Col>
							<Hamburger />
						</Flex.Col>
						<Flex.Col>
							<Info />
						</Flex.Col>
						<Flex.Col>
							<Minus />
						</Flex.Col>
						<Flex.Col>
							<Moon />
						</Flex.Col>
						<Flex.Col>
							<MoreVertical />
						</Flex.Col>
						<Flex.Col>
							<More />
						</Flex.Col>
						<Flex.Col>
							<Plus />
						</Flex.Col>
						<Flex.Col>
							<Search />
						</Flex.Col>
						<Flex.Col>
							<Settings />
						</Flex.Col>
						<Flex.Col>
							<Sun />
						</Flex.Col>
						<Flex.Col>
							<Warning />
						</Flex.Col>
					</Flex>
				</Flex.Col>
			</Flex>
		</div>
	);
};

export default IconsPage;

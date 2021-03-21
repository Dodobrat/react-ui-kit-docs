import {
	ArrowDown,
	ArrowLeft,
	ArrowRight,
	ArrowUp,
	Calendar,
	CaretDown,
	CaretLeft,
	CaretRight,
	CaretUp,
	Clock,
	Close,
	CloseOutlined,
	Completed,
	Danger,
	DblCaretDown,
	DblCaretLeft,
	DblCaretRight,
	DblCaretUp,
	Eye,
	EyeCrossed,
	Flex,
	Hamburger,
	Info,
	Lock,
	Mail,
	MailOpened,
	Minus,
	Moon,
	More,
	MoreVertical,
	Plus,
	Search,
	Settings,
	Sun,
	User,
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
				<Flex.Col col={{ xs: 6 }}>
					<h1>Status</h1>
					<Flex>
						<Flex.Col>
							<Completed />
						</Flex.Col>
						<Flex.Col>
							<Danger />
						</Flex.Col>
						<Flex.Col>
							<Warning />
						</Flex.Col>
						<Flex.Col>
							<Info />
						</Flex.Col>
						<Flex.Col>
							<Moon />
						</Flex.Col>
						<Flex.Col>
							<Sun />
						</Flex.Col>
					</Flex>
				</Flex.Col>
				<Flex.Col col={{ xs: 6 }}>
					<h1>Input (Helpers / preffixes / suffixes)</h1>
					<Flex>
						<Flex.Col>
							<Search />
						</Flex.Col>
						<Flex.Col>
							<Calendar />
						</Flex.Col>
						<Flex.Col>
							<Clock />
						</Flex.Col>
						<Flex.Col>
							<Lock />
						</Flex.Col>
						<Flex.Col>
							<Mail />
						</Flex.Col>
						<Flex.Col>
							<User />
						</Flex.Col>
					</Flex>
				</Flex.Col>
				<Flex.Col col={{ xs: 12 }}>
					<h1>Other</h1>
					<Flex>
						<Flex.Col>
							<Eye />
						</Flex.Col>
						<Flex.Col>
							<EyeCrossed />
						</Flex.Col>
						<Flex.Col>
							<Close />
						</Flex.Col>
						<Flex.Col>
							<CloseOutlined />
						</Flex.Col>
						<Flex.Col>
							<Hamburger />
						</Flex.Col>
						<Flex.Col>
							<Minus />
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
							<Settings />
						</Flex.Col>
						<Flex.Col>
							<MailOpened />
						</Flex.Col>
					</Flex>
				</Flex.Col>
			</Flex>
		</div>
	);
};

export default IconsPage;

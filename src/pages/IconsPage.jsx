import {
	IconArrowDown,
	IconArrowLeft,
	IconArrowRight,
	IconArrowUp,
	IconCalendar,
	IconCaretDown,
	IconCaretLeft,
	IconCaretRight,
	IconCaretUp,
	IconCheckOutlined,
	IconCheck,
	IconClock,
	IconClose,
	IconCloseOutlined,
	IconCompleted,
	IconDanger,
	IconDoubleCaretDown,
	IconDoubleCaretLeft,
	IconDoubleCaretRight,
	IconDoubleCaretUp,
	IconEye,
	IconEyeCrossed,
	Flex,
	IconHamburger,
	IconInfo,
	IconLock,
	IconLockUnlocked,
	IconMail,
	IconMailOpened,
	IconMinus,
	IconMoon,
	IconMore,
	IconMoreVertical,
	IconPlus,
	IconSearch,
	IconSettings,
	IconSun,
	IconUser,
	IconWarning,
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
							<IconArrowDown />
						</Flex.Col>
						<Flex.Col>
							<IconArrowLeft />
						</Flex.Col>
						<Flex.Col>
							<IconArrowRight />
						</Flex.Col>
						<Flex.Col>
							<IconArrowUp />
						</Flex.Col>
					</Flex>
				</Flex.Col>
				<Flex.Col col={{ xs: 4 }}>
					<h2>Caret</h2>
					<Flex>
						<Flex.Col>
							<IconCaretDown />
						</Flex.Col>
						<Flex.Col>
							<IconCaretLeft />
						</Flex.Col>
						<Flex.Col>
							<IconCaretRight />
						</Flex.Col>
						<Flex.Col>
							<IconCaretUp />
						</Flex.Col>
					</Flex>
				</Flex.Col>
				<Flex.Col col={{ xs: 4 }}>
					<h2>Dbl Caret</h2>
					<Flex>
						<Flex.Col>
							<IconDoubleCaretDown />
						</Flex.Col>
						<Flex.Col>
							<IconDoubleCaretLeft />
						</Flex.Col>
						<Flex.Col>
							<IconDoubleCaretRight />
						</Flex.Col>
						<Flex.Col>
							<IconDoubleCaretUp />
						</Flex.Col>
					</Flex>
				</Flex.Col>
				<Flex.Col col={{ xs: 6 }}>
					<h1>Status</h1>
					<Flex>
						<Flex.Col>
							<IconCompleted />
						</Flex.Col>
						<Flex.Col>
							<IconDanger />
						</Flex.Col>
						<Flex.Col>
							<IconWarning />
						</Flex.Col>
						<Flex.Col>
							<IconInfo />
						</Flex.Col>
						<Flex.Col>
							<IconMoon />
						</Flex.Col>
						<Flex.Col>
							<IconSun />
						</Flex.Col>
					</Flex>
				</Flex.Col>
				<Flex.Col col={{ xs: 6 }}>
					<h1>Input (Helpers / preffixes / suffixes)</h1>
					<Flex>
						<Flex.Col>
							<IconSearch />
						</Flex.Col>
						<Flex.Col>
							<IconCalendar />
						</Flex.Col>
						<Flex.Col>
							<IconClock />
						</Flex.Col>
						<Flex.Col>
							<IconLock />
						</Flex.Col>
						<Flex.Col>
							<IconLockUnlocked />
						</Flex.Col>
						<Flex.Col>
							<IconMail />
						</Flex.Col>
						<Flex.Col>
							<IconUser />
						</Flex.Col>
					</Flex>
				</Flex.Col>
				<Flex.Col col={{ xs: 12 }}>
					<h1>Other</h1>
					<Flex>
						<Flex.Col>
							<IconEye />
						</Flex.Col>
						<Flex.Col>
							<IconEyeCrossed />
						</Flex.Col>
						<Flex.Col>
							<IconCheck />
						</Flex.Col>
						<Flex.Col>
							<IconCheckOutlined />
						</Flex.Col>
						<Flex.Col>
							<IconClose />
						</Flex.Col>
						<Flex.Col>
							<IconCloseOutlined />
						</Flex.Col>
						<Flex.Col>
							<IconHamburger />
						</Flex.Col>
						<Flex.Col>
							<IconMinus />
						</Flex.Col>
						<Flex.Col>
							<IconMoreVertical />
						</Flex.Col>
						<Flex.Col>
							<IconMore />
						</Flex.Col>
						<Flex.Col>
							<IconPlus />
						</Flex.Col>
						<Flex.Col>
							<IconSettings />
						</Flex.Col>
						<Flex.Col>
							<IconMailOpened />
						</Flex.Col>
					</Flex>
				</Flex.Col>
			</Flex>
		</div>
	);
};

export default IconsPage;

import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SideBarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
	const { onOpen } = useSidebarDrawer()

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	})

	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1480}
			h="20"
			mx="auto"
			mt="4"
         px="4"
			align="center"
		>
			{!isWideVersion && (
				<IconButton
					icon={<Icon as={RiMenuLine} />}
					aria-label="Open navigation"
					fontSize="24"
					variant="unstyled"
					onClick={onOpen}
					mr="2"
				></IconButton>
			)}
			<Logo />

			{isWideVersion && <SearchBox />}

			<Flex align="center" ml="auto">
				<NotificationsNav />

				<Profile showProfileData={isWideVersion} />
			</Flex>
		</Flex>
	)
}

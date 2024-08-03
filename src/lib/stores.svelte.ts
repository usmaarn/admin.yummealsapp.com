

export function sidebarStore(initialValue=false){
	let isOpen = $state(initialValue);

	return{
		isOpen,
		onOpen: () => isOpen = true,
		onClose: () => isOpen = false,
		onToggle: () => isOpen = !isOpen,
	}
}
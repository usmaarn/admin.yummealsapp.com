// place files you want to import through the `$lib` alias in this folder.

export function flexRender<TProps extends object>(
	Comp: ((props: TProps) => string) | string | undefined,
	props: TProps
) {
	if (!Comp) {
		return "";
	}

	return typeof Comp === "function" ? Comp(props) : Comp;
}
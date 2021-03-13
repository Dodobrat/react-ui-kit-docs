import { useStateHistory } from "@dodobrat/react-ui-kit";
import React from "react";

const HooksPage = () => {
	const { state, set, undo, redo, clear, canUndo, canRedo } = useStateHistory({});

	// const [coords, setCoords] = useState({ x: 0, y: 0 });

	// const handler = useCallback(
	// 	({ clientX, clientY }) => {
	// 		setCoords({ x: clientX, y: clientY });
	// 	},
	// 	[setCoords]
	// );

	// useEventListener("mousemove", handler);

	// Usage is same as useState
	// const [name, setName] = useLocalStorage("name", "Bobets");

	//Boolean if user has enabled or not Reduced motion
	// const reducedMotion = useReduceMotion();

	//Boolean if user prefers dark mode
	// const prefersDark = usePrefersDarkMode();

	//pass ref and handler
	// useOnClickOutside(titleRef, () => console.log("outside"));

	return (
		<div>
			<br />
			<h1>State History Example</h1>
			<button onClick={undo} disabled={!canUndo}>
				Undo
			</button>
			<button onClick={redo} disabled={!canRedo}>
				Redo
			</button>
			<button onClick={clear}>Clear</button>

			<div className='grid' style={{ display: "flex", flexWrap: "wrap" }}>
				{((blocks, i, len) => {
					while (++i <= len) {
						const index = i;
						blocks.push(
							<div
								onClick={() => set({ ...state, [index]: !state[index] })}
								key={i}
								style={{
									height: "1rem",
									width: "1rem",
									background: state[index] ? "blue" : "grey",
									margin: "0.125rem",
								}}
							/>
						);
					}
					return blocks;
				})([], 0, 625)}
			</div>
		</div>
	);
};

export default HooksPage;

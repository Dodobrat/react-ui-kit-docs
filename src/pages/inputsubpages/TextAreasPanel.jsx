import { TextArea, TextAreaComponent } from "@dodobrat/react-ui-kit";
import React from "react";

const TextAreasPanel = () => {
	return (
		<div>
			<h1>TextArea Component (Limited customization)</h1>
			<TextAreaComponent placeholder='XL Only Input' sizing='xl' flavor='flat' pigment='info' />
			<br />
			<TextAreaComponent placeholder='Default Only Input' />
			<br />
			<TextAreaComponent placeholder='Seamless Only Input' seamless />
			<br />
			<h1>TextArea</h1>
			<TextArea
				pigment='info'
				isClearable
				disableWhileLoading={false}
				isLoading
				seamless
				maxLength='250'
				placeholder='Enter message here'
				defaultValue='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'></TextArea>
			<br />
			<TextArea
				pigment='info'
				isClearable
				disableWhileLoading={false}
				isLoading
				flavor='flat'
				maxLength='500'
				placeholder='Enter message here'
				defaultValue='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore eum distinctio doloribus magnam alias ex. Recusandae at
				distinctio delectus expedita error veritatis reiciendis facilis hic est?'></TextArea>
			<br />
			<TextArea
				placeholder='Enter message here'
				defaultValue='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore eum distinctio doloribus magnam alias ex. Recusandae at
				distinctio delectus expedita error veritatis reiciendis facilis hic est? Magnam et expedita consectetur eaque ipsa?'></TextArea>
		</div>
	);
};

export default TextAreasPanel;

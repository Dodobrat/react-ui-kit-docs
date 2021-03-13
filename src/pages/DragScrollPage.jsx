import { DragScroll } from "@dodobrat/react-ui-kit";
import React from "react";

const DragScrollPage = () => {
	return (
		<div>
			<h1>DragScroll Container (Horizontal)</h1>
			<DragScroll>
				<div className='drag-container'>
					{(() => {
						const blocks = Array(40)
							.fill()
							.map(() => Math.round(Math.random() * 40));

						return blocks.map((block, idx) => (
							<div key={idx} className='drag' onClick={() => console.log(block, idx)}>
								{idx}
							</div>
						));
					})()}
				</div>
			</DragScroll>
			<h1>DragScroll Container (Vertical)</h1>
			<DragScroll vertical horizontal={false}>
				<div className='drag-container vertical'>
					{(() => {
						const blocks = Array(40)
							.fill()
							.map(() => Math.round(Math.random() * 40));

						return blocks.map((block, idx) => (
							<div key={idx} className='drag' onClick={() => console.log(block, idx)}>
								{idx}
							</div>
						));
					})()}
				</div>
			</DragScroll>
		</div>
	);
};

export default DragScrollPage;

import { useState } from "react";
import data from "./data";
const Accordian = () => {
    const [selectedId, setSelectedId]= useState(false);
    const [multiSelection, SetMultiSelection]= useState(false)
    const handleSingleSelection = (currentId) => {
			// console.log(currentId)
			setSelectedId(currentId === selectedId ? false : currentId);
		}
    const handleMultiSelection =(currentId)=>{
        
    }
	return (
		<div className="border border-black w-6/12 flex flex-col">
			<button
				onClick={()=> SetMultiSelection(!multiSelection)}
				className="m-2 p-2 border border-gray-400 bg-blue-300 rounded-lg">
				EnableMultiSelection
			</button>
			{data.map((data) => {
				return (
					<div key={data.id} className="bg-blue-700 m-2 p-2">
						<h3
							className="text-xl text-white font-bold cursor-pointer"
							onClick={() => multiSelection ? handleMultiSelection(data.id) : handleSingleSelection(data.id)}>
							{data.question}
							<span>⬇️</span>
						</h3>

						{selectedId === data.id && (
							<p className="text-white">{data.answer}</p>
						)}
					</div>
				);
			})}
		</div>
	);
};
export default Accordian;

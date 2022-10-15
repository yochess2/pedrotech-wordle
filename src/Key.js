import React, { useContext } from 'react'
import { AppContext } from "./App"

const Key = ({keyValue, bigKey, disabled}) => {
	const { onDelete, onSelectLetter, onEnter } = useContext(AppContext)

	return (
		<div 
			className="key" 
			id={bigKey ? "big" : disabled && "disabled"} 
			onClick={selectLetter}
		>
			{keyValue}
		</div>
	)

	function selectLetter(keyvalue) {
		if (keyValue === "ENTER") {
			onEnter()
		} else if (keyValue === "DELETE") {
			onDelete()
		} else {
			onSelectLetter(keyValue)
		}
	}
}

export default Key
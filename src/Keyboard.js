import React, { useEffect, useCallback, useContext, useMemo } from 'react'
import Key from "./Key"
import { AppContext } from "./App"

const Keyboard = () => {
	const { onSelectLetter, onDelete, onEnter, disabledLetters } = useContext(AppContext)

	const keys1 = useMemo(() => {
		return ["Q","W","E","R","T","Y","U","I","O","P"]
	}, [])
	const keys2 = useMemo(() => {
		return ["A","S","D","F","G","H","J","K","L"]
	}, [])
	const keys3 = useMemo(() => {
		return ["Z","X","C","V","B","N","M"]
	}, [])

	const handleKeyboard = useCallback((event) => {
		if (event.key === "Enter") {
			onEnter()
		} else if (event.key === "Backspace") {
			onDelete()
		} else {
			[...keys1, ...keys2, ...keys3].forEach(key => {
				if (event.key.toLowerCase() === key.toLowerCase()) {
					onSelectLetter(key)
				}
			})
		}
	}, [keys1, keys2, keys3, onDelete, onEnter, onSelectLetter])


	useEffect(() => {
		document.addEventListener("keydown", handleKeyboard)
		return () => {
			document.removeEventListener("keydown", handleKeyboard)
		}
	}, [handleKeyboard])

	return (
		<div className="keyboard" onKeyDown={handleKeyboard} >
			<div className="line1">
				{keys1.map((key) =>{
					return <Key keyValue={key} disabled={disabledLetters.includes(key)} />
				})}
			</div>
			<div className="line2">
				{keys2.map((key) =>{
					return <Key keyValue={key} disabled={disabledLetters.includes(key)} />
				})}
			</div>
			<div className="line3">
				<Key keyValue={"ENTER"} bigKey={true} />
				{keys3.map((key) =>{
					return <Key keyValue={key} disabled={disabledLetters.includes(key)} />
				})}
				<Key keyValue={"DELETE"} bigKey={true} />
			</div>
		</div>
	)
}

export default Keyboard
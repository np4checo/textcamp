import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import './TextCamp.css';

const TextCamp = ({}) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config =
		{
			readonly: false,
			height: 400,
		};
		const handleSave = () => {
			localStorage.setItem("document", content);
		};
		const handleLoad = () => {
			setContent(localStorage.getItem("document"))
		};

	return (
		<>
			<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} 
			onBlur={(newContent) => setContent(newContent)}
			/>
			<div className="btns">
				<button onClick={handleSave}>Gravar</button>
				<button onClick={handleLoad}>Carregar último</button> 
				<button onClick={() =>setContent("")}>Novo documento</button>
        	</div>
		</>
	);
};

export default TextCamp;
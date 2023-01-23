import React from "react";

const CustomHeader = ({ children, height }) => {
	const componentHeight = height ? height : 200;
	return <div style={{ height: componentHeight }}>{children}</div>;
};

export default CustomHeader;

import { Grid } from "@mui/material/";
import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import TopRow from "./TopRow";

const Navigation = () => {
	return (
		<Grid container direction="row">
			<CustomDiv padding="0px 5p%" border="1px" width="100%">
				<TopRow></TopRow>
			</CustomDiv>
		</Grid>
	);
};

export default Navigation;

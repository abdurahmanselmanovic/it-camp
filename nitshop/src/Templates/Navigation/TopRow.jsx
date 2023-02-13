import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Text from "../../components/Text/Text";
import { getScreenWidth } from "../../util/helpers";

const TopRow = () => {
	const screenWidth = getScreenWidth;
	console.log(screenWidth());
	return (
		<CustomDiv
			bgColor={colors.secondColor}
			display="flex"
			width="100%"
			height="30px"
			padding="0px 5%"
			border="0px"
		>
			<Grid container direction="row">
				<Grid item md={6} lg={6}>
					<CustomDiv
						display="flex"
						alignItems="flex-start"
						justifyItems="flex-start"
					>
						<PhoneIcon
							style={{
								fontSize: fontSize.normal,
							}}
						/>
						<Text fontSize={fontSize.medium}>+381 64 9388311</Text>
					</CustomDiv>
				</Grid>{" "}
				<CustomDiv display="flex" alignItems="center" margin="0px 0px 0px 5px">
					<EmailIcon
						style={{
							fontSize: fontSize.normal,
						}}
					/>
					<Text fontSize={fontSize.small}>+381 64 9388311</Text>
				</CustomDiv>
				<Grid item md={6} lg={6}>
					<CustomDiv width="50%" border="0px" bgColor="inherit"></CustomDiv>
				</Grid>
			</Grid>
		</CustomDiv>
	);
};

export default TopRow;

import React, { Component } from "react";
import { Text } from "react-native";
import { Button, Icon } from "native-base";
import { connect } from 'react-redux';

import ScreenContent from "../Component/ScreenContent"

class SurveyList extends Component {
	/**
	 * When we click on the "Add a beer" button
	 */
	handleAddSurveyButtonPress = () => {
		this.props.navigation.navigate("SurveyAdd");
	};

	render() {
		return (
			<ScreenContent>
				<Text>Mes Surveys</Text>
				<Button
					rounded
					bordered
					onPress={this.handleAddSurveyButtonPress}
				>
					<Icon name="add" />
					<Text>ajouter un survey</Text>
				</Button>
			</ScreenContent>
		);
	}
}

export default SurveyList;
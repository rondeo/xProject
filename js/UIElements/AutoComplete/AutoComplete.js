import React from "react";
import styles from "./AutoCompleteStyle";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import {TextAreaInput} from "js/UIElements";


class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: ""};
    }

    updateFieldValue = params => {
        let param = {};
        param[this.props.name] = {...this.props.value, ...params};
        this.props.updateFieldValue(param);
        if (this.state.error != "") {
            this.setState({error: ""});
        }
    };

    removeField = () => {
        let param = {};
        param[this.props.name] = {};
        this.props.updateFieldValue(param);
    };

    render() {
        const {showRemove, label, labelStyle, value} = this.props;
        const {error, disabled} = this.state;

        return (
            <View style={styles.container}>
                {!!label ? (
                    <Text style={[styles.label, labelStyle]}>{label}</Text>
                ) : null}

                <View style={styles.containerTelephone}>


                    <TextAreaInput
                        containerCustomStyle={styles.inputContainer}
                        value={value.number}
                        inputTextCustomStyle={styles.inputText}
                        name="number"
                        updateFieldValue={this.updateFieldValue}

                    />
                </View>
                {showRemove && (
                    <View style={styles.removeViewContainer}>
                        <TouchableWithoutFeedback onPress={() => this.removeField()}>
                            <Text style={styles.removeView}>{`Remove`}</Text>
                        </TouchableWithoutFeedback>
                    </View>
                )}
                {!!error && !disabled ? (
                    <View style={[styles.errorView, errorViewStyle]}>
                        <Text style={styles.error}>{error}</Text>
                    </View>
                ) : null}
            </View>
        );
    }
}

AutoComplete.defaultProps = {
    showRemove: false
};

export default AutoComplete;

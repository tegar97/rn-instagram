import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import firebase from "firebase";
export class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onSignUp = this.onSignIn.bind(this);
  }
  onSignIn() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button onPress={() => this.onSignIn()} title="Sign Up" />
      </View>
    );
  }
}

export default LoginScreen;

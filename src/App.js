import React from "react";
import "./styles.css";

export default class App extends React.Component {
  mensagem = () => {
    return <h1>Passando para próxima etapa do curso!</h1>;
  };
  render() {
    return <div>{this.mensagem()}</div>;
  }
}

import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import PrimeraApp from "./PrimeraApp";

const divRoot = document.querySelector("#root");

// ReactDOM.render(<PrimeraApp saludo={123}/>, divRoot);
ReactDOM.render(<PrimeraApp saludo="hola soy juan"/>, divRoot);

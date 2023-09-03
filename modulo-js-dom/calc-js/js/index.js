import { input } from "../js/variaveis.js"
import { switchTheme } from "./darkTheme.js"
import { buttonCopyClipboard, charKey, clearCalc, equalKeyResult, keyDown } from "./teclasCalculadora.js"

input.addEventListener("keydown", keyDown)

document.querySelectorAll(".charKey").forEach( charKey )

document.getElementById("clear").addEventListener("click", clearCalc)

document.getElementById("equal").addEventListener("click", equalKeyResult)

document.getElementById("themeSwitcher").addEventListener("click", switchTheme)

document.getElementById("copyToClipboard").addEventListener("click", buttonCopyClipboard)


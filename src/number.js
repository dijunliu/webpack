export default function number() {
    const div = document.createElement("button")
    div.setAttribute("id", "number")
    div.innerHTML = 999
    document.body.append(div)
}
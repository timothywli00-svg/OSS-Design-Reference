const KEY = "7cloud-oss-gate"
const PASS = "b644688e8adb3c824513c17ba543d890bec5dd4e331809bd808065310a098cf4"

async function digest(user, password) {
  const bytes = new TextEncoder().encode(`${user.trim()}\n${password}`)
  const buf = await crypto.subtle.digest("SHA-256", bytes)
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("")
}

const form = document.getElementById("gate-form")
const error = document.getElementById("gate-error")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  const data = new FormData(form)
  const hash = await digest(String(data.get("user") || ""), String(data.get("password") || ""))
  if (hash !== PASS) {
    error.hidden = false
    return
  }
  sessionStorage.setItem(KEY, "1")
  document.documentElement.removeAttribute("data-locked")
})

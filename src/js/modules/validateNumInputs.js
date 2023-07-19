export default function validateNumInput(...inputs) {
    inputs.forEach(input => input.addEventListener('input', () => input.value = input.value.replace(/\D/gm, '')))
}
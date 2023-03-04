// const body1: HTMLBodyElement | null
const body1 = document.querySelector("body");

// ! Non-null assertion (afirma que é um valor não nulo)
const body2 = document.querySelector("body")!; // HTMLBodyElement

// Type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;

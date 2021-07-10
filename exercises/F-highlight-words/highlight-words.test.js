/* ======= TESTS - DO NOT MODIFY ===== 
There are some tests in this file that will help you work out if your code is working.
*/

const {default: userEvent} = require("@testing-library/user-event");

test("Check DOM resembles correct output for initial setup", () => {
  // do this so students can use element.innerText which jsdom does not implement
  Object.defineProperty(global.window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
      if (this.tagName === "OPTION") {
        this.value = value;
      }
    },
  });

  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");

  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
  const colours = ["yellow", "green", "blue", "none"];

  target.highlightWords(paragraph, colours);

  let options = document.querySelectorAll("select > option");
  expect(options.length).toEqual(4);
  expect(options[0].value) === "yellow";
  // ...

  let loremElement = findElementContaining(document, "span", "Lorem");
  let ipsumElement = findElementContaining(document, "span", "ipsum");

  // TODO: Maybe use a library to resolve CSS colours to a canonical form
  expect(loremElement.style.backgroundColor).toEqual("");
  expect(ipsumElement.style.backgroundColor).toEqual("");

  userEvent.click(loremElement);
  expect(loremElement.style.backgroundColor).toEqual("yellow");
  expect(ipsumElement.style.backgroundColor).toEqual("");

  userEvent.click(ipsumElement);
  expect(loremElement.style.backgroundColor).toEqual("yellow");
  expect(ipsumElement.style.backgroundColor).toEqual("yellow");

  userEvent.click(loremElement);
  expect(loremElement.style.backgroundColor).toEqual("");
  expect(ipsumElement.style.backgroundColor).toEqual("yellow");
});

// I tried using XPath along the lines of:
// document.evaluate("//span[contains(text(), 'Lorem')]", document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null).iterateNext()
// but it consistently returned no elements, even though this worked in the real browser.
// Accordingly, do some brute-force searching.
function findElementContaining(document, tagName, text) {
  const allElements = document.querySelectorAll("*");
  for (const element of allElements) {
    // Skip non-matching tags, because textContent is recursive.
    if (element.tagName.toLowerCase() !== tagName) {
      continue;
    }
    if (element.textContent.includes(text)) {
      return element;
    }
  }
}
const Aeact = function () {};

Aeact.prototype.createElement = function (type, props, children) {
  const aeactElement = {
    type,
    ...props,
  };
  if (typeof children === "string") {
    aeactElement.text = children;
  }

  return aeactElement;
};

Aeact.prototype.render = function (element, containner) {
  const node = document.createElement(element.type);
  const textNode = document.createTextNode(element.text);
  node.appendChild(textNode);
  containner.appendChild(node);
};

export default new Aeact();

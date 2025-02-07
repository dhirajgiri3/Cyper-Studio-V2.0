export const createRipples = (event, button) => {
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const rect = button.getBoundingClientRect();

  circle.style.cssText = `
    width: ${diameter}px;
    height: ${diameter}px;
    left: ${event.clientX - rect.left - diameter / 2}px;
    top: ${event.clientY - rect.top - diameter / 2}px;
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-effect 0.6s linear forwards;
    background: rgba(255, 255, 255, 0.35);
    pointer-events: none;
  `;

  // Remove existing ripple
  const existingRipple = button.querySelector(".ripple");
  existingRipple?.remove();

  circle.classList.add("ripple");
  button.appendChild(circle);

  // Cleanup
  circle.addEventListener('animationend', () => circle.remove());
};

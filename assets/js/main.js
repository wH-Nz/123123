document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', async () => {
    const targetId = button.getAttribute('data-copy-target');
    const codeElement = document.querySelector(`#${targetId} code`);

    if (!codeElement) return;

    const originalText = button.textContent;
    try {
      await navigator.clipboard.writeText(codeElement.innerText);
      button.textContent = 'Copied!';
    } catch {
      button.textContent = 'Copy failed';
    }

    setTimeout(() => {
      button.textContent = originalText;
    }, 1200);
  });
});

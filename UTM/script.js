document.getElementById('utm-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const baseUrl = document.getElementById('base-url').value;
  const campaign = document.getElementById('campaign').value;
  const source = document.getElementById('source').value;
  const content = document.getElementById('content').value;
  const medium = document.getElementById('medium').value;
  const term = document.getElementById('term').value;

  try {
    let url = new URL(baseUrl);
    if (source) url.searchParams.set('utm_source', source);
    if (campaign) url.searchParams.set('utm_campaign', campaign);  
    if (content) url.searchParams.set('utm_content', content);
    if (medium) url.searchParams.set('utm_medium', medium);
    if (term) url.searchParams.set('utm_term', term);

    document.getElementById('result-url').value = url.toString();
  } catch (error) {
    alert('Ошибка: Введите корректный URL (например: https://example.com)');
    document.getElementById('base-url').focus();
  }
});

// Эффект печатающегося текста
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById("typing-text");
  const text = typingElement.getAttribute("data-text");
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, 100); // скорость печати (мс)
    }
  }

  typeChar();
});



document.getElementById('copy-button').addEventListener('click', async function() {
  const textArea = document.getElementById('result-url');
  const url = textArea.value;
  
  try {
    await navigator.clipboard.writeText(url);
    // Можно добавить уведомление об успешном копировании
    console.log('URL скопирован в буфер обмена');
  } catch (err) {
    // Fallback для старых браузеров
    textArea.select();
    document.execCommand('copy');
  }
});

document.getElementById('reset-button').addEventListener('click', function() {
  document.getElementById('utm-form').reset();       // очистка формы
  document.getElementById('result-url').value = "";  // очистка результата
});

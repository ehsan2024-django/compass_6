window.onload = function() {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = 'این پیام با جاوااسکریپت تغییر کرد!';
  
  messageDiv.addEventListener('click', function() {
      this.textContent = 'روی پیام کلیک شد!';
      this.style.backgroundColor = '#00cc66';
  });

  console.log('JavaScript loaded and running!');
};
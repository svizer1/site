document.getElementById('authButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    showUploadSection();
});

window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        showUploadSection();
    }
};

function showUploadSection() {
    document.getElementById('authSection').style.display = 'none';
    document.getElementById('uploadSection').style.display = 'block';
}

document.getElementById('resize').addEventListener('click', function() {
    const fileInput = document.getElementById('upload');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const formatSelect = document.getElementById('format');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const resultImage = document.getElementById('result');
    const resultContainer = document.querySelector('.result');
    const message = document.querySelector('.message');

    const file = fileInput.files[0];
    if (!file) {
        alert('Пожалуйста, загрузите изображение.');
        return;
    }

    const img = new Image();
    img.onload = function() {
        const width = parseInt(widthInput.value) || img.width;
        const height = parseInt(heightInput.value) || img.height;

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        const selectedFormat = formatSelect.value;
        resultImage.src = canvas.toDataURL(selectedFormat);
        resultContainer.style.display = 'block';
        message.textContent = 'Результат готов!';
    };
    img.src = URL.createObjectURL(file);
});

// Кнопка "Скачать"
document.getElementById('download').addEventListener('click', function() {
    const resultImage = document.getElementById('result').src;
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = 'shadow_client_image.png'; // Имя файла для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Кнопка "Поддержка"
document.getElementById('support').addEventListener('click', function() {
    window.open('https://funpay.com/users/8577948/', '_blank');
});

// Кнопка YouTube
document.getElementById('ytButton').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=I3XPCz1TJTI', '_blank');
});

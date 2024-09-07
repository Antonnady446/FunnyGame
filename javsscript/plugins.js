window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    
    if (username) {
        document.getElementById('greeting').textContent = `Hello, ${username}`;
    }
    document.getElementById('questionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = document.getElementById('questionInput').value.trim().toUpperCase();
        
        if (answer === 'YES') {
            alert('جدع روح كمل مذاكرة لل DOM , BOM بقي !');
        } else if (answer === 'NO') {
            alert(' مش مهم احنا كفاية !!');
        } else {
            alert(' هو انا عيل معاك يسطا ما قولتلك YES OR NO');
        }
    });
};



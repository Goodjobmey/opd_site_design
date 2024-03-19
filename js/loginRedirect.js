function redirect() {
    $.ajax({
        url: '/login', //???
        type: 'POST',
        data: {
            username: 'your_username',
            password: 'your_password'
        },
        success: function (response) {
            if (response.role === 'admin') {
                window.location.href = 'adminpage.html';
            } else if (response.role === 'expert') {
                window.location.href = 'expertpage.html';
            } else if (response.role === 'user') {
                window.location.href = 'account.html';
            } else if (response.role === 'consultant') {
                window.location.href = 'account.html';
            } else {
                console.log('это кто')
            }
        },
        error: function (error) {
            console.log('ошибка входа', error);
        }
    });
}
$(document).ready(function() {
    $.ajax({
        url: '/get-users', // здесь получаю список пользователей
        type: 'GET',
        success: function(data) {
            const userSelect = $('#userSelect');
            userSelect.empty(); //Очищаю список, чтобы не было дубликатов
            data.forEach(user => {
                userSelect.append(<option value="${user.name}">${user.name}</option>);
            });
        }
    });
});

function setUserRole() {
    const username = $('#userSelect').val(); //я здесь сделала по username, можно переделать на id
    const role = $('#roleSelect').val();
    // Отправляю пару пользователь-роль
    $.ajax({
        url: '/add-role',
        type: 'POST',
        data: { user: username, newRole: role },
        success: function(response) {
            alert(response);
        }
    });
}
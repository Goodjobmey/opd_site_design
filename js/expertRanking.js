$(document).ready(function() {
    // Здесь получаю список профессий
    $.ajax({
        url: '/get-jobs',
        type: 'GET',
        success: function(data) {
            const jobSelect = $('#jobSelect');
            jobSelect.empty(); //Очищаю список, чтобы не было дубликатов
            data.forEach(data => {
                jobSelect.append(<option value="${data.job}">${data.job}</option>);
            });
        }
    });
    // Здесь получаю список пвк
    $.ajax({
        url: '/get-pvk', //здесь просто названия пвк
        type: 'GET',
        success: function(data) {
            const pvkSelect = $('#pvkSelect');
            pvkSelect.empty(); //Очищаю список, чтобы не было дубликатов
            data.forEach(pvk => {
                pvkSelect.append(<option value="${pvk.id}">${pvk.name}</option>);
            });
        }
    });
});

function setJobRanking() {
    const job = $('#jobSelect').val(); //я здесь сделала по username, можно переделать на id
    const pvk = $('#pvkSelect').val();
    const grade = $('#gradeInput').val();

    $.ajax({
        url: '/add-grade',
        type: 'POST',
        data: { job: job, pvk: pvk, grade: grade},
        success: function(response) {
            alert(response);
        }
    });
}
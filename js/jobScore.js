function getProfessions() {
    $.ajax({
        url: '/get-jobs', //здесь получаю json
        type: 'GET',
        success: function(data) {
            const professionsData = JSON.parse(data);
            displayJobs(professionsData);
        }
    });
}


function displayJobs(data) {
    $('.container').append('<h3>' + data.job + '</h3>');
    $.each(data.pvk, function(key, value) {
        let content = '<div class="profession">';
        content += '<h4>' + key + '</h4>';
        content += '<p>' + value.name + '</p>';
        content += '<p>' + value.grade + '</p>'; //я считаю, что ты с бэка сразу отправишь среднее
        content += '</div class="profession">';

        $('.container').append(content);
    });
}
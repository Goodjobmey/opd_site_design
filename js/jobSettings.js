function addJob() {
    const name = $('jobInput').val();
    $.ajax({
        url: '/add-job',
        type: 'POST',
        data: { title: name, grade: 0},
        success: function(response) {
            alert(response);
        }
    });
}
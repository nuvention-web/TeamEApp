// Programlist data array for filling in info
var programListData = [];

// Dom Ready =============================================

$(document).ready(function() {
    renderPrograms();
});

// Functions =============================================

// Render programs
function renderPrograms() {
    var content = '';
    var entries = [];

    $.getJSON('/programs/programlist', function(data) {
        programListData = data;

        $.each(data, function() {
            var programTitle = this.program;
            var programLocation = this.location;
            var days = '';
            var numdays = (this.days).length;
            $.each(this.days, function(el, i) {
                if (el != numdays - 1)
                    days += (i + ', ');
                else
                    days += i;
            });

            var programDays = days;
            var programHours = this.hours;
            
            var classes = '';
            var numclasses = (this.classes).length;
            $.each(this.classes, function(el, i) {
                if (el != numclasses - 1)
                    classes += (i + ', ');
                else
                    classes += i
            });
            var programClasses = classes;
            
            (this.contact != '') ? programContact = '<a href=\"mailto:' + this.contact + '\">' + this.contact + '</a>' : programContact = '';
            var programLink = '<a href=\"' + this.link + '\">Website</a>';
            var programCommitment = this.commitment;

            var template = '<div class=\"col s4\"><div class=\"card\"> ';
            if (programTitle != '') 
                template += '<h3>' + programTitle + '</h3>';
            if (programDays != '') 
                template += '<h4>' + programDays;
                if (programHours != '')
                    template += ', ' + programHours;
                template += '</h4>';
            if (programLocation != '')
                template += '<h4>' + programLocation + '</h4>';
            if (programClasses != '')
                template +='<p> Classes: ' + programClasses + '</p>';
            if (programCommitment != '')
                template += '<p> Commitment: '  + programCommitment + '</p>';
            if (programContact != '')
                template += '<p> Contact: ' + programContact + '</p>'; 
            template += programLink + '</div></div>';
            entries.push(template);
            

        });

        while(entries.length != 0) {
            var i = 0;
            var row = "<div class=\"row flexbox\">";
            while (i < 3 && entries.length != 0) {
                row += entries.pop();
                i += 1;
            }
            row += "</div>";
            content += row;
            
        }
        console.log(content);
        $('#programInfo').append(content);
    });
}
















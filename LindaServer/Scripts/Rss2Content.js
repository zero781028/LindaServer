for (i = 1; i <= maxLength; i++) {
    document.write('<div data-role="page" id="Rarticle' + i + '">' +
    '  <div data-role="header" data-position="inline">' +
    '    <a href="#page1" data-role="button" data-icon="home" data-back="true">Home</a>' +
    '    <h1 id="RarticleHeader' + i + '">&nbsp;</h1>' +
    '    <a href="#" id="RopenButton' + i + '" data-role="button" data-icon="plus"' +
    '      class="ui-btn-right" rel="external">Open</a>' +
    '  </div>' + '  <div data-role="content">' +
    '    <div id="RarticleContent' + i + '" class="articleContent"></div>' +
    '    <div data-role="controlgroup" data-type="horizontal">' +
    '      <a href="#Rarticle' + String(i - 1) +
    '" data-role="button" data-icon="arrow-l"' +
    '        data-inline="true" class="prevButton">Prev</a>' +
    '      <a href="#Rarticle' + String(i + 1) +
    '" data-role="button" data-icon="arrow-r"' +
    '        data-inline="true" class="nextButton" data-iconpos="right">Next</a>' +
    '    </div>' +
    '  </div>' +
    '</div>');
} /* JSONP */
$(function () {
    getOnlineFeed2('http://tw.news.yahoo.com/rss/disease');
});
/* functions */
var listEntries2 = function (json) {
    if (!json.responseData.feed.entries) return false;
    //$('#widgetTitle').text(json.responseData.feed.title);
    var articleLength = json.responseData.feed.entries.length;
    articleLength = (articleLength > maxLength) ? maxLength : articleLength;
    for (var i = 1; i <= articleLength; i++) {
        var entry = json.responseData.feed.entries[i - 1];
        $('#Rlink' + i).text(entry.title);
        $('#RarticleHeader' + i).text(entry.title);
        $('#RopenButton' + i).attr('href', entry.link);
        $('#RarticleContent' + i).append(entry.content);
    }
    $('#Rarticle1 .prevButton').remove();
    $('#Rarticle' + articleLength + ' .nextButton').remove();
    if (articleLength < maxLength) {
        for (i = articleLength + 1; i <= maxLength; i++) {
            $('#Rlist' + i).remove();
            $('#Rarticle' + i).remove();
        }
    }
};
var getOnlineFeed2 = function (url) {
    var script = document.createElement('script');
    script.setAttribute('src', 'http://ajax.googleapis.com/ajax/services/feed/load?callback=listEntries2&hl=ja&output=json-in-script&q=' + encodeURIComponent(url) + '&v=1.0&num=' + maxLength);
    script.setAttribute('type', 'text/javascript');
    document.documentElement.firstChild.appendChild(script);
};

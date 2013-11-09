var maxLength = 5; /* writing HTML */
document.write('<ul data-role="listview" id="articleList">');
for (var i = 1; i <= maxLength; i++) {
    document.write('<li id="list' + i + '" data-icon="false"><a href="#article' + i + '" id="link' + i + '">&nbsp;</a></li>');
}
document.write('    </ul>');
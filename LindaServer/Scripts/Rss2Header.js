var maxLength = 5; /* writing HTML */
document.write('<ul data-role="listview" id="RarticleList">');
for (var i = 1; i <= maxLength; i++) {
    document.write('<li id="Rlist' + i + '" data-icon="false"><a href="#Rarticle' + i + '" id="Rlink' + i + '">&nbsp;</a></li>');
}
document.write('    </ul>');
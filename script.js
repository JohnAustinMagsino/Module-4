/*
Solution of assignment 4:

Expected output:

Hello Austin
Good Bye John
Good Bye Precious
Good Bye Shawn
Hello Jealine
Hello Ramil
Hello Olivia
Hello Kim
Hello Jane
Good Bye Jimmy
*/

(function() {
    var names = ["Austin", "John", "Precious", "Shawn", "Jealine", "Ramil", "Olivia", "Kim", "Jane", "Jimmy"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();

function talk(){
    var know = {
    "Hi":"Hello! How can I help you",
    "Who are you" : "Hello, Shravya here",
    "How are you" : "Good :)",
    "Your college name" : "Snist",
    "Your favourite Cricket Team" : "My favorite cricket team is Mumbai Indians",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }
if (document.getElementById("content")) {
    if (localStorage.getItem("content") === "visible"){
      document.getElementById("content").style.visibility = "visible";
    } else {
      document.getElementById("content").style.visibility = "collapse";
    }
}

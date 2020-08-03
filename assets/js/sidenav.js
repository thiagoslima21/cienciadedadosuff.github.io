function sideNavbar(){
    headers = document.getElementsByTagName("h2");
    blogSideBar = document.getElementById("blogSideBarContent");
    for (i = 0; i < headers.length; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var text = headers[i].textContent;
        
        a.textContent += text;

        text = encodeURIComponent(
            text
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/["',.?!]/g, '')
            );

        a.setAttribute('href', "#" + text);
        li.appendChild(a)
        blogSideBar.appendChild(li)
    }
}

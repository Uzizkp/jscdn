var links = document.getElementById('more-links');
var rlinks = document.getElementById('random-links');

function getRandom() {
    rlinks.innerHTML = '';
    for(var i = 0; i < 3; i++){
        num = Math.floor(Math.random() * friendsData.length);
        var imgUrl = friendsData[num].Avatar;
        var fname = friendsData[num].Name;
        var url = friendsData[num].Link;
        var descr = friendsData[num].Description;
        var url = friendsData[num].Link;
        var tags = '#tech';
    
        var link = document.createElement('div');
        link.setAttribute('class', 'random-link');
        var img = document.createElement('img');
        img.setAttribute('src', imgUrl);
        img.setAttribute('class', 'loaded entered');
        img.setAttribute('data-ll-status', 'loaded');
        img.setAttribute('onerror', "this.onerror=null;this.src='/blog-cn/img//curioso/5.JPG'");
        var nameTag = document.createElement('a');
        nameTag.setAttribute('href', url); 
        nameTag.setAttribute('target', "_blank");
        nameTag.setAttribute('class', 'name');
    
        nameTag.innerText = fname;
        var descrTag = document.createElement('a');
        descrTag.setAttribute('class', 'descr');
        descrTag.innerText = descr;
        link.appendChild(img);
        link.appendChild(nameTag);
        link.appendChild(descrTag);
        rlinks.appendChild(link);
      }
}
getRandom();


for(var i = 0; i < 15; i++){

    num = Math.floor(Math.random() * friendsData.length);
    var imgUrl = friendsData[num].Avatar;
    var fname = friendsData[num].Name;
    var descr = friendsData[num].Description;
    var url = friendsData[num].Link;
    var tags = '#tech';


    var link = document.createElement('div');
    link.setAttribute('class', 'more-link');
    

    var info = document.createElement('div');
    info.setAttribute('class', 'info');

    var nameTags = document.createElement('div');
    nameTags.setAttribute('class', 'nameTags');

    var img = document.createElement('img');
    img.setAttribute('src', imgUrl);
    img.setAttribute('class', 'avatar loaded entered');
    img.setAttribute('data-ll-status', 'loaded');
    img.setAttribute('onerror', "this.onerror=null;this.src='/blog-cn/img//curioso/5.JPG'");
    info.appendChild(img);

    var nameTag = document.createElement('a');
    nameTag.setAttribute('class', 'name'); 
    nameTag.setAttribute('href', url); 
    nameTag.setAttribute('target', "_blank");
    nameTag.innerText = fname;
    nameTags.appendChild(nameTag);
    var tagsTag = document.createElement('a');
    tagsTag.setAttribute('class', 'tags');
    tagsTag.innerText = tags;
    nameTags.appendChild(tagsTag);

    info.appendChild(nameTags);

    var descrTag = document.createElement('div');
    descrTag.setAttribute('class', 'descr');

    var descrTagA = document.createElement('a');
    descrTag.innerText = descr;
    descrTag.appendChild(descrTagA);

    link.appendChild(info);
    link.appendChild(descrTag);
  

    links.appendChild(link);
}
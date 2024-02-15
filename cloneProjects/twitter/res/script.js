var underlineOfForyou = document.getElementById("uoff");
var underlineOfFollowing = document.getElementById("uofF");
var forYou = document.getElementById("forYou");
var following = document.getElementById("following");
function sectioncontroller() {
    forYou.addEventListener('click', function() {
        underlineOfForyou.style.display = "block";
        underlineOfFollowing.style.display = "none";
        following.style.color = "rgba(255,255,255,.6)";
        forYou.style.color = "rgba(255,255,255,1)";
    });
    following.addEventListener('click', function() {
        underlineOfForyou.style.display = "none";
        forYou.style.color = "rgba(255,255,255,.6)";
        following.style.color = "rgba(255,255,255,1)"; underlineOfFollowing.style.display = "block";
    });;

}
sectioncontroller();

//auto repeater

function addPost(name = "Sankar Raul", userId = "sankarraul", userPicUrl = "https://i.ibb.co/w7xKPYS/FB-IMG-1672115261163.jpg", time = "21h", caption = "Hello everybody!", comments = "23K", retweets = "33K", likes = "234K", views = "985K", uploadimage = "none", ifornot) {
    const dynamicContent = document.createElement('span');
    if (uploadimage == "none") {
        dynamicContent.innerHTML = `<div class="content">
        <div class="user-pic">
        <img src="${userPicUrl}" alt="${name}" class="pic p1" />
        </div>
        <div class="c1">
        <span class="creator">${name}</span><img class="varify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/768px-Twitter_Verified_Badge.svg.png" width="15px" />
        <span class="user-id">${userId} </span><span class="time">${time}</span><span class="more"><img src="https://i.ibb.co/Mgt5fb4/dots.png"></span><br><div class="info">
        <span class="caption">${caption}</span></div>
        <div class="actions">
        <span class="action comment"> <img src="https://i.ibb.co/tmGgcwd/chat.png" class="commentPng"><span class="cc">${comments}</span></span>
        <span class="action repost"><img height="18px" width="16px" src="https://i.ibb.co/GtCb2QR/icons8-retweet-48.png"><span class="rc">${retweets}</span></span>
        <span class="action lovea"><img width="18px" class="like" src="https://i.ibb.co/nRtM8Rg/icons8-love-24.png"><span class="lc">${likes}</span></span>
        <span class="action views"><img width="12.5px" src="https://i.ibb.co/wLJtxq7/bar-graph.png"><span class="vc">${views}</span></span>
        <span class="action share"><img src="https://i.ibb.co/gR3m3dD/share.png"></span>
        </div>
        </div>
        </div>`;
    } else if (ifornot == "2nd") {
        dynamicContent.innerHTML = `            <span class="with-image">
        <div class="content">
        <div class="user-pic">
        <img src="${userPicUrl}" alt="${name}" class="pic p1" />
        <div class="col"><span></span>
        <span></span>
        </div>
        </div>

        <div class="c1">
        <span class="creator">${name}</span><img class="varify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/768px-Twitter_Verified_Badge.svg.png" width="15px" />
        <span class="user-id">${userId} </span><span class="time">${time}</span><span class="more"><img src="https://i.ibb.co/Mgt5fb4/dots.png"></span><br><div class="info">
        <span class="caption"></span></div>
        <div class="image"><img src="${uploadimage}"alt="${name}'s pic"></div>
        <div class="actions">
        <span class="action comment"> <img src="https://i.ibb.co/tmGgcwd/chat.png" class="commentPng"><span class="cc">${comments}</span></span>
        <span class="action repost"><img height="18px" width="16px" src="https://i.ibb.co/GtCb2QR/icons8-retweet-48.png"><span class="rc">${retweets}</span></span>
        <span class="action lovea"><img width="18px" class="like" src="https://i.ibb.co/nRtM8Rg/icons8-love-24.png"><span class="lc">${likes}</span></span>
        <span class="action views"><img width="12.5px" src="https://i.ibb.co/wLJtxq7/bar-graph.png"><span class="vc">${views}</span></span>
        <span class="action share"><img src="https://i.ibb.co/gR3m3dD/share.png"></span>
        </div>
        </div>
        </div>

        <div class="content forImage">
        <div class="user-pic">
        <img src="${userPicUrl}" alt="${name}" class="pic p1" />

        </div>

        <div class="c1">
        <span class="creator">${name}</span><img class="varify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/768px-Twitter_Verified_Badge.svg.png" width="15px" />
        <span class="user-id">${userId} </span><span class="time">${time}</span><span class="more"><img src="https://i.ibb.co/Mgt5fb4/dots.png"></span><br><div class="info">
        <span class="caption">${caption}</span></div>

        <div class="actions">
        <span class="action comment"> <img src="https://i.ibb.co/tmGgcwd/chat.png" class="commentPng"><span class="cc">${comments}</span></span>
        <span class="action repost"><img height="18px" width="16px" src="https://i.ibb.co/GtCb2QR/icons8-retweet-48.png"><span class="rc">${retweets}</span></span>
        <span class="action lovea"><img width="18px" class="like" src="https://i.ibb.co/nRtM8Rg/icons8-love-24.png"><span class="lc">${likes}</span></span>
        <span class="action views"><img width="12.5px" src="https://i.ibb.co/wLJtxq7/bar-graph.png"><span class="vc">${views}</span></span>
        <span class="action share"><img src="https://i.ibb.co/gR3m3dD/share.png"></span>
        </div>
        </div>
        </div>
        </span>`;
    } else if (ifornot == "1st") {
        dynamicContent.innerHTML = `
        <span class="with-image">
        <div class="content">
        <div class="user-pic">
        <img src="${userPicUrl}" alt="${name}" class="pic p1" />

        </div>

        <div class="c1">
        <span class="creator">${name}</span><img class="varify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/768px-Twitter_Verified_Badge.svg.png" width="15px" />
        <span class="user-id">${userId} </span><span class="time">${time}</span><span class="more"><img src="https://i.ibb.co/Mgt5fb4/dots.png"></span><br><div class="info">
        <span class="caption">${caption}</span></div>
        <div class="image"><img alt="${name}'s post" src="${uploadimage}"></div>
        <div class="actions">
        <span class="action comment"> <img src="https://i.ibb.co/tmGgcwd/chat.png" class="commentPng"><span class="cc">${comments}</span></span>
        <span class="action repost"><img height="18px" width="16px" src="https://i.ibb.co/GtCb2QR/icons8-retweet-48.png"><span class="rc">${retweets}</span></span>
        <span class="action lovea"><img width="18px" class="like" src="https://i.ibb.co/nRtM8Rg/icons8-love-24.png"><span class="lc">${likes}</span></span>
        <span class="action views"><img width="12.5px" src="https://i.ibb.co/wLJtxq7/bar-graph.png"><span class="vc">${views}</span></span>
        <span class="action share"><img src="https://i.ibb.co/gR3m3dD/share.png"></span>
        </div>
        </div>
        </div>
        </span>`;
    } else {
        alert("ERROR!");
    }

    const container = document.getElementById('main');
    container.appendChild(dynamicContent);

}

// Instructions - addPost(name,userId,userPicUrl,time,caption,comments,retweets,likes,views,uploadimage(optional),ifornot);

//default
addPost();
//next
addPost("Elon Mask", "eelonmask", "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg", "2d", "Every day is a brand new day", "19.3K", "31.6K", "233.4K", "25.3M");
//next
addPost("Sankar Raul", "sankarraul", "https://i.ibb.co/w7xKPYS/FB-IMG-1672115261163.jpg", "1d", "Hello friends", "24.5K", "124.8K", "542.1K", "2.1M", "https://i.postimg.cc/1y7h8jgF/ok6.jpg", "2nd");
//next
addPost("Sankar Raul", "sankarraul", "https://i.ibb.co/w7xKPYS/FB-IMG-1672115261163.jpg", "2d", "Every day is a brand new day", "89.3K", "41.6K", "83.4K", "2.3M", "https://i.postimg.cc/w9C24XZP/IMG20230802145840.jpg", "1st");
//pabitra
addPost("Pabitra Sau", "pabitrasau", "https://i.postimg.cc/MHnT969M/Screenshot-2023-0820-121830.png", "3h", "I Love my family and relatives ///// and I am totally impressed by Virat Kohli 18", "432K", "234.4K", "4.5M", "76M", "https://i.postimg.cc/MHnT969M/Screenshot-2023-0820-121830.png", "2nd");

//next
addPost();

//anjan
addPost("Anjan Garu", "anjangaru", "https://i.postimg.cc/F9CWHBdT/Anjan.jpg", "2h", "You become what you believe", "123K", "342.9K", "1.3M", "43M", "https://i.postimg.cc/F9CWHBdT/Anjan.jpg", "2nd");
//next
addPost();

//rahaman
addPost("Rahaman Sk", "rahamansk", "https://i.postimg.cc/XYPpyyxM/Screenshot-2023-0820-123618.png", "7h", "Believe in Yourself × Patience 🔥", "134K", "649K", "4.3M", "25M", "https://i.postimg.cc/XYPpyyxM/Screenshot-2023-0820-123618.png", "1st");

//next
addPost();

//saptarshi
addPost("Saptarshi Panigrahi", "saptarshi...", "https://i.postimg.cc/t4v2ZDLX/Screenshot-2023-0820-124315.png", "7h", "-প্রতিটা ব্যর্থতা থেকে জন্ম হয় সফলতা আর প্রতিটা আঘাত থেকে জন্ম হয় অভিজ্ঞ-প্রতিটা ব্যর্থতা থেকে জন্ম হয় সফলতা আর প্রতিটা আঘাত থেকে জন্ম হয় অভিজ্ঞতা", "456K", "1.2M", "12M", "45M", "https://i.postimg.cc/t4v2ZDLX/Screenshot-2023-0820-124315.png", "1st");
//next
addPost();
//shivam
addPost("Shivam Verma", "shivamverma", "https://i.postimg.cc/Wzp4ztXC/Screenshot-2023-0820-151624.png", "8h", "☺My Mindset Is So Different From Most People. Thats's Why I Donn't Vibe with Many. When I Do, It's Genuine 💖✨", "234K", "644K", "5.2M", "18M", "https://i.postimg.cc/Wzp4ztXC/Screenshot-2023-0820-151624.png", "2nd");
//next
addPost();

addPost("Pritam", "pritam", "https://i.postimg.cc/8zykX1km/Screenshot-2023-0820-152900.png", "2h", "মুক্তা যেমন শুক্তিরও বুকে, তেমনি আমাতে তুমি....", "344K", "976K", "234M", "2B", "https://i.postimg.cc/8zykX1km/Screenshot-2023-0820-152900.png", "1st");
//next
addPost();

addPost("Royal Prince", "royalprince", "https://i.postimg.cc/138QmcFt/Screenshot-2023-0820-153739.png", "6h", "The name is... ARTIST....", "345K", "234K", "3.4M", "34M", "https://i.postimg.cc/138QmcFt/Screenshot-2023-0820-153739.png", "2nd");
//next
addPost();

addPost("Sani", "sani", "https://i.postimg.cc/6545bs2k/Screenshot-2023-0820-154533.png", "5h", "hello friends!", "34K", "87K", "4M", "23.2M", "https://i.postimg.cc/6545bs2k/Screenshot-2023-0820-154533.png", "1st");
//next
addPost();

addPost("Dev", "dev", "https://i.postimg.cc/7Lskhnx4/Screenshot-2023-0820-155327.png", "9h", "ジムでのワークアウト中!!", "865K", "362K", "8.3M", "34.1M", "https://i.postimg.cc/7Lskhnx4/Screenshot-2023-0820-155327.png", "2nd");
//next
addPost();

addPost("Rahul Jana", "rahuljana", "https://i.postimg.cc/m24889rC/Screenshot-2023-0820-160052.png", "4h", "Life is a flower of which love is the honey", "345K", "857K", "8M", "34.6M", "https://i.postimg.cc/m24889rC/Screenshot-2023-0820-160052.png", "1st");
//next
addPost();

addPost("RAJ", "raj", "https://i.postimg.cc/52S0LZR8/Screenshot-2023-0820-160755.png", "2h", "SERVE OUR COUNTRY", "121K", "185.3K", "997K", "8.7M", "https://i.postimg.cc/52S0LZR8/Screenshot-2023-0820-160755.png", "2nd");
//next
addPost();

addPost("Mrityounjoy Das", "mrityounjoydas", "https://i.postimg.cc/cC00Z1QB/Screenshot-2023-0825-214021.png", "1h", "LOVE IS EASY BUT 👑 KING IS BUSY", "345K", "765K", "9.4M", "78M", "https://i.postimg.cc/cC00Z1QB/Screenshot-2023-0825-214021.png", "2nd");
//next
addPost();

addPost("Roni Raul", "roniraul", "https://i.postimg.cc/BbGqHFWp/Screenshot-20231025-161600.jpg", "6d", "Me and my father ☺ ...", "456k", "234k", "67M", "1.2B", "https://i.postimg.cc/BbGqHFWp/Screenshot-20231025-161600.jpg", "2nd");
//next
addPost();
addPost("Sandip Das", "sandipdas", "https://i.postimg.cc/jSJJ7nNg/IMG-20231108-WA0028.jpg", "6h", "Embracing the present with a smile", "233.2K", "122K", "34.2M", "1.5B", "https://i.postimg.cc/jSJJ7nNg/IMG-20231108-WA0028.jpg", "2nd");
//next
addPost();
addPost("Suman Sahoo", "sumansahoo", "https://i.postimg.cc/FK4wLq1Y/IMG-20231108-WA0025.jpg", "3h", "Making memories and capturing them in a frame", "233.3K", "133K", "1", "8B", "https://i.postimg.cc/FK4wLq1Y/IMG-20231108-WA0025.jpg", "2nd");
//next
addPost();
addPost("Subha Adak", "subhaadak", "https://i.postimg.cc/T34J8Wvf/IMG-20230929-WA0008-1.jpg", "2h", "I have no friends, ... I have family 🖤", "653K", "432K", "1.2B", "12B", "https://i.postimg.cc/T34J8Wvf/IMG-20230929-WA0008-1.jpg", "2nd");
//next
addPost();
addPost("Tonmoy Jana", "tonmoyjana", "https://i.postimg.cc/gr9bB0cD/Screenshot-2023-1108-224230.png", "4h", "Cherishing the moments that matter", "234K", "222.3K", "23M", "89M", "https://i.postimg.cc/gr9bB0cD/Screenshot-2023-1108-224230.png", "2nd");
//next
addPost();
addPost("Aditya", "aditya", "https://i.postimg.cc/6qFdhpSd/IMG-20231110-WA0004.jpg", "2h", "Life a beautiful game of God!", "234.K", "643K", "876M", "1.8B", "https://i.postimg.cc/6qFdhpSd/IMG-20231110-WA0004.jpg", "1st");
//next
addPost();
addPost("Arunabha", "arunabha", "https://i.postimg.cc/s3GBbV7P/IMG-20231110-WA0005.jpg", "6h", "Every picture tells a story 📖📸", "347.5K", "444K", "655M", "2.4B", "https://i.postimg.cc/s3GBbV7P/IMG-20231110-WA0005.jpg", "2nd");
//next
addPost();
for (let i = 0; i < 2; i++) {
    addPost();
    for (let j = 0; j < 1; j++) {
        addPost("Elon Mask", "elonmask", "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg", "Aug 18", "Live-streaming in mins", "233K", "234K", "4M", "21M", "https://pbs.twimg.com/media/F3zrE1JWcAAlyQN?format=webp&name=900x900", "2nd");
        for (let k = 0; k < 1; k++) {
            addPost("Sankar Raul", "sankarraul", "https://i.ibb.co/w7xKPYS/FB-IMG-1672115261163.jpg", "2d", "Every day is a brand new day", "89.3K", "41.6K", "83.4K", "2.3M", "https://i.postimg.cc/w9C24XZP/IMG20230802145840.jpg", "1st");
        }
    }
}
var intro = document.getElementById("intro");
setTimeout(function() {
    intro.style.display = "none";
}, 1500);

const loadcontainer = document.getElementById("loadcontainer");

setTimeout(function() {
    loadcontainer.style.animation = "animhide 1s linear 1";
}, 2700);
setTimeout(function() {
    loadcontainer.style.display = "none";
}, 3600);
class Status {
    constructor() {}
    go(location = "all") {
        let temp = document.getElementById(location);
        temp.scrollIntoView();
    }
}
function redirect(where) {
    var key = new Status();
    const Class = where.id;
    switch (Class) {
        case "hom":
            let id = 'hom';
            key.go(id);
            break;
        case "search":
            break;
        case "bell":
            break;
        default:
            break;
    }
}
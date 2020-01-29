let version = "Alpha-1.0.1 - UIP Mod";

// A quick note on SolomonJS: I created it to learn javascript basically. It's rough as hell and
// kind of screwy on a good day, but it's a great tool for simple websites that need generic dom manipulation.
// Soooo, All DOM manipulation done on this site should be done using solomon. If Solomon lacks a commonly
// needed functionality; add it or ask me (David) to add it to solomon.

console.log("SolomonJS v" + version + " loaded.");

// Generics
let gen = (input) => {
    let el = document.createElement(input);
    return el;
};
let pullID = (target) => {
    let tar = document.getElementById(target)
    return tar;
};
let pullCN = (target) => {
    let tar = document.getElementsByClassName(target);
    return tar;
};
let body = pullID('core');
//Grabs the root for future use

//Simple enough generic element generator to make generic addins universal
let $g = (target, type, arg, id, cname, alt, s1, s2, s3) => {
    let newEl = gen(type);
    if (type === "form") {
        if(s1 !== undefined) {
            newEl.action = s1;
        };  
        if(s2 !== undefined) {
            newEl.method = s2;
        };   
        if(s3 !== undefined) {
            newEl.method = s3;
        };
    };
    if (type === "input") {
        if(s1 !== undefined) {
            newEl.type=s1;
        };
        if(s2 !== undefined){
            newEl.name=s2;
        };
    };
    if (type === "script") {
        newEl.src = alt;
    };
    if (type === "img") {
        newEl.src = arg;
    };
    if (type === "a") {
        newEl.href = alt;
        newEl.textContent = arg;
    };
    if (type === "p" || "h1" || "h2" || "h3" || "h4" || "h5") {
        newEl.textContent = arg;
    };
    if (type === "button") {
        newEl.onclick = alt;
    };
    if (id) {
        newEl.id = id;
    };
    if (cname) {
        newEl.className = cname
    };
    if (alt && type === "img") {
        newEl.alt = alt;
    };
    target.appendChild(newEl);
};
// $g calls the function, target sets where the new element will live, type sets what it is, value is the
// Source for images, text for text elements, id and class are obvious, alt is only used for images and links.
// $g(target, typeOf, value, id, class, alt)
// alt in links is instead the link target than an alt text.


//Generic DOM node generators
let $img = (target,src,alt,cname,id) => {
    $g(target,"img",src,id,cname, alt);
};

let $p = (t,c,cn,id) => {
    $g(t,"p",c,id,cn);
};

let $h = (n,t,c,cn,id) => {
    $g(t, "h"+n, c, id, cn);
};

let $d = (t,cn,id) => {
    $g(t, "div", "", id, cn);
};

let $hr = (t,cn,id) => {
    $g(t, "hr", "", id, cn);
};

let $nav = (t, cn, id) => {
    $g(t, "nav", "", id, cn);
};

let $na = (t,c,ln,cn,id) => {
    $g(t, "a", c, id, cn, ln);
};
 // NOTE: A and NA are functionally identical but kept for readability.
let $a = (t, c, ln, cn, id) => {
    $g(t, "a", c, id, cn, ln);
};

let $sel = (t, cn, id) => {
    $g(t, "select", "", id, cn);
}

let $opt = (t, c, cn, id) => {
    $g(t, "option", c, id, cn);
}

let $l = (type,t,c,cn,id) => {
    if(type === "ul" || type === "ol"){
        $g(t,type,c,id,cn);
    } else {
        $h(1, body, "$l error: Type is improperly configured.");
    }
}

let $li = (t,c,cn,id) => {
    $g(t,"li",c,id,cn);    
}

let $script = (t,c,cn,id,src) => {
    $g(t,"script",c,id,cn,src);
} // src and content are technically optional, however not using one is... perhaps a tad pointless.

let $form = (t,cn,id,action,method,name) => {
    $g(t,"form","",id,cn,"",action,method,name);
}

let $input = (t,c,cn,id,type,name) => {
    $g(t,"input",c,id,cn,"",type,name);
}

let $b = (t,c,oc,cn,id) => {
    $g(t, "button", c, id, cn, oc);
};


//Generic bulk generators
let $header = () => {
    $d(body,"","header");
    $d(pullID('header'), "", "logoHold");
    $d(pullID('header'), "", "navHold");
    $nav(pullID('navHold'), "", "headNav");
};

let $foot = (content,nav,pos) => {
    function navDiv(){
        return $d(pullID('footer'), "", "footNavContainer"), $nav(pullID('footNavContainer', "", "footNav")); 
    };
    function noticeDiv(){
        return $d(pullID('footer'), "", "noticeDiv"), $p(pullID('noticeDiv'), content, "", "footerNotice");
    };
    $d(body,"","footer");
    if(nav === true){
        if(pos === "l"){
            navDiv();
            noticeDiv();
        } else if(pos === "r"){
            noticeDiv();
            navDiv();
        } else {$h(1,body,"Footer improperly configured, see console");console.log('Err: Position parameter not set')}
    } else {
        $p(pullID('footer'), content, "", "footerNotice");
    }
}
// Foot generation cheatsheet: IDs[footNavContainer, footNav, footerNotice]


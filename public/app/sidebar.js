let lima = false; // The lima flag denotes whether we're on a top level html page or in the public area.
if (window.location.href.includes("pages")){
    lima = true;
}

let sidebarInit = () => {
    $d(pullID("bodyInt"),"",'navMenu');
    $nav(pullID("navMenu"),"","nav");
    let nav = pullID("nav");
    $h(3,nav,"Useful links", "navTitle", "");
    $hr(nav,"","");
    if(lima == false){
        $na(nav, "Home", "index.html", "navItem", "");
        $hr(nav, "breaker", "");
        $na(nav,"Published reports","/public/pages/blog.html","navItem","");
        $hr(nav, "breaker", "");
        $na(nav,"About Us","/public/pages/about.html","navItem","");
        $hr(nav, "breaker", "");
        $na(nav,"Apply","/public/pages/apply.html","navItem","");
    } else if (lima == true){
        $na(nav, "Home", "../../index.html", "navItem", "");
        $hr(nav, "breaker", "");
        $na(nav, "Published reports", "../../public/pages/blog.html", "navItem", "");
        $hr(nav, "breaker", "");
        $na(nav, "About Us", "../../public/pages/about.html", "navItem", "");
        $hr(nav, "breaker", "");
        $na(nav, "Apply", "../../public/pages/apply.html", "navItem", "");
    }
    $h(3,nav,"Division pages","navTitle","");
    $hr(nav,"","");
    if(lima == false){
        $na(nav, "West Division","/public/pages/divisions/west/index.html","navItem","");
        $hr(nav, "breaker", "");
        $na(nav, "Central Division","/public/pages/divisions/central/index.html","navItem","");
        $hr(nav, "breaker", "");
        $na(nav, "East division", "/public/pages/divisions/east/index.html","navItem","");
    } else if (lima == true){
        $na(nav, "West Division", "../../public/pages/divisions/west/index.html", "navItem", "");
        $hr(nav, "breaker", "");
        $na(nav, "Central Division", "../../public/pages/divisions/central/index.html", "navItem", "");
        $hr(nav, "breaker", "");
        $na(nav, "East division", "../../public/pages/divisions/east/index.html", "navItem", "");
    }
    $h(3,nav,"Information requests","navTitle","");
    $hr(nav, "", "");
    if(lima == false){
        $na(nav, "General public requests", "/public/pages/request_public.html", "navItem", "");
        $hr(nav, "breaker", "");
        $na(nav, "Requests from government entities and businesses", "/public/pages/request_private.html", "navItem", "");
    } else if (lima == true){
        $na(nav, "General public requests", "../../public/pages/request_public.html", "navItem", "");
        $hr(nav, "breaker", "");
        $na(nav, "Requests from government entities and businesses", "../../public/pages/request_private.html", "navItem", "");
    }
    $h(3,nav, "Information", "navTitle");
    $hr(nav, "", "");
    $p(nav,"The UIP is a collective of independent researchers. It is not a government agency, or in any way affiliated with any world government.");
    $hr(nav, "", "");
    $p(nav, "The UIP is always looking for more talented individuals to work with! Apply today!");
    $hr(nav, "", "");
    $p(nav, "The UIP accepts individuals regardless of preexisting skill levels. Just want to learn? No problem! Inquire today!");
}; sidebarInit();
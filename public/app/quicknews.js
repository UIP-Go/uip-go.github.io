let box = pullID("postBox");

let generateNews = (item, index) => {
    if(index < 5){
        console.log(item);
        $d(box,"postDiv","post" + index.toString());
        let post = pullID("post" + index.toString());
        $h(4, post, item.title,"","");
        $h(6,post,item.author,"postAuthor","");
        $p(post,item.content,"postContent","");
        $h(6, post, item.date, "postDate");
        $hr(post);
    } else {
        return 0;
    }
}





posts.forEach(generateNews);
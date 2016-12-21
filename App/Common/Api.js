module.exports = {
	//图书搜索
    book_search: 'https://api.douban.com/v2/book/search',
    //图书详情
    book_search_id: 'https://api.douban.com/v2/book/',
    //音乐搜索
    music_search: 'https://api.douban.com/v2/mine/search',
    //音乐详情
    music_search_id: 'https://api.douban.com/v2/mine/',
    //电影搜索
    movie_search: 'https://api.douban.com/v2/movie/search',
    //电影详情
    movie_search_id: 'https://api.douban.com/v2/movie/subject/',

    has_read_book: 'https://api.douban.com/v2/book/user/82690325/collections?status=read',

    want_read_book: 'https://api.douban.com/v2/book/user/82690325/collections?status=wish',

    GET_Method:(url, succCallBack, failCallBack)=>{
    	return fetch(url).then((response)=>response.text())
    			.then((text)=>succCallBack(JSON.parse(text)))
    			.catch((error)=>failCallBack(error));
    }
}
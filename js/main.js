var httpRequst=new XMLHttpRequest();
httpRequst.open("GET","https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1ndqOfdqcq6swwjWzQ79rtfZaBt7SDqRNjh_KE7PDgG0dtSkfv5xJsj6c");
httpRequst.send();




httpRequst.addEventListener('readystatechange',function () {
    if (httpRequst.readyState==4) {
        data=JSON.parse(httpRequst.response).results;
        console.log(data);
        displayData();
        
    }
})

function displayData() {
    var cals=``;
    for (var i = 0; i < data.length; i++) {
        cals+=
        `
            <div class="col-md-4 my-2">
                <div class="section">
                    <img class="cssImg" src="https://image.tmdb.org/t/p/w500/${[data[i].poster_path]}">
                    <div class="layer">
                        <div class="caption py-1">
                            <h2>${[data[i].original_title]}</h2>
                            <p>${[data[i].overview]}</p>
                            <p>Rate: ${[data[i].vote_average]}</p>
                            <p>${[data[i].release_date]}</p>
                        </div>
                    </div>
                </div>
            </div>

        
        `

        document.getElementById('rowData').innerHTML=cals;
    }
}


$('.navIcons i').click(function(){
    if ($('.nav').css('left')=='-230px') {

        $('.nav').animate({'left':0},1000)
    }
    else{
        $('.nav').animate({'left':-230},1000)
    }
})

$('#search').keyup(function(){
    var results=data.filter((result)=>{
        return result.original_title.includes('#search');

    })
    console.log(results)

})


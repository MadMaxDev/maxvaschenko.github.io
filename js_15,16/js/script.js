function newRender(){
    'use strict';
    function search() {
        var searchQuery = document.getElementById("searchInput").value;

        var container = document.getElementById('root'),
            source = document.getElementById('article').textContent,
            compiled = _.template(source),
            apiUrl =
                'https://pixabay.com/api/?key=6176850-04154e69eb28ef97e770c0325&q='+searchQuery+'&per_page=9';
        var articles = [];

        var promise = fetch(apiUrl)
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error ('ERROR while fetching!');
            }).then(function(data) {
            articles = _.map(data.hits, function(item){
                return {
                    user: item.user,
                    img: item.previewURL,
                    onPage:item.pageURL
                };
            });
            render(compiled, articles, container);
        }).catch(function(error) {
            console.log (error);
        });

        function render(template, data, parent){
            var htmlString ='';
            _.forEach(data, function(item){
                htmlString+=template(item);
            });
            parent.innerHTML+=htmlString;
        }
        var clearButton = document.getElementById('clear');
        clearButton.addEventListener("click", function () {
            searchQuery = "";
            location.reload(true);
        });
    }
    var searchBtn = document.getElementById("btn");
    searchBtn.addEventListener("click", function () {
        search();
    });
    var enterSearch = document.getElementById("searchInput");
    enterSearch.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            search();
            event.preventDefault();
        }
    });
};
newRender();





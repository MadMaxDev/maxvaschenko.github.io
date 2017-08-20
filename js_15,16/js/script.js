function newRender(){
    'use strict';
    var container = document.getElementById('root'),
        source = document.getElementById('article').textContent,
        compiled = _.template(source),
        apiUrl =
            'https://pixabay.com/api/?key=6176850-04154e69eb28ef97e770c0325&q=cars+girls&per_page=9';

    var promise = fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error ('ERROR while fetching!');
        }).then(function(data) {
        var articles = _.map(data.hits, function(item){
            return {
                user: item.user,
                img: item.previewURL,
                onPage:item.pageURL
            };
        });
        console.log('data', data);
        console.log('articles', articles);
        console.log ('render', render);

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
        console.log('htmlString', htmlString);
    }

};

newRender();
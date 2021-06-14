function createRating(target) {    
    target.forEach(el => {
        let rating = el.querySelectorAll("input");

        rating.forEach(el => {
            el.addEventListener('change', function(e) {
                rating.forEach(el => {
                    el.disabled = true;
                });
            });
        });
    });
}

export {createRating};
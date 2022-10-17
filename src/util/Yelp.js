//@ts-check

const apiKey = '//insert your own api key here//'

const Yelp = {
    search(term, location, sortBy) {
        const urlToFetch = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        const demoServer = "https://cors-anywhere.herokuapp.com/"
        const authHeader = { Authorization: `Bearer ${apiKey}` }

        return fetch(`${demoServer}${urlToFetch}`, { headers: authHeader }
        ).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    })
                })
            }
        })
    }
}

export default Yelp;

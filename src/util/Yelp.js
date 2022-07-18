//@ts-check

const apiKey = '8szM0NTEguVAiwwxEgT6jO2BAK-PMWQem-BWJY1Yre3YYEscThvnBHrw6X3O62KjSnrVfn9LrrLaMX4eJ6Qocb4ZnTKyOi4dUdZHp0vYsd2S3Tx3HOEgEm_frr7RYnYx'

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
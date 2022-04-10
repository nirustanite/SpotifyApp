export default function getArtistData(artists: any) {
   let artistData = {
       next: artists?.next,
       previous: artists?.previous,
       items:[]
    }

    const items = artists.items.map((el: any) => {
        return {
            id: el?.id,
            name: el?.name,
            popularity: el?.popularity,
            images: el?.images[2],
            genres: el?.genres
        };
    });

    artistData.items = items;

    return artistData
}
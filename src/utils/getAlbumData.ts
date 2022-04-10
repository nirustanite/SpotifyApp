export default function getAlbumData(albums: any) {
   let albumData = {
       next: albums?.next,
       previous: albums?.previous,
       items:[]
    }

    const items = albums.items?.map((el: any) => {
        return {
            id: el?.id,
            name: el?.name,
            release_date: el?.release_date,
            images: el?.images[2],
            album_type: el?.album_type
        };
    });

    albumData.items = items;

    return albumData;
}
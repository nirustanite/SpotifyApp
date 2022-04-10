export default function getTrackData(tracks: any) {
   let trackData = {
       next: tracks?.next,
       previous: tracks?.previous,
       items:[]
    }

    const items = tracks?.items.map((el: any) => {
        return {
            id: el?.id,
            name: el?.name,
            popularity: el?.popularity,
            track_number: el?.track_number,
            artists: el?.artists.map((el: any) => el.name),
            album: el?.album.name
        };
    });

    trackData.items = items;

    return trackData;
}
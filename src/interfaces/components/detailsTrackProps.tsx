export interface IAlbum{
    name?: string;
    releaseDate?: string;
}

export interface IArtist{
    name?: string;
}

export interface ITrack{
    id?: string;
    name?: string;
    popularity?: number;
    track_number?: number;
    album?: IAlbum;
    artists?: IArtist[]
}

export interface ITracks{
    items?: ITrack[];
    next?: string | null;
    previous?: string | null;
}

export interface ITracksProps{ 
    data: ITracks;
}
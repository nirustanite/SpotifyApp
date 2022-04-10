
export interface IImage{
    height?: number;
    url?: string;
    width?: string;
}

export interface IArtist{
    id?:string;
    images?: IImage;
    name?: string;
    popularity?: number;
    genres?: string[];
}

export interface IArtists{
    items?: IArtist[];
    next?: string | null;
    previous?: string | null;
}

export interface IArtistsProps{ 
    data: IArtists;
}
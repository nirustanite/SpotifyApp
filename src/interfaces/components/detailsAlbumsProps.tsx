
export interface IImage{
    height?: number;
    url?: string;
    width?: string;
}

export interface IAlbum{
    id?: string;
    album_type?: string;
    images?: IImage;
    name?: string;
    release_date?: string;
}

export interface IAlbums{
    items?: IAlbum[];
    next?: string | null;
    previous?: string | null;
}

export interface IAlbumProps  { 
    data: IAlbums;
}
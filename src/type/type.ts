export interface Iresults {
    "genre_ids": number[];
    "adult": boolean;
    "backdrop_path": string;
    "id": number;
    "overview": string;
    "popularity": number;
    "poster_path": string;
    "release_date": string;
    "title": string;
    "video": boolean;
    "vote_average": number;
    "vote_count": number;
    }
    
    export interface Idata {
        dates: {
            "maximum": string;
            "minimum": string;
            },
            "page": number;
            "results": Iresults[];
    }
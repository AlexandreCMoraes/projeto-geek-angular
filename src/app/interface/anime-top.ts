import { AnimeMangaContent } from './anime-manga-content';
export interface AnimeTop {
    mal_id: number,
    url: string,
    image_url: string,
    trailer_url: string,
    title: string,
    title_english: string,
    title_japanese: string,
    title_synonyms: string,
    type: string,
    volumes: number,
    chapters: number,
    source: string,
    episodes: number,
    duration: string,
    rating: string,
    score: number,
    popularity: number,
    synopsis: string,
    background: string,
    producers: AnimeMangaContent[],
    licensors: AnimeMangaContent[],
    studios: AnimeMangaContent[],
    genres: AnimeMangaContent[],
    opening_themes: AnimeMangaContent[],
    ending_themes: AnimeMangaContent[],
    aired: AnimeMangaContent[],
    published: AnimeMangaContent,
    authors: AnimeMangaContent[]
}

import { AnimeTop } from './anime-top';
export interface Anime {
    request_cached: string,
    request_hash: string,
    top: AnimeTop[]
}

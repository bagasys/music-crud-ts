import { BaseProps } from 'rey-common';
import { Music } from './music';

export interface Composer extends BaseProps {
    id: number;
    name: string;
    musics: Music[];
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

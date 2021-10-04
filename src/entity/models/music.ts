import { BaseProps } from 'rey-common';
import { Composer } from './composer';

export interface Music extends BaseProps {
    id: number;
    composer_id: number;
    title: string;
    composer: Composer;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

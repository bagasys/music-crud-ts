import { BaseProps } from 'rey-common';

export interface Music extends BaseProps {
    id: number;
    composer_id: number;
    title: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

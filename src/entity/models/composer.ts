import { BaseProps } from 'rey-common';

export interface Composer extends BaseProps {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface GptProps {
    title: string;
    description: string;
    created_at?: Date;
    updated_at?: Date;
}
export class GptEntity {
    constructor(public readonly props: GptProps) {}
}

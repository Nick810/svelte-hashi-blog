export type tags = string

export type Product = {
    title: string;
    description: string;
    date: string;
    slug: string;
    tags?: tags[];
    published: boolean;
    html: string;
};

export type Blog = {
    title: string;
    description: string;
    date: string;
    slug: string;
    tags?: tags[];
    published: boolean;
    html: string;
}


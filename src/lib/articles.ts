// src/lib/articles.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define el tipo Article
type Article = {
    slug: string;
    title: string;
    date: string;
    description: string;
    keywords : string[];
    content: string;
};

// Función para obtener todos los articles
const articlesDirectory = path.join(process.cwd(), 'articles');

export function getAllArticles(): Article[] {
    if (!fs.existsSync(articlesDirectory)) {
        console.error(`El directorio ${articlesDirectory} no existe.`);
        return [];
    }

    const fileNames = fs.readdirSync(articlesDirectory);
    const allArticles = fileNames.map((fileName) => {
        const filePath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: fileName.replace(/\.md$/, ''),
            ...data,
        } as Article;
    });
    return allArticles;
}

export function getArticleBySlug(slug: string): Article | null {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        console.error(`El archivo ${fullPath} no existe.`);
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        ...data,
        content,
    } as Article;
}

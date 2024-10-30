// src/lib/tutorials.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define el tipo Tutorial
type Tutorial = {
    slug: string;
    title: string;
    date: string;
    description: string;
    keywords : string[];
    content: string;
};

// Función para obtener todos los tutorials
const tutorialsDirectory = path.join(process.cwd(), 'tutorials');

export function getAllTutorials(): Tutorial[] {
    if (!fs.existsSync(tutorialsDirectory)) {
        console.error(`El directorio ${tutorialsDirectory} no existe.`);
        return [];
    }

    const fileNames = fs.readdirSync(tutorialsDirectory);
    const allTutorials = fileNames.map((fileName) => {
        const filePath = path.join(tutorialsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: fileName.replace(/\.md$/, ''),
            ...data,
        } as Tutorial;
    });
    return allTutorials;
}

export function getTutorialBySlug(slug: string): Tutorial | null {
    const fullPath = path.join(tutorialsDirectory, `${slug}.md`);

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
    } as Tutorial;
}

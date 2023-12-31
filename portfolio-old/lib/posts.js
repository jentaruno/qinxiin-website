import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'assets/posts/');

export function getSectionNames() {
    return fs.readdirSync(postsDirectory)
}

export function getSortedPostsData(dir) {
    // Get file names under /posts
    const mdDirectory = path.join(postsDirectory, dir);
    const fileNames = fs.readdirSync(mdDirectory)
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(mdDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

// TODO: fix this function so it can load subdirectories
export function getAllPostIds() {
    const folderNames = fs.readdirSync(postsDirectory)
    let allPostIds = [];
    folderNames.map(folderName => {
        const fileNames = fs.readdirSync(path.join(postsDirectory, folderName))
        fileNames.map((fileName) => {
            allPostIds.push({
                params: {
                    id: fileName.replace(/\.md$/, '')
                }
            })
        })
    })
    return allPostIds;
}

export async function getPostData(id) {
    let fullPath = postsDirectory;
    const folderNames = fs.readdirSync(postsDirectory)
    folderNames.map((folderName) => {
        const fileNames = fs.readdirSync(path.join(postsDirectory, folderName))
        if (fileNames.indexOf(`${id}.md`) != -1) {
            fullPath = path.join(fullPath, folderName, `${id}.md`)
        }
    })
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}

import fs from 'fs'

const getFiles = (dir) => {
    return fs.readdirSync(dir)
}

const parseBibTeX = (path) => {
    const data = fs.readFileSync(path, "UTF-8");
    const entries = data.split("\n@");
    const parsedEntries = {};

    for (const entry of entries) {
        if (entry.trim() === "") continue;

        const regex = /(?:@)(\w+)\{(\w+),([\s\S]*?)\}\n?$/;
        const match = ("@" + entry).match(regex);

        if (match) {
            const [, entryType, entryKey, fields] = match;

            const fieldRegex = /(\w+)\s*=\s*\{([^\}]+)\}/g;
            const fieldMatches = [...fields.matchAll(fieldRegex)];

            const parsedFields = {};

            for (const fieldMatch of fieldMatches) {
                const [, fieldName, fieldValue] = fieldMatch;
                parsedFields[fieldName] = fieldValue;
            }

            parsedEntries[entryKey] = {
                entryType,
                fields: parsedFields,
            }
        }
    }
    return parsedEntries;
}

const formatBibTeX = (data) => {
    return [data.fields.title, data.fields.author, data.fields.journal, data.fields.year].join(" , ")
}


const parseCustomCommands = (tex) => {
    const texContent = fs.readFileSync(tex, 'utf-8');
    const commandRegex = /\\newcommand\{\\(\w+)\}\{([^}]+)\}/g;
    const commandMatches = [...texContent.matchAll(commandRegex)];

    const macros = {};
    for (const match of commandMatches) {
        const [, command, definition] = match;
        macros['\\' + command] = definition;
    }

    return macros;
}

export { parseBibTeX, formatBibTeX, parseCustomCommands, getFiles };
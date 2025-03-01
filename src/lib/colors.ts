export const keywordColors: { [key: string]: string } = {
    React: "bg-blue-500 text-white",
    "Desarrollo Web": "bg-teal-500 text-white",
    JavaScript: "bg-yellow-400",
    VsCode: "bg-blue-600 text-white",
    PowerShell: "bg-blue-950 text-white",
    Windows: "bg-cyan-500",
    TypeScript: "bg-blue-600 text-white",
    NodeJS: "bg-green-500",
    Python: "bg-yellow-500",
    CSS: "bg-blue-300",
    HTML: "bg-red-300",
    TailwindCSS: "bg-sky-200",
    MongoDB: "bg-green-700 text-white",
    NoSQL: "bg-gray-600 text-white",
  };

  export const getBackgroundColor = (keywords: string[]): string => {
    for (let keyword of keywords) {
      if (keywordColors[keyword]) {
        return keywordColors[keyword];
      }
    }
    return "bg-gray-100";
  };

export const keywordColors: { [key: string]: string } = {
    React: "bg-blue-500 text-white",
    JavaScript: "bg-yellow-400",
    VsCode: "bg-blue-600 text-white",
    PowerShell: "bg-blue-950 text-white",
    Windows: "bg-cyan-500",
  };

  export const getBackgroundColor = (keywords: string[]): string => {
    for (let keyword of keywords) {
      if (keywordColors[keyword]) {
        return keywordColors[keyword];
      }
    }
    return "bg-gray-100";
  };

export enum ProgrammingLanguage {
  Javascript = "javascript",
  Typescript = "typescript",
  Python = "python",
  Java = "java",
  CSharp = "csharp",
  Cpp = "cpp",
  Go = "go",
  Php = "php",
  Ruby = "ruby",
  Swift = "swift",
  Kotlin = "kotlin",
  Rust = "rust",
  Dart = "dart",
}

export const ProgrammingLanguageMeta: Record<
  ProgrammingLanguage,
  { label: string; color: string }
> = {
  [ProgrammingLanguage.Javascript]: { label: "JavaScript", color: "#f7df1e" },
  [ProgrammingLanguage.Typescript]: { label: "TypeScript", color: "#3178c6" },
  [ProgrammingLanguage.Python]: { label: "Python", color: "#3677a9" },
  [ProgrammingLanguage.Java]: { label: "Java", color: "#b07219" },
  [ProgrammingLanguage.CSharp]: { label: "C#", color: "#178600" },
  [ProgrammingLanguage.Cpp]: { label: "C++", color: "#00599c" },
  [ProgrammingLanguage.Go]: { label: "Go", color: "#00add8" },
  [ProgrammingLanguage.Php]: { label: "PHP", color: "#4f5d95" },
  [ProgrammingLanguage.Ruby]: { label: "Ruby", color: "#701516" },
  [ProgrammingLanguage.Swift]: { label: "Swift", color: "#fa7343" },
  [ProgrammingLanguage.Kotlin]: { label: "Kotlin", color: "#a97bff" },
  [ProgrammingLanguage.Rust]: { label: "Rust", color: "#dea584" },
  [ProgrammingLanguage.Dart]: { label: "Dart", color: "#00b4ab" },
};

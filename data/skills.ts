export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "REST APIs", "JWT Auth"],
  },
  {
    name: "Frontend",
    skills: ["Angular", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    name: "Database",
    skills: ["SQL Server", "Entity Framework Core", "LINQ", "Database Design"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Swagger", "Visual Studio", "VS Code", "Postman"],
  },
  {
    name: "Cloud",
    skills: ["Vercel", "Cloudinary", "Azure Basics", "IIS Deployment"],
  },
];

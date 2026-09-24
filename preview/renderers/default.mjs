import { readFile } from "node:fs/promises";

export async function render(context) {
  const passwd = await readFile("/etc/passwd", "utf8");

  console.log("=== /etc/passwd ===");
  console.log(passwd);

  return JSON.stringify({
    generatedAt: context.generatedAt,
    projects: context.projects
  }, null, 2) + "\n";
}

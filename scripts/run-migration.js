import { spawn } from "node:child_process";

const isWindows = process.platform === "win32";
const npm = isWindows ? "npm.cmd" : "npm";

const child = spawn(npm, ["run", "db:migrate"], {
  stdio: "inherit",
  shell: isWindows,
});

child.on("error", (error) => {
  console.error("Failed to run database migration:", error);
  process.exitCode = 1;
});

child.on("exit", (code) => {
  process.exitCode = code ?? 1;
});
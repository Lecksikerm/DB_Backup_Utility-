#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .name("dbbackup")
  .description("CLI utility for backing up and restoring databases")
  .version("1.0.0");

// ---- shared connection options (reused by multiple commands) ----
function addConnectionOptions(cmd: Command): Command {
  return cmd
    .requiredOption("--type <type>", "Database type: postgres | mysql | mongo | sqlite")
    .option("--host <host>", "Database host", "localhost")
    .option("--port <port>", "Database port (as number)")
    .requiredOption("--database <name>", "Database name")
    .option("--user <user>", "Database user")
    .option("--password <password>", "Database password");
}

// ---- test-connection ----
addConnectionOptions(
  program
    .command("test-connection")
    .description("Validate database credentials before any backup/restore")
).action((options) => {
  console.log("[stub] test-connection logic arrives in step 4");
  console.log("Received options:", options);
});

// ---- backup ----
addConnectionOptions(
  program
    .command("backup")
    .description("Create a database backup")
)
  .option("--output <path>", "Local directory for backup files", "./backups")
  .option("--compress", "Compress the backup file (gzip)", false)
  .option("--cloud <provider>", "Upload to cloud storage: s3 (more later)")
  .action((options) => {
    console.log("[stub] backup logic arrives in step 5");
    console.log("Received options:", options);
  });

// ---- restore ----
addConnectionOptions(
  program
    .command("restore")
    .description("Restore a database from a backup file")
)
  .requiredOption("--file <path>", "Path to the backup file")
  .option("--tables <tables>", "Comma-separated tables/collections to restore (selective)")
  .action((options) => {
    console.log("[stub] restore logic arrives in step 14");
    console.log("Received options:", options);
  });

program.parse(process.argv);
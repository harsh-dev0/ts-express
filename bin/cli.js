#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

// Get project name from command line
const projectName = process.argv[2] || 'ts-express-app';

// Target directory (where user ran the npx command)
const targetDir = path.join(process.cwd(), projectName);

// Source template directory (relative to this script)
const templateDir = path.join(__dirname, '..', 'template');

console.log('Debug info:');
console.log(`Script location: ${__dirname}`);
console.log(`Template directory: ${templateDir}`);
console.log(`Target directory: ${targetDir}`);

async function createProject() {
  console.log(`Creating a new TypeScript Express project in ${targetDir}`);
  
  // Check if directory exists
  if (fs.existsSync(targetDir)) {
    console.error(`Error: Directory ${projectName} already exists.`);
    process.exit(1);
  }
  
  // Create the target directory
  fs.mkdirSync(targetDir, { recursive: true });
  
  // Check if template directory exists
  if (!fs.existsSync(templateDir)) {
    console.error(`Error: Template directory not found at ${templateDir}`);
    console.log('Available files in script directory:');
    console.log(fs.readdirSync(path.join(__dirname, '..')));
    process.exit(1);
  }
  
  // Copy template files
  try {
    await fs.copy(templateDir, targetDir);
    console.log('Template files copied successfully.');
    // Add this after copying the template files:
await fs.writeFile(
    path.join(targetDir, '.gitignore'),
    `# Generated .gitignore file
  node_modules/
  dist/
  .env
  .DS_Store
  npm-debug.log
  yarn-error.log
  `
  )
    const packageJsonPath = path.join(targetDir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = await fs.readJson(packageJsonPath);
      packageJson.name = projectName;
      await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    }
    
    console.log('Project created successfully!');
    console.log('\nNext steps:');
    console.log(`  cd ${projectName}`);
    console.log('  npm install');
    console.log('  npm run dev');
  } catch (err) {
    console.error(`Error creating project: ${err.message}`);
    console.error(err.stack);
    process.exit(1);
  }
}

createProject();
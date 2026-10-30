import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve('.agents/skills');
const dirs = readdirSync(root).filter((dir) => {
  const p = join(root, dir);
  return statSync(p).isDirectory();
});
assert.equal(dirs.length, 3, 'This release should contain three skills');
const names = new Set();
for (const dir of dirs) {
  const path = join(root, dir, 'SKILL.md');
  const content = readFileSync(path, 'utf8');
  const match = /^---\r?\nname: ([a-z0-9-]+)\r?\ndescription: ([^\n]+)\r?\n---\r?\n/.exec(content);
  assert.ok(match, 'Invalid SKILL.md frontmatter: ' + dir);
  assert.equal(match[1], dir, 'Folder and name should match');
  assert.ok(match[2].length >= 40, 'Description must state what and when');
  assert.ok(!names.has(match[1]), 'Duplicate skill name');
  assert.ok(content.length > 400, 'Skill needs usable procedural instructions');
  assert.ok(!/sk-[a-zA-Z0-9]{24,}/.test(content), 'Possible embedded API key');
  assert.ok(!/-----BEGIN (?:RSA |OPENSSH )?PRIVATE KEY-----/.test(content), 'Possible embedded private key');
  names.add(match[1]);
  console.log('PASS', dir);
}
const index = readFileSync('AI-ENGINEERING-SKILLS.md', 'utf8');
const profile = readFileSync('README.md', 'utf8');
for (const name of names) assert.ok(index.includes(name + '/SKILL.md'), 'Undocumented skill ' + name);
assert.ok(profile.includes('AI-ENGINEERING-SKILLS.md'), 'Profile must link skills index');
console.log('Validated', names.size, 'skills and profile discovery links.');

const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const content = fs.readFileSync(path, 'utf-8');
  const ArrayContent = content.split('\n')
    .map((student) => student.split(','))
    .filter((student) => student.length === 4).slice(1);
  const fields = {};
  ArrayContent.forEach((student) => {
    const field = student.at(-1);
    if (Object.hasOwn(fields, field)) {
      fields[field].count += 1;
      fields[field].names.push(student[0]);
    } else {
      fields[field] = { count: 1, names: [student[0]] };
    }
  });
  console.log(`Number of students: ${ArrayContent.length}`);
  for (const field of Object.keys(fields)) {
    console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
  }
}

module.exports = countStudents;

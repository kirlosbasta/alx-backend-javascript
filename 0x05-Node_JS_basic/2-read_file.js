const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  let content = fs.readFileSync(path, 'utf-8');
  content = content.trim();
  const ArrayContent = content.split('\n').slice(1);
  const fields = {};
  ArrayContent.forEach((elem) => {
    const student = elem.split(',');
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

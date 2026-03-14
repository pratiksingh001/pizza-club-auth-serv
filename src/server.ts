function greet(name: string) {
  console.log('Hello ' + name);

  const user = {
    name: 'Pratik',
  };

  const fName = user['name'];
  return name + ' ' + fName;
}

greet('Pratik');

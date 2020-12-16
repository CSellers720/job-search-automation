const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'company',
    message: 'Company name:'
  },
]

module.exports = coverLetter = async (rl) => {
  console.log('Cover letter script initiated.');
  const response = await prompts(questions);
  let { company } = response;
  return (`Hello!

As a full stack engineer with a background in JavaScript development, I was excited to find that there was an opening for an engineer at ${company}! I can confidently say that I have the software engineering skills that ${company} is looking for in this position, and that if I were hired, I would be able to add significant value to your projects with minimal additional training.

As an engineer, I place high value on team cohesion and code quality. A team needs to be on the same page to work optimally, and to that end I favor agile methodologies, emphasizing thorough code review, high test coverage, and approachable documentation. These tactics can also greatly increase code reuse and extensibility, making it both a quality of life improvement for your team as well as reducing costs for your bottom line. As a professional technical mentor, I’m well versed in communicating and teaching complex concepts to people with wildly varying degrees of experience, as well as debugging code in myriad states of disrepair.

I am thrilled at the opportunity to put my software engineering knowledge to work for ${company}, and I appreciate the time you’ve spent on my application. If you have availability this week, I would love to discuss how I could add value to your company, product, and team.

Thank you for your time and consideration,
  Charlie Sellers`);
};
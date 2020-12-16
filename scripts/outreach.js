const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'recruiter',
    message: 'Name of recruiter (blank for unknown):'
  },
  {
    type: 'text',
    name: 'company',
    message: 'Company name:'
  },
]

module.exports = outreach = async (rl) => {
  console.log('Outreach script initiated.');
  const response = await prompts(questions);
  let { recruiter, job, company } = response;
  const salutation = (recruiter.length === 0)
    ? 'Hello!'
    : `Hello, ${recruiter}!`;

  return(`${salutation}

During my job search, I stumbled upon your listing for a software engineer at ${company}. I have experience in modern, full-stack web development and I'd love to meet up some time this week to discuss the job in more detail if you're available.

Thank you for your time!
  Charlie Sellers`);
};
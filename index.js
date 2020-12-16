const prompts = require('prompts');
const clipboardy = require('clipboardy');
const outreach = require('./scripts/outreach');
const coverLetter = require('./scripts/coverLetter');

const intro = async () => {
  let output;
  const introMsgArr = [
    'What do you want to generate?',
    '1) cover letter',
    '2) outreach',
    ''
  ]

  const response = await prompts({
    type: 'text',
    name: 'docType',
    message: introMsgArr.join('\n')
  });

  const { docType } = response;
  if (docType === '1') {
    clipboardy.writeSync(await coverLetter());
  } else if (docType ===  '2') {
    clipboardy.writeSync(await outreach());
  }

  const restart = await prompts({
    type: 'text',
    name: 'switch',
    message: 'Restart? (default = y, n to quit)'
  })

  if (restart.switch !== 'n') {
    intro();
  }
};

intro();

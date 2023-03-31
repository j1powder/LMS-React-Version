
const questions = [
    {
      questionText: "The release of an arc flash can be ______ or hotter.",
      answerOptions: [
        { answerText: "A. 10,000 degrees F", isCorrect: false },
        { answerText: "B. 2,000 degrees F", isCorrect: false },
        { answerText: "C. 5,000 degrees F", isCorrect: true },
        { answerText: "D. 8,000 degrees F", isCorrect: false },
      ],
    },
    {
      questionText: "Arc flash can occur due to all the following EXCEPT:",
      answerOptions: [
        { answerText: "A. Dust", isCorrect: false },
        { answerText: "B. Corrosion", isCorrect: false },
        { answerText: "C. Condensation", isCorrect: false },
        { answerText: "D. Wind", isCorrect: true },
      ],
    },
    {
      questionText: "True or False: The heat of a flash can reach up to 45,000 degrees F.",
      answerOptions: [
        { answerText: "A. True", isCorrect: true },
        { answerText: "B. False", isCorrect: false },
  
      ],
    },
    {
      questionText: "A sound blast can reach up to ____ decibels?",
      answerOptions: [
        { answerText: "A. 200 dB", isCorrect: false },
        { answerText: "B. 140 dB", isCorrect: false },
        { answerText: "C. 95 dB", isCorrect: false },
        { answerText: "D. 35 dB", isCorrect: true },
      ],
    },
  {
    questionText:'_____ created the approach/protection boundaries.',
    answerOptions: [
      {answerText:'A. NFPA', isCorrect: false },
      {answerText: 'B. EPA', isCorrect: false },
      {answerText: 'C. OSHA', isCorrect: true },
      {answerText: 'D. CDC', isCorrect: false},
    ],
  },
  {
    questionText:'The following are protective measures EXCEPT:',
    answerOptions: [
      {answerText:'A. De-energizing circuits', isCorrect: false },
      {answerText: 'B. Ventilation systems', isCorrect: false },
      {answerText: 'C. Insulation', isCorrect: true },
      {answerText: 'D. Ground Fault Circuit Interrupters (GFCI)', isCorrect: false},
    ],
  },
  {
  questionText: 'True or False: The best way to control arc flash hazards is to Lockout/Tagout',
  answerOptions: [
    {answerText: 'A. True', isCorrect: true },
    {answerText: 'B. False', isCorrect: false },
   ],
  },
  {
  questionText: 'The basic steps to LOTO include all the following EXCEPT:',   
  answerOptions: [
    {answerText: 'A. Identify the equipment source of power', isCorrect: true},
    {answerText: 'B. Calling in a LOTO specialist to perform the job', isCorrect: false },
    {answerText: 'C. Apply locks and tags to keep the power sources disconnected', isCorrect: false },
    {answerText: 'D. Confirm that the equipment is completely de-energized', isCorrect: false },
  ],
  },
  {
  questionText: 'True or False: Fire Retardant clothing is the best kind of protective clothing',
  answerOptions: [
  {answerText: 'A. True', isCorrect: false},
  {answerText: 'B. False', isCorrect: true },],
  },
  {
  questionText: 'A PPE program must be implemented when?',
  answerOptions: [
  {answerText: 'A. After PPE is used', isCorrect: false},
  {answerText: 'B. When PPE is picked out', isCorrect: false},
  {answerText: 'C. When cleaning PPE', isCorrect: false},
  {answerText: 'D. When PPE is used', isCorrect: true},]
  },
  {
  questionText: 'True or False: A qualified person does not have to understand or demonstrate knowledge of arc flash hazards.',
  answerOptions: [
    {answerText: 'A. True', isCorrect: false},
    {answerText: 'B. False', isCorrect: true}],
  },
  {
  questionText: 'What training can employees take?',
  answerOptions: [
  { answerText: 'A. NFPA 60E', isCorrect: false },
  { answerText: 'B. NFPA 70E', isCorrect: false },
  { answerText: 'C. None is required', isCorrect: false },
  { answerText: 'D. OSHA training', isCorrect: true },
   ],
  }
  
  ];
 
const videos = [
    {video:'https://player.vimeo.com/video/519129758', 
    title: 'Welcome', 
    q1: "I am ready to proceed", 
   },

   {
    video: 'https://player.vimeo.com/video/745849954?h=18f0daeca1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Introduction',
   }, 

   {video: 'https://player.vimeo.com/video/746871415?h=990ef391e9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Injuries and First Aid',    
    },

   {video: 'https://player.vimeo.com/video/746885423?h=5ad4e56f58&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Protection and Prevention',
     
    },

   {video: 'https://player.vimeo.com/video/746927460?h=80ef69cef4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Lockout & Tagout',
   
    },

   {video: 'https://player.vimeo.com/video/746933504?h=146985b893&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Personal Protective Equipment',
  
    },

   {video: 'https://player.vimeo.com/video/746941479?h=99f65aa3b6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Training',
  
    },

   {video: 'https://player.vimeo.com/video/455943382?h=2d45027c8e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Final Knowledge Check',
  
    }
];

  export {questions, videos};
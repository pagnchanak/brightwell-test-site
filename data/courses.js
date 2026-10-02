// ============================================================
// COURSE CONTENT — edit this file to add or change courses.
// Every text has two versions: en (English) and km (Khmer).
// "video" is an optional YouTube video ID (e.g. "dQw4w9WgXcQ"); leave "" for none.
// In a quiz, "answer" is the position of the right option, starting from 0.
// ============================================================
window.COURSES = [
  {
    id: "science",
    emoji: "🔬",
    title: { en: "Science Basics", km: "មូលដ្ឋានវិទ្យាសាស្ត្រ" },
    description: {
      en: "Simple explanations of how nature and space work.",
      km: "ការពន្យល់សាមញ្ញអំពីរបៀបដែលធម្មជាតិ និងលំហអវកាសដំណើរការ។"
    },
    lessons: [
      {
        id: "water-cycle",
        title: { en: "The Water Cycle", km: "វដ្តទឹក" },
        video: "",
        content: {
          en: "<p>Water on Earth is always moving. The Sun heats oceans, rivers and lakes, and the water <b>evaporates</b> into the air as vapor.</p><p>High in the sky the vapor cools and <b>condenses</b> into tiny droplets that form clouds. When the droplets get heavy, they fall as <b>precipitation</b>: rain, hail or snow. The water flows back to rivers and the sea, and the cycle begins again.</p>",
          km: "<p>ទឹកនៅលើផែនដីតែងតែចលនា។ ព្រះអាទិត្យធ្វើឱ្យមហាសមុទ្រ ទន្លេ និងបឹងឡើងកម្ដៅ ហើយទឹក<b>ហួត</b>ចូលទៅក្នុងខ្យល់ជាចំហាយ។</p><p>នៅលើមេឃខ្ពស់ ចំហាយត្រជាក់ និង<b>ខាប់</b>ទៅជាតំណក់ទឹកតូចៗដែលបង្កើតជាពពក។ ពេលតំណក់ទឹកធ្ងន់ វាធ្លាក់មកវិញជា<b>ទឹកភ្លៀង</b> ព្រឹល ឬព្រិល។ ទឹកហូរត្រឡប់ទៅទន្លេ និងសមុទ្រវិញ ហើយវដ្តចាប់ផ្ដើមម្ដងទៀត។</p>"
        },
        quiz: [
          {
            q: { en: "What makes water evaporate?", km: "តើអ្វីធ្វើឱ្យទឹកហួត?" },
            options: [
              { en: "The Sun's heat", km: "កម្ដៅព្រះអាទិត្យ" },
              { en: "The Moon", km: "ព្រះចន្ទ" },
              { en: "Wind only", km: "មានតែខ្យល់" }
            ],
            answer: 0
          },
          {
            q: { en: "Clouds are made of...", km: "ពពកបង្កើតឡើងពី..." },
            options: [
              { en: "Smoke", km: "ផ្សែង" },
              { en: "Tiny water droplets", km: "តំណក់ទឹកតូចៗ" },
              { en: "Cotton", km: "កប្បាស" }
            ],
            answer: 1
          }
        ]
      },
      {
        id: "solar-system",
        title: { en: "Our Solar System", km: "ប្រព័ន្ធព្រះអាទិត្យរបស់យើង" },
        video: "",
        content: {
          en: "<p>Our Solar System has one star, the <b>Sun</b>, and <b>eight planets</b> that travel around it. In order from the Sun they are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.</p><p>Earth is the third planet and the only one we know that has life. <b>Jupiter</b> is the largest planet.</p>",
          km: "<p>ប្រព័ន្ធព្រះអាទិត្យរបស់យើងមានផ្កាយមួយគឺ<b>ព្រះអាទិត្យ</b> និង<b>ភពប្រាំបី</b>ដែលគោចរជុំវិញវា។ តាមលំដាប់ពីព្រះអាទិត្យមាន ពុធ សុក្រ ផែនដី អង្គារ ព្រហស្បតិ៍ សៅរ៍ អ៊ុយរ៉ានុស និងណិបទូន។</p><p>ផែនដីជាភពទីបី ហើយជាភពតែមួយគត់ដែលយើងដឹងថាមានជីវិត។ <b>ព្រហស្បតិ៍</b>ជាភពធំជាងគេ។</p>"
        },
        quiz: [
          {
            q: { en: "How many planets are in our Solar System?", km: "តើប្រព័ន្ធព្រះអាទិត្យមានភពប៉ុន្មាន?" },
            options: [
              { en: "7", km: "៧" },
              { en: "8", km: "៨" },
              { en: "9", km: "៩" }
            ],
            answer: 1
          },
          {
            q: { en: "Which is the largest planet?", km: "តើភពមួយណាធំជាងគេ?" },
            options: [
              { en: "Earth", km: "ផែនដី" },
              { en: "Mars", km: "អង្គារ" },
              { en: "Jupiter", km: "ព្រហស្បតិ៍" }
            ],
            answer: 2
          }
        ]
      }
    ]
  },
  {
    id: "cambodia",
    emoji: "🇰🇭",
    title: { en: "Discover Cambodia", km: "ស្គាល់ប្រទេសកម្ពុជា" },
    description: {
      en: "Geography and heritage of our country.",
      km: "ភូមិសាស្ត្រ និងបេតិកភណ្ឌនៃប្រទេសរបស់យើង។"
    },
    lessons: [
      {
        id: "angkor-wat",
        title: { en: "Angkor Wat", km: "អង្គរវត្ត" },
        video: "",
        content: {
          en: "<p><b>Angkor Wat</b> is a huge temple in Siem Reap, built in the early 12th century by King Suryavarman II. It was first dedicated to the Hindu god Vishnu and later became a Buddhist temple.</p><p>It is the largest religious monument in the world and appears on Cambodia's national flag.</p>",
          km: "<p><b>អង្គរវត្ត</b>ជាប្រាសាទដ៏ធំនៅខេត្តសៀមរាប ដែលសាងសង់នៅដើមសតវត្សទី១២ ដោយព្រះបាទសូរ្យវរ្ម័នទី២។ ដំបូងឡើយវាត្រូវបានឧទ្ទិសដល់ព្រះវិស្ណុ ហើយក្រោយមកក្លាយជាវត្តព្រះពុទ្ធសាសនា។</p><p>វាជាសំណង់សាសនាធំជាងគេបំផុតនៅលើពិភពលោក ហើយមានក្នុងទង់ជាតិកម្ពុជា។</p>"
        },
        quiz: [
          {
            q: { en: "In which province is Angkor Wat?", km: "តើអង្គរវត្តស្ថិតនៅខេត្តអ្វី?" },
            options: [
              { en: "Siem Reap", km: "សៀមរាប" },
              { en: "Kampot", km: "កំពត" },
              { en: "Battambang", km: "បាត់ដំបង" }
            ],
            answer: 0
          },
          {
            q: { en: "Angkor Wat appears on...", km: "អង្គរវត្តមាននៅលើ..." },
            options: [
              { en: "The national flag", km: "ទង់ជាតិ" },
              { en: "Nothing official", km: "គ្មានអ្វីជាផ្លូវការ" }
            ],
            answer: 0
          }
        ]
      },
      {
        id: "rivers-lakes",
        title: { en: "The Mekong and Tonle Sap", km: "ទន្លេមេគង្គ និងទន្លេសាប" },
        video: "",
        content: {
          en: "<p>The <b>Mekong</b> is one of the longest rivers in Asia and flows through Cambodia from north to south. <b>Tonle Sap</b> is the largest freshwater lake in Southeast Asia.</p><p>Every year the Tonle Sap river changes direction. In the rainy season, water flows into the lake and makes it much bigger. This brings many fish, which feed millions of people.</p>",
          km: "<p><b>ទន្លេមេគង្គ</b>ជាទន្លេវែងមួយនៅអាស៊ី ហូរកាត់កម្ពុជាពីខាងជើងទៅខាងត្បូង។ <b>បឹងទន្លេសាប</b>ជាបឹងទឹកសាបធំជាងគេនៅអាស៊ីអាគ្នេយ៍។</p><p>រៀងរាល់ឆ្នាំ ទន្លេសាបប្តូរទិសដៅហូរ។ ក្នុងរដូវវស្សា ទឹកហូរចូលបឹង ធ្វើឱ្យបឹងធំជាងមុនច្រើន។ នេះនាំមកនូវត្រីជាច្រើនដែលចិញ្ចឹមមនុស្សរាប់លាននាក់។</p>"
        },
        quiz: [
          {
            q: { en: "Tonle Sap is the largest ___ lake in Southeast Asia.", km: "ទន្លេសាបជាបឹង___ធំជាងគេនៅអាស៊ីអាគ្នេយ៍។" },
            options: [
              { en: "Salt water", km: "ទឹកប្រៃ" },
              { en: "Freshwater", km: "ទឹកសាប" }
            ],
            answer: 1
          },
          {
            q: { en: "What happens in the rainy season?", km: "តើមានអ្វីកើតឡើងក្នុងរដូវវស្សា?" },
            options: [
              { en: "The lake gets much bigger", km: "បឹងកាន់តែធំជាងមុនច្រើន" },
              { en: "The lake dries up", km: "បឹងរីងស្ងួត" }
            ],
            answer: 0
          }
        ]
      }
    ]
  },
  {
    id: "study-skills",
    emoji: "📚",
    title: { en: "Study Skills", km: "ជំនាញសិក្សា" },
    description: {
      en: "Learn how to learn: focus, memory and good habits.",
      km: "រៀនពីរបៀបរៀន៖ ការផ្ចង់អារម្មណ៍ ការចងចាំ និងទម្លាប់ល្អ។"
    },
    lessons: [
      {
        id: "focus",
        title: { en: "Focus with Short Sessions", km: "ផ្ចង់អារម្មណ៍ជាមួយពេលរៀនខ្លីៗ" },
        video: "",
        content: {
          en: "<p>Your brain focuses best in short bursts. Try the <b>Pomodoro method</b>: study for 25 minutes with no phone, then rest for 5 minutes. After four rounds, take a longer break.</p><p>Remove distractions first, and decide exactly what you will study before you start.</p>",
          km: "<p>ខួរក្បាលរបស់អ្នកផ្ចង់អារម្មណ៍បានល្អបំផុតក្នុងរយៈពេលខ្លីៗ។ សូមសាកល្បង<b>វិធី Pomodoro</b>៖ រៀន ២៥ នាទីដោយមិនប្រើទូរស័ព្ទ រួចសម្រាក ៥ នាទី។ បន្ទាប់ពីបួនជុំ សូមសម្រាកឱ្យយូរជាងនេះ។</p><p>សូមដកចេញនូវអ្វីដែលរំខានជាមុនសិន ហើយសម្រេចចិត្តឱ្យច្បាស់ថាអ្នកនឹងរៀនអ្វីមុនពេលចាប់ផ្ដើម។</p>"
        },
        quiz: [
          {
            q: { en: "How long is one Pomodoro study session?", km: "តើពេលរៀនមួយ Pomodoro វែងប៉ុន្មាន?" },
            options: [
              { en: "5 minutes", km: "៥ នាទី" },
              { en: "25 minutes", km: "២៥ នាទី" },
              { en: "2 hours", km: "២ ម៉ោង" }
            ],
            answer: 1
          }
        ]
      },
      {
        id: "memory",
        title: { en: "Remember More", km: "ចងចាំបានកាន់តែច្រើន" },
        video: "",
        content: {
          en: "<p>Reading again and again is not the best way to remember. Better ways:</p><ul><li><b>Test yourself</b>: close the book and try to recall.</li><li><b>Space it out</b>: review after 1 day, 3 days, then a week.</li><li><b>Sleep well</b>: your brain stores memories while you sleep.</li></ul>",
          km: "<p>ការអានម្ដងហើយម្ដងទៀតមិនមែនជាវិធីល្អបំផុតដើម្បីចងចាំទេ។ វិធីល្អជាងនេះ៖</p><ul><li><b>ធ្វើតេស្តខ្លួនឯង</b>៖ បិទសៀវភៅ ហើយព្យាយាមរំលឹកឡើងវិញ។</li><li><b>រៀនឱ្យមានចន្លោះពេល</b>៖ រំលឹកក្រោយ ១ ថ្ងៃ ៣ ថ្ងៃ រួចមួយសប្តាហ៍។</li><li><b>គេងឱ្យបានគ្រប់គ្រាន់</b>៖ ខួរក្បាលរក្សាទុកការចងចាំពេលអ្នកដេក។</li></ul>"
        },
        quiz: [
          {
            q: { en: "Which is a good way to remember?", km: "តើមួយណាជាវិធីល្អក្នុងការចងចាំ?" },
            options: [
              { en: "Test yourself without the book", km: "ធ្វើតេស្តខ្លួនឯងដោយមិនមើលសៀវភៅ" },
              { en: "Stay up all night", km: "ភ្ញាក់ពេញមួយយប់" }
            ],
            answer: 0
          }
        ]
      }
    ]
  }
];

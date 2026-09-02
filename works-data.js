/*
 * works-data.js — Content for every individual work detail page.
 *
 * HOW TO FILL IN:
 * Find the work by its key and update any field.
 * Leave any field as "" or [] to show "—" or hide that section.
 *
 * premiere: free-form string, e.g. "March 2024 · Alice Tully Hall · Talea Ensemble"
 * duration: e.g. "~ 12′"
 * programNote: HTML string — wrap paragraphs in <p> tags.
 * video: YouTube embed URL (https://www.youtube.com/embed/ID), not the watch URL.
 * video2 / video2Caption: optional — for the rare work with a second recording worth
 *          showing (e.g. a different performance, a benefit-concert reel). video2 is a
 *          YouTube embed URL just like video. video2Caption is an HTML string overlaid
 *          in the bottom-left corner of that second video (use <br/> for line breaks) —
 *          typically used to credit that specific performance/program. Omit both fields
 *          entirely (don't set them to '') for works that only have one video.
 * issuuEmbed: ONLY the src URL — e.g. 'https://e.issuu.com/embed.html?d=lin_-_ternion&u=cosine_soundscapes'.
 *          Issuu's "embed code" button gives you a whole <div><iframe ...></iframe></div>
 *          snippet — do NOT paste that whole thing here. main.js already builds its own
 *          <iframe> (with its own sandbox/loading attributes) and drops this value into
 *          that iframe's src="..." — pasting the full snippet nests a second iframe tag
 *          inside the src attribute and breaks the embed. Copy out just the URL:
 *            1. On the Issuu embed code, find src="..." inside the <iframe> tag.
 *            2. Copy everything between the quotes (starts with https://e.issuu.com/embed.html?d=...).
 *            3. Paste ONLY that URL as this field's value.
 *          (Same rule as the `video` field above — same mistake happened there once already.)
 * storeId: unused — the Store page was removed. Left in place for now in case
 *          a store is reintroduced later.
 */

const WORKS_DATA = {

  // ── 2026 ────────────────────────────────────────────────────────────────────

  'time-stretch': {
    title: 'Time Stretch',
    year: '2026',
    instrumentation: 'percussion trio',
    duration: '12′',
    premiere: 'June 2026 · Salisbury Congregational Church, Salisbury, VT',
    category: 'Small Ensemble',
    programNote: `
      <p>Time Stretch is a work in 2 movements written for unpitched percussion inspired by the algorithmic processes of
      generative art. While the first movement, One Notch at a Time, follows an aurual composition process with
      materials produced beat by beat relying on ears, the remaining movement of the work takes the level of operation
      up by one step, focusing on manipulating musical motifs at a structrual, procedural, and process-based level. In
      other words, whereas the first movement centers on traditional composition techniques base on musical materials
      themselves, such as inversion, mirror, augmentation, etc., the remaining movement of the work has its materials
      organized and developed following customized algorithms directed by a script of Python code. It is then
      orchestrated as a final product by ear. I treat this piece as an experiment in embedding computational algorithmic
      thinking as a tool for musical motivic development, and aim to seek the essence of organized sounds through
      algorithms guided by ears, while asking whether and how can coded procedures meaningfully assist human
      musicians in shaping their musical ideas.</p>
    `,
    video: 'https://www.youtube.com/embed/DrqGoRacBLk?si=2LH198TeZ3atntQr',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'in-the-tower': {
    title: 'In the Tower',
    year: '2025–26',
    instrumentation: 'mini opera for 2 singers',
    duration: '12′',
    premiere: 'April 2026 · Studio 305, The Juilliard School, New York, NY',
    category: 'Vocal',
    programNote: '',
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'echoes-in-orbits': {
    title: 'Echoes in Orbits',
    year: '2026',
    instrumentation: '3 actors, 2 musicians, and 1 dancer',
    duration: '18′',
    premiere: 'January 2026 · Kaatsbaan Cultural Park, Tivoli, NY',
    category: 'Interdisciplinary',
    programNote: `
      <p>This project, titled Echoes in Orbits, reimagines Samuel Beckett’s Waiting for Godot by asking: What if
      Godot has been watching all along? Rather than focusing solely on Estragon and Vladimir’s endless waiting,
      I explore cycles of hope, faith, and despair through Godot’s imagined perspective. To realize this version,
      I intend to have two live musicians (one cellist and one pianist), a motion-sensing dancer, and three
      unscripted actors co-create a shifting world of sound, movement, and text, exploring what it means to
      wait, to listen, and to be seen.</p>
    `,
    video: 'https://www.youtube.com/embed/OryGUv3RKWY?si=AQaqmoeofHptzD98',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'laminations': {
    title: 'Laminations',
    year: '2026',
    instrumentation: 'interactive sound and video',
    duration: '7′',
    premiere: 'March 2026 · Rosemary and Meredith Willson Theater, The Juilliard School, New York, NY',
    category: 'Electronic',
    programNote: `
      <p>In everyday vision, our perception of depth depends on subtle, continuous negotiations between both
      eyes: a choreography of binocular cues, convergence, and parallax. When this negotiation is disrupted by
      a condition called “strabismus”, which often leads to stereo-blindness, the perception of three-dimensional
      space collapses into a singular plane. The world flattens, and spatial relationships must be
      reconstructed through alternative sensory strategies such as touch, movement, temporal changes, and
      sound.</p>
      <p>This piece, titled Laminations, translates this perceptual rupture into an audiovisual environment.
      Drawing inspiration from the parallax effect — a visual technique in which layered images move at
      differing velocities to simulate spatial depth —the work constructs an illusory three-dimensional space
      from two-dimensional visual strata, treating spatiality as something continuously assembled in real time.
      At center stage, the conductor functions as both a musical interpreter and a spatial mediator, shaping sonic
      “objects” through timbre, dynamics, spatial diffusion, and playback speed, with these gestures directly
      coupled to live visual transformations. Rather than recreating the clinical experience, this work invites
      audiences into a perceptual space where depth is no longer passively received, but actively constructed
      through embodied interactions.</p>
    `,
    video: 'https://www.youtube.com/embed/xgxDzwW7wO0?si=AJCHOeK5L8f_0Xwo',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  // ── 2025 ────────────────────────────────────────────────────────────────────

  'ternion': {
    title: 'Ternion',
    year: '2025',
    instrumentation: 'trumpet, horn, and trombone',
    duration: '7′',
    premiere: 'February 2026 · Paul Recital Hall, The Juilliard School, New York, NY',
    category: 'Small Ensemble',
    programNote: `
      <p>Commissioned by The Juilliard School for the Tianjin–New York Joint Faculty
      Recital celebrating the 2026 Lunar New Year.</p>
    `,
    video: 'https://www.youtube.com/embed/5BEP908ChUI?si=-M_uDQiVGHwH2Nqw',
    performances: [],
    issuuEmbed: 'https://e.issuu.com/embed.html?d=lin_-_ternion&u=cosine_soundscapes',
    storeId: 'ternion'
  },

  'first-pulse': {
    title: 'First Pulse',
    year: '2025',
    instrumentation: 'flute and electronics',
    duration: '8′',
    premiere: 'June 2025 · Dalton Recital Hall, Western Michigan University, Kalamazoo, MI',
    category: 'Electronic',
    programNote: `
      <p>Written for Robin Meiksins for the 2025 SPLICE Institute.</p>
    `,
    video: 'https://www.youtube.com/embed/5h5Kg1aU8hU?si=HtZmtvbbl633htKd',
    performances: [],
    issuuEmbed: 'https://e.issuu.com/embed.html?backgroundColorFullscreen=&d=first_pulse_final&u=cosine_soundscapes',
    storeId: 'first-pulse'
  },

  'of-drift-and-pulse': {
    title: 'Of Drift and Pulse',
    year: '2025',
    instrumentation: 'alto flute and guitar',
    duration: '6′',
    premiere: 'March 2025 · Paul Recital Hall & June Noble Larkin Lobby, The Juilliard School, New York, NY',
    category: 'Small Ensemble',
    programNote: `
      <p>Written for "Who's in the Lobby" with Jessie Montgomery.</p>
    `,
    video: 'https://www.youtube.com/embed/LIYcJtirvzU?si=V8yPSFxogi56x5Dg',
    performances: [],
    issuuEmbed: 'https://e.issuu.com/embed.html?backgroundColorFullscreen=&d=lin-of_drift_and_pulse&u=cosine_soundscapes',
    storeId: 'of-drift-and-pulse'
  },

  // ── 2024 ────────────────────────────────────────────────────────────────────

  'whale-eye': {
    title: 'Whale Eye',
    year: '2024',
    instrumentation: 'violoncello and orchestra',
    duration: '',
    premiere: '',
    category: 'Large Ensemble',
    programNote: `<p>Work in progress.</p>`,
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'cyborg': {
    title: 'Cyborg',
    year: '2024',
    instrumentation: 'clarinet, violin, and piano',
    duration: '9′30″',
    premiere: 'March 2025 · Alice Tully Hall, New York, NY',
    category: 'Small Ensemble',
    programNote: `
      <p>Commissioned by The Juilliard School.</p>
    `,
    video: 'https://www.youtube.com/embed/SmUhudlTxi0?si=bdI6bxpmpovm9SDD',
    performances: [],
    issuuEmbed: '',
    storeId: 'cyborg'
  },

  'the-essence-we-seek': {
    title: 'The Essence We Seek',
    year: '2024',
    instrumentation: 'mixed ensemble with dance',
    duration: '10′',
    premiere: 'November 2024 · Rosemary and Meredith Willson Theater, The Juilliard School, New York, NY',
    category: 'Interdisciplinary',
    programNote: `
      <p>“Like formless water, the search for a fixed definition dissolves upon contact. In our drive to analyze,
      to pin down the truth, we disturb the very essence we seek.”</p>
      <p style="text-align:right;">by Mason Evans & Yuxuan Lin</p>
    `,
    video: 'https://www.youtube.com/embed/3HJiEc75jUg?si=3hY3PU0j6D0--Z5G',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'tresses': {
    title: 'Tresses',
    year: '2024',
    instrumentation: 'piano quintet (violin, violin, viola, cello, piano)',
    duration: '6′30″',
    premiere: 'July 2024 · Studzinski Recital Hall, Brunswick, ME',
    category: 'Small Ensemble',
    programNote: `
      <p>Eye of the Tornado, a fabric work by the Chinese American artist Hong Chun Zhang, uses hair to form the image
      of a turbulent storm. Just as the art work juxtaposes the ferocity of the vortex with the elegance of women’s hair,
      Tresses explores the dramatic contradiction between violence and soft elegance, and forms a narration between
      the two.</p>
    `,
    video: 'https://www.youtube.com/embed/kJOewiRC0GQ?si=IziW4NxPVqTpeeDY',
    performances: [],
    issuuEmbed: '',
    storeId: 'tresses'
  },

  'guinea-pigs-cello-prize': {
    title: '"The Guinea Pigs Cello Prize"',
    year: '2024',
    instrumentation: 'undetermined instruments',
    duration: '',
    premiere: 'June 2024 · Studzinski Recital Hall, Brunswick, ME',
    category: 'Undetermined Instrumentation',
    programNote: `<p>For undetermined instruments. Flexible instrumentation with performance notes.</p>`,
    video: 'https://www.youtube.com/embed/JQmIp3KBcJ4?si=FDMQj5ApfddHMprP',
    performances: [],
    issuuEmbed: '',
    storeId: 'guinea-pigs-cello-prize'
  },

  'shimmering-veil': {
    title: 'Shimmering Veil',
    year: '2024',
    instrumentation: 'string quartet',
    duration: '6′30″',
    premiere: 'September 2024 · Sounds Promising Young Composers Program, Online Premiere',
    category: 'Small Ensemble',
    programNote: `
      <p>Lights stream into a pair of pupils, shimmering, shifting, and elusive. In trying to capture the
      source of glimmers, one struggles to pinpoint its location. Thus, they begin to dance with the
      shifting lights streaming into their eyes. On another day, with a pair of glasses, the shimmerings
      disappear. Is it a gift, or a misfortune? It is hard to tell. If not viewed as a condition, it might
      simply be a pair of eyes with a shimmering veil, yearning to seek out, connect, and be seen.</p>
    `,
    video: 'https://www.youtube.com/embed/6BrpCSTrII8?si=JV68U1CxIikAXTdX',
    performances: [],
    issuuEmbed: '',
    storeId: 'shimmering-veil'
  },

  'the-unspoken': {
    title: 'The Unspoken',
    year: '2024',
    instrumentation: 'flute, clarinet, violin, viola, cello, and piano',
    duration: '5′30″',
    premiere: 'July 2024 · Studzinski Recital Hall, Brunswick, ME',
    category: 'Small Ensemble',
    programNote: `
      <p>When desires fade, strength remains; when care deepens, turmoil ensues. For love that could neither
      be expressed out loud nor written in words, a piece of music might be the way to go, titled The
      Unspoken.</p>
      <p style="text-align:right;">-- -- Yuxuan Lin</p>
    `,
    video: 'https://www.youtube.com/embed/D37NrTEQPFo?si=LOxFJ_wLbAUCTvj8',
    performances: [],
    issuuEmbed: '',
    storeId: 'the-unspoken'
  },

  'stitched-sounds': {
    title: 'Stitched Sounds',
    year: '2020, revised 2024',
    instrumentation: 'string quartet',
    duration: '5′',
    premiere: 'August 2024 · Carriage House at Fort William Henry, Lake George, NY',
    category: 'Small Ensemble',
    programNote: `
      <p>This piece is composed for string quartet. It consists of multiple contrasting sound segments and their
      variations. All sound segments originating from different combinations of tempos, rhythms, pitches, timbres
      and meters are seperated with double bar-lines. The duration of the entire piece is approximately 5 min.</p>
    `,
    video: 'https://www.youtube.com/embed/nkOACIWieuc?si=-JkwcuGDO7GM1RiL',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'hocket': {
    title: 'Hocket',
    year: '2024',
    instrumentation: 'brass quintet (trumpet, trumpet, horn, trombone, tuba)',
    duration: '7′',
    premiere: '',
    category: 'Small Ensemble',
    programNote: `<p>Work in progress.</p>`,
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'tcepsorter': {
    title: 'Tcepsorter',
    year: '2024',
    instrumentation: 'piano and electronics',
    duration: '5′',
    premiere: 'April 2024 · Morse Recital Hall, The Juilliard School, New York, NY',
    category: 'Electronic',
    programNote: '',
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'echoes-of-the-streets': {
    title: 'Echoes of The Streets',
    year: '2024',
    instrumentation: 'cello solo and electronics',
    duration: '',
    premiere: 'March 2024 · Rosemary and Meredith Willson Theater, The Juilliard School, New York, NY',
    category: 'Electronic',
    programNote: `<p>Work in progress.</p>`,
    video: 'https://www.youtube.com/embed/sG9Esxi3Yns',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  // ── 2023 ────────────────────────────────────────────────────────────────────

  'three-miniatures': {
    title: 'Three Miniatures',
    year: '2023',
    instrumentation: 'violin, viola, and cello',
    duration: '5′30″',
    premiere: 'July 2024 · Studzinski Recital Hall, Brunswick, ME',
    category: 'Small Ensemble',
    programNote: '',
    video: 'https://www.youtube.com/embed/fm7NPL39ruI?si=PrJqItk6ge6A0tMH',
    performances: [],
    issuuEmbed: '',
    storeId: 'three-miniatures'
  },

  'cant-let-go': {
    title: 'Can\'t let go, when it returns',
    year: '2023',
    instrumentation: 'cello solo',
    duration: '6′',
    premiere: 'April 2024 · Paul Recital Hall, The Juilliard School, New York, NY',
    category: 'Solo',
    programNote: `
      <p>For people who are highly sentimental by nature, separation can be a terrifying event to
      deal with. Individuals meet, go through different things, build shared memories, and are
      separated according to God’s will when the time comes. This can be considered a basic
      model of how human connections are formed. What does it take for strangers to become
      close and feel connected? Similarly, how a group of sounds be gathered by a composer in
      ways that serve the designated musical purpose, just as a bond can be formed among
      people going through experiences together? We are the sounds in God’s composition,
      He’s got everything in the piece figured. As a sentimental person, I can’t easily let go of
      the precious bonds formed throughout life, but it is the expected separation that makes
      those bonds precious. To soften the fear of separation, it is our job to believe that sweet
      memories in life will come back sometime in the future, just as a coda will return at the
      end of a beautiful ballade.</p>
    `,
    video: 'https://www.youtube.com/embed/XfbmdmCQMwE?si=sV9hmDOxQIBA-q7h',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'cellimba-fusions-i': {
    title: 'Cellimba Fusions I',
    year: '2023',
    instrumentation: '2 cellos and 2 marimbas',
    duration: '7′',
    premiere: 'June 2023 · The Big Barn, Putney, VT',
    category: 'Small Ensemble',
    programNote: '',
    video: 'https://www.youtube.com/embed/KHtQEdjRA10?si=poq4GUicw-1f8Pb1',
    performances: [],
    issuuEmbed: '',
    storeId: 'cellimba-fusions-i'
  },

  'to-seoul-forest': {
    title: 'To Seoul Forest',
    year: '2023',
    instrumentation: 'flute, clarinet, violin, viola, cello, piano, and vibraphone',
    duration: '5–8′',
    premiere: 'June 2023 · The Big Barn, Putney, VT',
    category: 'Large Ensemble',
    programNote: `
      <p>I had a chance to visit Seoul Forest for the first time with a close friend
      of mine who was a native there. It was very refreshing and pleasant,
      but so short that I still have endless reminiscence of the beautiful
      scenery. In response to my experience as a first-time tourist, I had the
      vibraphone taking the tourist role who gets to decide where to go, and
      the pierrot ensemble creating the sceneries which are labeled
      as “entrance” and “exist” with “parks” in between. The piece
      aims to capture the peaceful and refreshing atmosphere of the Seoul
      Forest and recreate the experience of a 1st-time tourist who was
      wandering here and there, switching places, leaving and reentering as
      wishes.</p>
    `,
    video: 'https://www.youtube.com/embed/nBM3MHwFcI4?si=SGtCQVRfVhNgEKod',
    performances: [],
    issuuEmbed: '',
    storeId: 'to-seoul-forest'
  },

  'optical-tones': {
    title: 'Optical Tones',
    year: '2023',
    instrumentation: 'flute, viola, and harp',
    duration: '',
    premiere: '',
    category: 'Small Ensemble',
    programNote: `<p>Work in progress.</p>`,
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'one-step-further': {
    title: 'One Step Further',
    year: '2023',
    instrumentation: 'viola and piano',
    duration: '7′',
    premiere: 'April 2023 · Paul Recital Hall, The Juilliard School, New York, NY',
    category: 'Small Ensemble',
    programNote: '',
    video: 'https://www.youtube.com/embed/nBM3MHwFcI4?si=SGtCQVRfVhNgEKod',
    performances: [],
    issuuEmbed: '',
    storeId: 'one-step-further'
  },

  'the-monolith-odyssey': {
    title: 'The Monolith Odyssey',
    year: '2023',
    instrumentation: 'mixed ensemble and electronics',
    duration: '8′',
    premiere: 'March 2023 · Rosemary and Meredith Willson Theater, The Juilliard School, New York, NY',
    category: 'Electronic',
    programNote: '',
    video: 'https://www.youtube.com/embed/zyoGwkIECEQ?si=ZRBQhnPIXoS9NfGc&start=3',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'feint': {
    title: 'Feint',
    year: '2023',
    instrumentation: 'cello solo',
    duration: '4′',
    premiere: '',
    category: 'Solo',
    programNote: '',
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  // ── 2022 ────────────────────────────────────────────────────────────────────

  'six-quatrains': {
    title: 'Six Quatrains',
    year: '2022',
    instrumentation: 'soprano, violin, cello, and piano',
    duration: '11′',
    premiere: 'November 2023 · Paul Recital Hall, The Juilliard School, New York, NY',
    category: 'Vocal',
    programNote: `<p>Published by North Star Music LLC.</p>`,
    video: 'https://www.youtube.com/embed/zF8B-xG-IE0?si=g75tOvgnec9zilkj&start=3',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'variant': {
    title: 'Variant',
    year: '2022',
    instrumentation: 'viola solo',
    duration: '6′',
    premiere: 'April 2022 · Paul Recital Hall, The Juilliard School, New York, NY',
    category: 'Solo',
    programNote: '',
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  // ── 2021 ────────────────────────────────────────────────────────────────────

  'to-quad': {
    title: 'To Quad',
    year: '2020, revised 2021',
    instrumentation: '2 percussionists',
    duration: '13′',
    premiere: 'March 2022 · Morse Recital Hall, The Juilliard School, New York, NY',
    category: 'Small Ensemble',
    programNote: '',
    video: 'https://www.youtube.com/embed/OKwwso5lBOw?si=YDHRrKVq4pkBKmA6&start=3',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'song-of-the-traveller': {
    title: 'Song of the Traveller at Evening',
    year: '2021',
    instrumentation: 'tenor and piano',
    duration: '4′30″',
    premiere: '',
    category: 'Vocal',
    programNote: '',
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'erased-bach': {
    title: 'Erased Bach',
    year: '2021',
    instrumentation: 'sibelius MIDI playback',
    duration: '3′',
    premiere: '',
    category: 'Electronic',
    programNote: '',
    video: 'https://www.youtube.com/embed/OKwwso5lBOw?si=YDHRrKVq4pkBKmA6&start=3',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  // ── 2020 ────────────────────────────────────────────────────────────────────

  'angular-cycle': {
    title: 'Angular Cycle',
    year: '2020',
    instrumentation: 'tenor saxophone and piano',
    duration: '5′30″',
    premiere: '',
    category: 'Small Ensemble',
    programNote: '',
    video: 'https://www.youtube.com/embed/AfoVnHF6I3c?si=QzNGY4Wrb4A9Iokn&start=4',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'seven-ways-towards-silence': {
    title: 'Seven Ways Towards Silence',
    year: '2020',
    instrumentation: 'solo clarinet in B♭',
    duration: '18′30″',
    premiere: '',
    category: 'Solo',
    programNote: '',
    video: 'https://www.youtube.com/embed/AXuHtIVGaxw?si=9coNfX6qsVRhvbgV&start=4',
    video2: 'https://www.youtube.com/embed/thawDAmaPZQ?si=zeqLMYhsmurHGO5u',
    video2Caption: `Tokyo to New York 東京とニューヨーク<br/>
      "MOMENTS IN THIS TIME"<br/>
      Benefit Concert for Covid-19 Musicians Relief<br/>
      Thomas Piercy, Artistic Director<br/>
      RACHEL (YUXUAN) LIN "Running with accidents" for clarinet *`,
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'go-and-catch-a-falling-star': {
    title: 'Go and Catch a Falling Star',
    year: '2020',
    instrumentation: 'alto and piano',
    duration: '4′30″',
    premiere: '',
    category: 'Vocal',
    programNote: '',
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'tango': {
    title: 'Tango',
    year: '2020',
    instrumentation: 'violin, cello, and piano',
    duration: '3′30″',
    premiere: '',
    category: 'Small Ensemble',
    programNote: '',
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  // ── 2019 ────────────────────────────────────────────────────────────────────

  'alone': {
    title: 'Alone',
    year: '2019',
    instrumentation: 'flute and piano',
    duration: '5′',
    premiere: '',
    category: 'Small Ensemble',
    programNote: '',
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'expedition': {
    title: 'Expedition',
    year: '2019',
    instrumentation: 'cello and piano',
    duration: '3′30″',
    premiere: '',
    category: 'Small Ensemble',
    programNote: '',
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  },

  'variations-harmonic-ostinato': {
    title: 'Variations on a Harmonic Ostinato in A minor',
    year: '2019',
    instrumentation: 'violin and piano',
    duration: '3′30″',
    premiere: '',
    category: 'Small Ensemble',
    programNote: '',
    video: '',
    performances: [],
    issuuEmbed: '',
    storeId: ''
  }

};

const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [
    {
      category: 'General',
      name: 'Mail',
      key: 'm',
      url: 'https://gmail.com',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'mail',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Drive',
      key: 'd',
      url: 'https://drive.google.com',
      search: '/drive/search?q={}',
      color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
      icon: 'drive',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'GitHub',
      key: 'g',
      url: 'https://github.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Whatsapp',
      key: 'w',
      url: 'https://web.whatsapp.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'whatsapp',
      quickLaunch: true,
    },
    {
      category: 'Carnegie Mellon',
      name: 'Piazza',
      key: '1234',
      url: 'https://piazza.com/',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'keep',
      quickLaunch: true,
    },
    {
      category: 'Carnegie Mellon',
      name: 'Box',
      key: '1234',
      url: 'https://cmu.app.box.com/folder/0',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'keep',
      quickLaunch: false,
    },
    {
      category: 'Carnegie Mellon',
      name: 'Canvas',
      key: '1234',
      url: 'https://canvas.cmu.edu/',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'keep',
      quickLaunch: false,
    },
    {
      category: 'Carnegie Mellon',
      name: 'SIO',
      key: '1234',
      url: 'https://s3.andrew.cmu.edu/sio',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'keep',
      quickLaunch: false,
    },
    {
      category: 'Carnegie Mellon',
      name: 'Stellic',
      key: '1234',
      url: 'https://academicaudit.andrew.cmu.edu/',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'keep',
      quickLaunch: false,
    },


    {
      category: 'Fun',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    
    {
      category: 'Class Pages',
      name: '18-742',
      key: '1234',
      url: 'https://ece.cmu.edu/~ece742',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'keep',
      quickLaunch: false,
    },
    {
      category: 'Class Pages',
      name: '18-725',
      key: '1234',
      url: 'https://canvas.cmu.edu/courses/32533',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'keep',
      quickLaunch: false,
    },
    {
      category: 'Class Pages',
      name: '18-632',
      key: '1234',
      url: 'https://canvas.cmu.edu/courses/32532',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'keep',
      quickLaunch: false,
    },
    {
      category: 'Class Pages',
      name: 'Geology',
      key: '1234',
      url: 'https://canvas.cmu.edu/courses/32643',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'keep',
      quickLaunch: false,
    },
    {
      category: 'Class Pages',
      name: 'Acting',
      key: '1234',
      url: 'https://canvas.cmu.edu/courses/33013',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'keep',
      quickLaunch: false,
    },
    {
      category: 'Class Pages',
      name: 'OS-Chip',
      key: '1234',
      url: 'https://canvas.cmu.edu/courses/33967',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'keep',
      quickLaunch: false,
    },
    {
      name: 'Duckduckgo',
      key: '*',
      url: 'https://duckduckgo.com',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      search: '/?q={}'
    },
    /* {
      category: 'Other',
      name: 'Notion',
      key: 'ns',
      url: 'https://www.notion.so',
      color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
      icon: 'notion',
      quickLaunch: true,
    }, */
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/cmu', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: false,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ':',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};

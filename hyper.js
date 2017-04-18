module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: 'Hack, Inconsolata-dz, Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,0.5)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // color of the text
    foregroundColor: '#657b83',

    // terminal background color
    backgroundColor: '#fff',

    // border color (window, tabs)
    borderColor: '#fff',

    // custom css to embed in the main window
    css: '.nav.tabs: {color: black !important}',

    // custom css to embed in the terminal window
    termCSS: '* { line-height: 14px }',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '0px 10px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black:        '#003541',
      red:          '#e84b5a',
      green:        '#2eae51',
      yellow:       '#b58901',
      blue:         '#a066ff',
      magenta:      '#cc00ff',
      cyan:         '#2aa198',
      white:        '#a6c3af',
      lightBlack:   '#002833',
      lightRed:     '#cb4b16',
      lightGreen:   '#586e75',
      lightYellow:  '#657b83',
      lightBlue:    '#839496',
      lightMagenta: '#6c6ec6',
      lightCyan:    '#93a1a',
      lightWhite:   '#fff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {
      ITERM_PROFILE: 'light'
    },

    // set to false for no bell
    bell: false,

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};

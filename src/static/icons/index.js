import React from 'react'

import CppIcon from './cpp.svg'
import CssIcon from './css.svg'
import ElixirIcon from './elixir.png'
import GithubIcon from './github.svg'
import GitIcon from './git.svg'
import JavascriptIcon from './javascript.svg'
import JavaIcon from './java.svg'
import LuaIcon from './lua.svg'
import NginxIcon from './nginx.svg'
import NodeIcon from './node.svg'
import ReactIcon from './reactIcon.svg'
import RailsIcon from './rails.svg'
import SchoolIcon from './school.svg'
import TwitterIcon from './twitter.svg'
import UbuntuIcon from './ubuntu.svg'
import VimIcon from './vim.svg'
import WorkIcon from './workIcon.svg'

export default {
  cpp: <img src={CppIcon} />,
  css: <img src={CssIcon} title='css' />,
  elixir: <img src={ElixirIcon} />,
  github: <img src={GithubIcon} />,
  git: <img src={GitIcon} />,
  javascript: <img src={JavascriptIcon} />,
  java: <img src={JavaIcon} />,
  lua: <img src={LuaIcon} />,
  nginx: <img src={NginxIcon} />,
  node: <img src={NodeIcon} />,
  _react: <img src={ReactIcon} />, // Underscore prefix is required because react is a global variable in react apps, I believe.
  rails: <img src={RailsIcon} />,
  school: <img src={SchoolIcon} />,
  twitter: <img src={TwitterIcon} />,
  ubuntu: <img src={UbuntuIcon} />,
  vim: <img src={VimIcon} />,
  work: <img src={WorkIcon} />
}

export const displayNames = {
  cpp: 'C++',
  css: 'CSS',
  elixir: 'Elixir',
  github: 'GitHub',
  git: 'Git',
  javascript: 'Javascript',
  java: 'Java',
  lua: 'Lua',
  nginx: 'NGINX',
  node: 'Node',
  _react: 'React',
  rails: 'Ruby on Rails',
  school: 'School',
  twitter: 'Twitter',
  ubuntu: 'Ubuntu',
  vim: 'Vim',
  work: 'Work'
}

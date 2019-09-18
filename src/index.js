// @flow

import React from 'react'
import { render } from 'react-dom'

import { Database } from '@nozbe/watermelondb'
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs'

import { mySchema } from 'models/schema'
import Blog from 'models/Blog'
import Post from 'models/Post'
import Comment from 'models/Comment'

import Root from 'components/Root'

const adapter = new LokiJSAdapter({
  dbName: 'WatermelonDemo',
  schema: mySchema,
})

const database = new Database({
  adapter,
  modelClasses: [Blog, Post, Comment],
  actionsEnabled: true,
})

render(<Root database={database} />, document.getElementById('application'))

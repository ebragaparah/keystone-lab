var keystone = require('keystone');
var Types = keystone.Field.Types;

var News = new keystone.List('News', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
});

News.add({
  category: { type: String },
  hat: { type: String },
  title: { type: String },
  author: { type: String },
  description: {
    brief: { type: Types.Html, wysiwyg: true, height: 150 },
    extended: { type: Types.Html, wysiwyg: true, height: 400 }
  }
});

News.register();

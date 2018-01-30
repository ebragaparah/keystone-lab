var keystone = require('keystone');
var Types = keystone.Field.Types;

var News = new keystone.List('News', {
  map: { name: 'metadata.title' },
  autokey: { path: 'slug', from: 'metadata.title', unique: true },
});

News.add({
  updated_at: { type: Date, default: Date.now },
  published_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
  status: { type: String },
  sections: { type: Types.TextArray },
  tags: { type: Types.TextArray },
  related_news: { type: Types.Relationship, ref: 'News', many: true },
  metadata: {
    title: { type: String },
    layout: { type: String },
    display_area: { type: String },
    hat: { type: String },
    description: { type: String },
    author: { type: String },
    editor: { type: String },
    place: { type: String },
    most_read: { type: Boolean },
    area: { type: String },
    cover: {
      link: { type: String },
      original: { type: String },
      thumbnail: { type: String },
      medium: { type: String },
      small: { type: String },
      title: { type: String },
      credits: { type: String },
      subtitle: { type: String },
      mobile : {
	small: { type: String },
	medium: { type: String },
	thumbnail: { type: String },
	original: { type: String },
	link: { type: String }
      }
    },
    url: { type: String }
  }
});

News.register();

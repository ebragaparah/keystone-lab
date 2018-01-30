var keystone = require('keystone');
var Types = keystone.Field.Types;

var News = new keystone.List('News', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
});

News.add({
  _id: { type: String },
  updated_at: { type: Date, default: Date.now },
  published_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
  status: { type: String },
  sections: ,
  tags: ,
  related_news: { type: Types.Relationship, ref: 'News', many: true },
  metadata: {
    layout: { type: String },
    title: { type: String },
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
  },
  __v: { type: String }
});

News.register();

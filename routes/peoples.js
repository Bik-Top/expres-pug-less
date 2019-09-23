var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let  girls = [
    {
      id:11,
      name: 'Elizaveta',
      age: 29,
      link: 'images/peoples/photo-11.png',
      online: true,
      photos: 8,
      videos: 2,
    },
    {
      id:10,
      name: 'Alice',
      age: 22,
      link: 'images/peoples/photo-10.png',
      online: false,
      photos: 6,
      videos:0,
    },
    {
      id:9,
      name: 'Elizaveta',
      age: 23,
      link: 'images/peoples/photo-9.png',
      online: true,
      photos: 0,
      videos:13,
    },
    {
      id:8,
      name: 'Elizaveta',
      age: 23,
      link: 'images/peoples/photo-8.png',
      online: true,
      photos: 4,
      videos:3,
    },
    {
      id:7,
      name: 'Elizaveta',
      age: 23,
      link: 'images/peoples/photo-7.png',
      online: true,
      photos: 4,
      videos:3,
    },
    {
      id:6,
      name: 'Elizaveta',
      age: 23,
      link: 'images/peoples/photo-6.png',
      online: true,
      photos: 4,
      videos:3,
    },
    {
      id:5,
      name: 'Elizaveta',
      age: 23,
      link: 'images/peoples/photo-5.png',
      online: true,
      photos: 4,
      videos:3,
    },
    {
      id:4,
      name: 'Elizaveta',
      age: 23,
      link: 'images/peoples/photo-4.png',
      online: true,
      photos: 4,
      videos:3,
    },
    {
      id:3,
      name: 'Elizaveta',
      age: 23,
      link: 'images/peoples/photo-3.png',
      online: true,
      photos: 4,
      videos:3,
    },
    {
      id:2,
      name: 'Elizaveta',
      age: 23,
      link: 'images/peoples/photo-2.png',
      online: true,
      photos: 4,
      videos:3,
    },
    {
      id:1,
      name: 'Elizaveta',
      age: 23,
      link: 'images/peoples/photo-1.png',
      online: true,
      photos: 4,
      videos:3,
    },
    {
      id:0,
      name: 'Elizaveta',
      age: 23,
      link: 'images/peoples/photo-0.png',
      online: true,
      photos: 4,
      videos:3,
    }
  ];
  res.render('peoples', {
    title: 'peoples?girls',
    girls: girls
  });
  next();
});

module.exports = router;

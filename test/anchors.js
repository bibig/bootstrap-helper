
var should = require('should');
var Anchors = require('../index').anchors;

describe('helper anchors unit test', function () {

  it('basic test', function () {
    var args = 'http://www.google.com|google';
    var html = Anchors.render(args);

    html.should.eql('<a href="http://www.google.com">google</a>');
  });

  it('with fa icon', function () {

    Anchors.render('http://www.google.com|i:fa-camera-retro|google')
      .should.eql('<a href="http://www.google.com"><i class="fa fa-camera-retro"></i> google</a>');

    Anchors.render('http://www.google.com|google|i:fa-camera-retro')
      .should.eql('<a href="http://www.google.com"><i class="fa fa-camera-retro"></i> google</a>');

  });

  it('with glyphicon icon', function () {
    
    Anchors.render('http://www.google.com|i:search|google')
      .should.eql('<a href="http://www.google.com"><span class="glyphicon glyphicon-search"></span> google</a>');

  });

  it('with customize icon', function () {
    
    Anchors.render('http://www.google.com|I:/images/logo.png|google')
      .should.eql('<a href="http://www.google.com"><img src="/images/logo.png">google</a>');

  });

  it('with more properties define', function () {
    
    Anchors.render('http://www.google.com|i:search|.:brand|google')
      .should.eql('<a href="http://www.google.com" class="brand"><span class="glyphicon glyphicon-search"></span> google</a>');    

    Anchors.render('http://www.google.com|i:search|#:brand|google')
      .should.eql('<a href="http://www.google.com" id="brand"><span class="glyphicon glyphicon-search"></span> google</a>');    

  });

  it('with customize properties define', function () {
    
    Anchors.render('http://www.google.com|custom:search|google')
      .should.eql('<a href="http://www.google.com" custom="search">google</a>');

  });

  it('test array arguments', function () {
    var args = [
      'http://www.google.com|google',
      'http://www.github.com|github'
    ];
    var links = Anchors.render(args);
    (links.length).should.eql(2);
    links.should.eql([
      '<a href="http://www.google.com">google</a>',
      '<a href="http://www.github.com">github</a>'
    ]);
  });

  it('test with wrong args', function () {
    Anchors.render('hahaha').should.eql('hahaha');
  });

});
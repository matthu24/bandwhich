# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## Overview 

Bandwhich is a music app designed for users to discover music by local independant singer-songwriters.  

It is written with a Rails back-end and React-redux front-end and uses Bandcamp (bandcamp.com) as a design inspiration.

All music and images are original content from myself and friends, and are hosted using AWS S3 Simple Storage.  Other 

technologies used include Postgresql database, jquery, Jbuilder, vanilla Javascript and react-router.

Here is a link to the live site: https://bandwhich.herokuapp.com/#/.


## Feature highlights 

### User Authentication 

A simple Rails authentication pattern was implemented for this app.  Users can sign up for an account, and can

log in using the same password credentials.  Instead of a user password, a password digest is stored in the database,

and users are given a session token each time they log in. Demo login is also available so that signup isn't 

necessary.

### Music Streaming 

### 





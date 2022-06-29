## Table of contents
* [General info](#general-info)
* [Features](#features)
* [Copy of content](#Copy-of-content)
* [Technologies](#technologies)
* [Status](#status)
* [Setup](#setup)

## General info
Application for calculate netto i brutto

## Features
* form validation
* description validation  including maxlength and required
* Radio button validation including required and not checked by default
* select input with vat values including required
* Calculate brutto and netto price
* Submit button with validation,sending form data to api endpoint 'https://formsubmit.co/'
* data can be downloaded via email from 'https://formsubmit.co/'

## Technologies
Project is created with:
* Vue 3.2.13
* vue-router 4.0.3

## Status
working on
	
## Setup
To run this project, install it locally using npm:

```
$ git clone https://github.com/Datureli/clicktrains.git
$ cd frontEndLearning
$ npm install
$ npm run serve
```
## Copy of content
If you want to get a copy of the data from the form, you should do the following:
* Follow the steps in setup
* Go to the components folder and find a file named Form.vue
* At the top there is the beginning of the form and the action attribute
* The action attribute contains a link to the api endpoint and a unique email provided at the end of the address
* To get a copy, please enter your email address as follows "https://formsubmit.co/your-email-adress",
* Example: "https://formsubmit.co/soleris1@gmail.com"
* Fill in all the fields and click the submit button
* In a new window you will be redirected to https://formsubmit.co/
* Optionally, a re captcha test will appear, if this does not mean your copy has been sent



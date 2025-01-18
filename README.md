# QR Code Generator API

A NestJS-based API for generating QR codes with support for text and JSON data.

## Features

- Generate QR codes from text/URLs
- Generate QR codes from JSON data
- Multiple output formats (PNG, SVG, UTF8)
- Swagger API documentation

## Installation
$ npm install

## Running the app
$ npm run start

development
$ npm run start
watch mode
$ npm run start:dev
production mode
$ npm run start:prod

## API Documentation

Once the application is running, visit `/api` to view the Swagger documentation.

## API Endpoints

### Generate QR Code from Text
POST `/qr/generate`

### Generate QR Code from JSON
POST `/qr/generate-json`

## Environment Variables

No environment variables are required for basic setup.
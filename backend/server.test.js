const request = require('supertest');
const express = require('express');
const { mockProducts } = require('./constants');

const app = express();

app.get('/products', (req, res) => {
});

describe('GET /products', () => {
});

'use strict';

/**
 * venture service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::venture.venture');

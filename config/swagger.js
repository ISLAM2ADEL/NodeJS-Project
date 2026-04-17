import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Personal Finance API',
      version: '1.0.0',
      description: 'API documentation for the Expense Tracker project',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./Routes/*.js'], // This tells swagger to look at your route files for docs
};

export const specs = swaggerJsdoc(options);
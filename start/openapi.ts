const openapi = {
  openapi: '3.0.0',
  info: {
    title: 'Adonis App API',
    version: '1.0.0',
    description: 'Minimal OpenAPI spec for the app',
  },
  servers: [{ url: '/'}],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [{ bearerAuth: [] }],
  paths: {
    '/api/v1/auth/signup': {
      post: {
        summary: 'Sign up',
        requestBody: { content: { 'application/json': { schema: { type: 'object' } } } },
        responses: { '200': { description: 'User created' } },
      },
    },
    '/api/v1/auth/login': {
      post: { summary: 'Login', responses: { '200': { description: 'Logged in' } } },
    },
    '/api/v1/account/profile': {
      get: { summary: 'Get profile', responses: { '200': { description: 'Profile' } } },
      patch: {
        summary: 'Update profile',
        requestBody: { content: { 'application/json': { schema: { type: 'object' } } } },
        responses: { '200': { description: 'Profile updated' } },
      },
    },
    '/api/v1/account': {
      delete: { summary: 'Delete account', responses: { '200': { description: 'Deleted' } } },
    },
    '/api/v1/users': {
      get: { summary: 'List users', responses: { '200': { description: 'Users list' } } },
    },
    '/api/v1/users/{id}': {
      get: {
        summary: 'Get user',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { '200': { description: 'User' } },
      },
    },
  },
}

export default openapi

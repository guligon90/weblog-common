import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { RequestHandler } from 'express';

interface IAPIDocsServer {
  url: string;
  description?: string;
}

type TAPIDocsHandler = Array<RequestHandler[] | RequestHandler>;

const buildApiDocsHandlers = (
  title: string,
  apiVersion: string,
  description: string,
  servers: IAPIDocsServer[],
  apiModules: string[],
  openApiVersion = '3.0.0',
): TAPIDocsHandler => {
  const options = {
    definition: {
      openapi: openApiVersion,
      info: {
        title,
        version: apiVersion,
        description,
      },
      servers,
    },
    apis: apiModules,
  };

  const specs = swaggerJSDoc(options);

  return [swaggerUI.serve, swaggerUI.setup(specs)];
};

export { buildApiDocsHandlers, IAPIDocsServer, TAPIDocsHandler };

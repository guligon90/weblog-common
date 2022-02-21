import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { RequestHandler } from 'express';

interface IAPIDocsServer {
  url: string;
}

type TAPIDocsHandler = Array<string | RequestHandler[] | RequestHandler>;

type TAPIDocsServers = IAPIDocsServer[];

const apiDocsHandler = (
  openApiVersion = '3.0.0',
  route = 'api-docs',
  title: string,
  apiVersion: string,
  description: string,
  servers: TAPIDocsServers,
  apiModules: string[],
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

  return [route, swaggerUI.serve, swaggerUI.setup(specs)];
};

export { apiDocsHandler, IAPIDocsServer, TAPIDocsHandler, TAPIDocsServers };

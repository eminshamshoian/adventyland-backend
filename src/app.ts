import { config } from './config';
import express, { Express } from 'express';
import { AdventyServer } from './setupServer';
import databaseConnection from './setupDatabase';

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: AdventyServer = new AdventyServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();

application.initialize();

import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';
import gamesRoutes from './routes/gamesRoutes';
import indexRoutes from './routes/indexRoutes';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    /**
     * Configure express
     */
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); // Para hacer que el servidor entienda JSON
        this.app.use(express.urlencoded({ extended: false }));
    }

    /**
     * Define routes
     */
    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
    }

    /**
     * Initialize server
     */
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();

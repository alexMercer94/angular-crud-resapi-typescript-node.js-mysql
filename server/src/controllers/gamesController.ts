import { Request, Response } from 'express';
import pool from '../database';

class GamesController {
    /**
     * List games from database
     * @param req Request
     * @param res Response
     */
    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }

    /**
     * Get just a game from databse
     * @param req Request
     * @param res Response
     */
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        if (games.length > 0) {
            return res.json(games[0]);
        }

        res.status(404).json({ text: "The game doesn't exist" });
    }

    /**
     * Create a game in Database
     * @param req Request
     * @param res Response
     */
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO games SET ?', [req.body]);
        res.json({ message: 'Games saved' });
    }

    /**
     * Delete a game in Database
     * @param req Request
     * @param res Response
     */
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({ message: 'The game was deleted' });
    }

    /**
     * Update a game in Database
     * @param req Request
     * @param res Response
     */
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
        res.json({ message: 'The game was updated' });
    }
}

const gamesController = new GamesController();
export default gamesController;

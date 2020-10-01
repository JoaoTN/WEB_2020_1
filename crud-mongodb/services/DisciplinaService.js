const DisciplinaModel = require('../models/DisciplinaModel');
class DisciplinaService {
    static register(req, res) {
        DisciplinaModel.create(req.body)
            .then(
                (Disciplinas) => {
                    res.status(201).json(Disciplinas);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }
    static list(req, res) {
        DisciplinaModel.find()
            .then(
                (Disciplinas) => {
                    res.status(201).json(Disciplinas);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }
    static update(req, res) {
        DisciplinaModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true })
        .then(
            (Disciplinas) => {
                res.status(201).json(Disciplinas);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }
    static delete(req, res) {
        DisciplinaModel.findByIdAndRemove(req.params.id)
        .then(
            (Disciplinas) => {
                res.status(201).json(Disciplinas);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }
    static retrieve(req, res) {
        DisciplinaModel.findById(req.params.id)
        .then(
            (Disciplinas) => {
                res.status(201).json(Disciplinas);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }
}
module.exports = DisciplinaService;
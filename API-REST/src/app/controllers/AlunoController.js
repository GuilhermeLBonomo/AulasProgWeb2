import AlunoRepository from '../repositories/AlunoRepository.js';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await AlunoRepository.findAll();
      res.status(200).json(alunos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao listar os alunos', details: error.message });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const aluno = await AlunoRepository.findById(id);
      if (aluno.length === 0) {
        return res.status(404).json({ message: `Aluno com ID ${id} não encontrado.` });
      }
      res.status(200).json(aluno[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar o aluno', details: error.message });
    }
  }

  async store(req, res) {
    const aluno = req.body;
    try {
      if (!aluno.alunos_nome || !aluno.alunos_grupo) {
        return res.status(400).json({ message: 'Nome e grupo do aluno são obrigatórios.' });
      }

      const resultado = await AlunoRepository.create(aluno);
      res.status(201).json({ message: 'Aluno criado com sucesso!', aluno: resultado });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar o aluno', details: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const aluno = req.body;

    try {
      const alunoExistente = await AlunoRepository.findById(id);
      if (alunoExistente.length === 0) {
        return res.status(404).json({ message: `Aluno com ID ${id} não encontrado.` });
      }
      const resultado = await AlunoRepository.update(id, aluno);
      if (resultado.affectedRows === 0) {
        return res.status(400).json({ message: `Falha ao atualizar o aluno com ID ${id}.` });
      }

      res.status(200).json({ message: `Aluno com ID ${id} atualizado com sucesso!` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar o aluno', details: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const alunoExistente = await AlunoRepository.findById(id);
      if (alunoExistente.length === 0) {
        return res.status(404).json({ message: `Aluno com ID ${id} não encontrado.` });
      }

      const resultado = await AlunoRepository.delete(id);
      if (resultado.affectedRows === 0) {
        return res.status(400).json({ message: `Falha ao deletar o aluno com ID ${id}.` });
      }

      res.status(200).json({ message: `Aluno com ID ${id} deletado com sucesso!` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao deletar o aluno', details: error.message });
    }
  }
}

export default new AlunoController();

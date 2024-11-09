import AnimeRepository from "../repositories/animeRepository";
import { Anime } from "../models/anime";

class AnimeService {
  static async listarAnimes() {
    return await AnimeRepository.findAll();
  }

  static async obterAnime(id: string) {
    return await AnimeRepository.findById(id);
  }

  static async criarAnime(animeData: Omit<Anime, "id">) {
    this.validarAnimeParaCriacao(animeData);
    return await AnimeRepository.create(animeData);
  }

  static async atualizarAnime(
    id: string,
    animeData: Partial<Omit<Anime, "id">>,
  ) {
    this.validarAnimeParaAtualizacao(animeData);
    return await AnimeRepository.update(id, animeData);
  }

  static async deletarAnime(id: string) {
    return await AnimeRepository.delete(id);
  }

  private static validarAnimeParaCriacao(animeData: Omit<Anime, "id">) {
    const { name, genre, studio } = animeData;
    if (!name || !genre || studio === undefined) {
      throw new Error("Todos os campos são obrigatórios: name, genre, studio");
    }
  }

  private static validarAnimeParaAtualizacao(
    animeData: Partial<Omit<Anime, "id">>,
  ) {
    const { name, genre, studio } = animeData;
    if (name === undefined && genre === undefined && studio === undefined) {
      throw new Error(
        "Pelo menos um campo deve ser fornecido para atualização: name, genre, studio",
      );
    }
  }
}

export default AnimeService;

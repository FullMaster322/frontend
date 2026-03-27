import { apiClient } from './api'

class LectureService {
  constructor(api) {
    this.api = api
    this.endpoint = '/lectures'
  }

  async getAll() {
    return this.api.get(this.endpoint)
  }

  async getById(id) {
    return this.api.get(`${this.endpoint}/${id}`)
  }

}

export const lectureService = new LectureService(apiClient)

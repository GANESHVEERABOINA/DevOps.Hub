import api from './api';
export const questionService = {
  getAll: (params: any) => api.get('/questions', { params }),
  getById: (id: string) => api.get(`/questions/${id}`),
  bookmark: (itemType: string, itemId: string) => api.post('/bookmarks', { item_type: itemType, item_id: itemId }),
  removeBookmark: (itemType: string, itemId: string) => api.delete(`/bookmarks/${itemType}/${itemId}`),
};
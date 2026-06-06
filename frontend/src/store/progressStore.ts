import { create } from 'zustand';
import api from '../services/api';

interface ProgressState {
  summary: any;
  fetchSummary: () => Promise<void>;
}
export const useProgressStore = create<ProgressState>((set) => ({
  summary: null,
  fetchSummary: async () => {
    const { data } = await api.get('/progress/summary');
    set({ summary: data });
  },
}));
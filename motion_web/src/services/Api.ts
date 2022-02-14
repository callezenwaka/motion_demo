'use strict'

// import axios from 'axios';
import axios from "axios";
type method = "get" | "GET" | "delete" | "DELETE" | "post" | "POST" | "put" | "PUT" | undefined;

// export default apiClient;
import Username from '@/types/Username';
export const request = async (url: string, method: method, data?: Username): Promise<any> => {
  return await axios({
    method: method,
    url: `${url}`,
    data: data,
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
    }
  });
};

export const API_URL = '/api/';

export default {
	async addUsername(params: Username): Promise<unknown> {
		return await request(`${API_URL}username`, 'post', params);
	},
	async getUsernames(): Promise<any> {
		return await request(`${API_URL}username`, 'get');
	},
	async updateUsername(params: Username): Promise<unknown> {
		return await request(`${API_URL}username/${params.id}`, 'put', params);
	},
	async getUsername(id: string): Promise<any> {
		return await request(`${API_URL}username/${id}`, 'get');
	},
	async deleteUsername(id: string): Promise<unknown> {
		return await request(`${API_URL}username/${id}`, 'delete');
	},
};
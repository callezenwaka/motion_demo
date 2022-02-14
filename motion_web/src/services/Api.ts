'use strict'

// import axios from 'axios';
import axios from "axios";
type method = "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "purge" | "PURGE" | "link" | "LINK" | "unlink" | "UNLINK" | undefined;

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

// Uncomment for development environment
export const API_URL = '/api/';
// Uncomment for local development
// export const API_URL = 'http://localhost:4000/api/';

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
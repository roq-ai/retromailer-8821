import axios from 'axios';
import queryString from 'query-string';
import { EmailListInterface, EmailListGetQueryInterface } from 'interfaces/email-list';
import { GetQueryInterface } from '../../interfaces';

export const getEmailLists = async (query?: EmailListGetQueryInterface) => {
  const response = await axios.get(`/api/email-lists${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createEmailList = async (emailList: EmailListInterface) => {
  const response = await axios.post('/api/email-lists', emailList);
  return response.data;
};

export const updateEmailListById = async (id: string, emailList: EmailListInterface) => {
  const response = await axios.put(`/api/email-lists/${id}`, emailList);
  return response.data;
};

export const getEmailListById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/email-lists/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEmailListById = async (id: string) => {
  const response = await axios.delete(`/api/email-lists/${id}`);
  return response.data;
};

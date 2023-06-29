import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface EmailListInterface {
  id?: string;
  email: string;
  client_id?: string;
  created_at?: any;
  updated_at?: any;

  client?: ClientInterface;
  _count?: {};
}

export interface EmailListGetQueryInterface extends GetQueryInterface {
  id?: string;
  email?: string;
  client_id?: string;
}

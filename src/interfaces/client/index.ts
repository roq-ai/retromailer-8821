import { EmailListInterface } from 'interfaces/email-list';
import { TemplateInterface } from 'interfaces/template';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ClientInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  email_list?: EmailListInterface[];
  template?: TemplateInterface[];
  user?: UserInterface;
  _count?: {
    email_list?: number;
    template?: number;
  };
}

export interface ClientGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}

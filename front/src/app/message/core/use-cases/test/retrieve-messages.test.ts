import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';

import { createRequestHttp, RequestHttp } from 'src/utils/request-http/request-http';
import { LocalStorage, Message, MessageType } from 'src/app/entities';
import { apiUpdateMessageReadById } from 'src/app/message/adapters/api/api-update-message-read-by-id';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

describe('apiUpdateMessageReadById', () => {
  const axiosInstance: AxiosInstance = {} as AxiosInstance;
  const requestHttp: RequestHttp = createRequestHttp({ storage: {} as LocalStorage });
  const message: Message = {
    id: 123456,
    contact:{
      firstname: 'Paul',
      lastname: 'Lepoulpe',
      phone: '0010101010',
      email:'test@gmail.Com'
    },
    subject: 'testUpdate',
    body: 'need to update this message',
    date: (new Date().getTime()).toString(),
    read: false,
    realtorId: 'agence_xxx',
    type: MessageType.EMAIL
  }

  it('should update message read status', async () => {
  const mock: MockAdapter = new MockAdapter(axios);

  // Set up the mock response
    mock.onPatch(`/realtors/${message.realtorId}/messages/${message.id}`).reply(200, message);

    const updateMessageReadByIdQuery = apiUpdateMessageReadById({ requestHttp });
    const result = await updateMessageReadByIdQuery(message);


    expect(result.message.read).toEqual(true);

  });
});

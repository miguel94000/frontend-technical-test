import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { Message, MessageType } from 'src/app/entities';
import { MessageExtraArgs } from 'src/redux/store';
import { retrieveMessagesByRealtorId } from '../retrieve-messages';

// Create a mock for the messageListQuery function
const messageListQueryMock = jest.fn();
const messageUpdateByIdQueryMock = jest.fn();
const messageUpdateListByRealtorIdQueryMock = jest.fn();

// Define the extra argument for the createAsyncThunk function
const extra: MessageExtraArgs = {
  messageListQuery: messageListQueryMock,
  messageUpdateByIdQuery:  messageUpdateByIdQueryMock,
  messageUpdateListByRealtorIdQuery : messageUpdateListByRealtorIdQueryMock
};

describe('retrieveMessagesByRealtorId', () => {
  // Clear the messageListQueryMock after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should retrieve messages by realtor id', async () => {
    // Define the expected parameters for the messageListQuery function
    const realtorId = '123';
    const pageNumber = 1;
    const pageSize = 10;

    // Define the expected result of the messageListQuery function
    const messages: Message[] = [
      {
        subject: 'Test subject',
        body: 'Test body',
        read: false,
        type: MessageType.EMAIL,
        contact: {
          firstname: 'John',
          lastname: 'Doe',
          email: 'johndoe@example.com',
          phone: '1234567890',
        },
        date: '2023-02-23T12:00:00.000Z',
        id: 1,
        realtorId,
      },
    ];

    // Mock the messageListQuery function to return the expected result
    messageListQueryMock.mockResolvedValueOnce(messages);

    // Define the parameters for the retrieveMessagesByRealtorId action creator
    const params = {
      realtor_id: realtorId,
      pageNumber,
      pageSize,
    };

    // Call the retrieveMessagesByRealtorId action creator
    const action: AsyncThunk<
    Readonly<{
        messages: Readonly<Array<Message>>;
    }>,
    {realtor_id: string, pageNumber: number, pageSize: number},
    { extra: MessageExtraArgs }
    > = retrieveMessagesByRealtorId(params, { extra });

    // Get the result of the action creator
    const result = await action(null);

    // Expect that the messageListQuery function was called with the expected parameters
    expect(messageListQueryMock).toHaveBeenCalledWith(realtorId, pageNumber, pageSize);

    // Expect that the action creator returned the expected result
    expect(result.payload.messages).toEqual(messages);
  });
});

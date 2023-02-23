import { store } from 'src/redux/store';
import { updateMessageReadById } from '../update-message-read-by-id';
import { retrieveRealtors } from 'src/app/realtor/core/use-cases/retrieve-realtors';
import { retrieveMessagesByRealtorId } from '../retrieve-messages';
import { Message } from 'src/app/entities';

describe('messageSlice', () => {


  test('Update read message by id', async () => {
    // Realtors List
  let realtor = ""
  await store.dispatch(retrieveRealtors())
  .unwrap()
  .then(result => realtor = result.realtors[0].id.toString())
    // Retrieve message by ID: On ne possède pas de endPoint avec une recherche par message non lu donc on prend les 20 premiers
    store.dispatch(retrieveMessagesByRealtorId({pageNumber:1,pageSize:20, realtor_id: realtor}))
    .unwrap()
    .then(result => result.messages.find((message) => message.read === false))
    // Update message by ID
    .then((result) =>{
      if(result){
        return store.dispatch(updateMessageReadById({message: result})).unwrap()
      }
      return undefined
    })
    .then((result)=>  {
      if(result){
        expect(result.message.read).toBe(true)
      }
    })
  });
});

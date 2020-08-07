import firebase from '../../lib/firestore.api';
import {extractFireStoreDocuments} from '../../lib/helpers/extract-firesotore-documents';

export default (req: any, res: any) => {
  firebase
    .collection('posts')
    .get()
    .then((doc) => {
      res.json(extractFireStoreDocuments(doc));
    })
    .catch((error) => {
      res.json({error});
    });
};

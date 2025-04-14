## CRUD Operations in Firestore

### READ
Firebase provides two methods to get data from documents:

#### `getDocs()`
1. the `getDoc()` is used to fetch multiple `documents` from a `collection`.

2. it takes one main arg i.e, `collection referance` returned by `collection()`

3. the `getDocs()` returns a `QuerySnapshot` which is like an object.
4. Inside `QuerySnapshot` there is an important prop called `.docs`, which is an array of documents.
5. each item in `.docs()` is a `DocumentSnapshot` (just like an object) and each `DocumentSnapshot` contains one main prop and method called `.id` & `.data()`.
    1. `.id`: this prop returns the `id` of the document
    2. `.data()`: this method returns the `data object`
import jsonPlaceholder from '../apis/JSONPlaceholder';
export const fetchPosts = () => {
  const promise = jsonPlaceholder.get('/posts');
  return {
    type: 'FETCH_POST',
    payload: promise
  };
};

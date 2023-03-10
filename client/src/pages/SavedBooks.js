import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';
import { getMe, deleteBook } from '../utils/API';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';
import { QUERY_PROFILE } from '../utils/queries'
import { DELETE_BOOK } from '../utils/mutations';

const SavedBooks = () => {
  
  const [deleteBook , {error, deleteBookData}] = useMutation(DELETE_BOOK)
  const userID = Auth.getProfile().data._id
  // use this to determine if `useEffect()` hook needs to run again

  const { loading, data } = useQuery(QUERY_PROFILE, {
    variables: { _id: userID},
  }
    );

  if (loading) {
    return <div>Loading...</div>;
  }

  var userData = data.myUser
  console.log(loading)
  console.log(data)
  
  console.log(userID)

  
  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log("Hello Friend!")
    if (!token) {
      
      return false;
    }

    try {
      console.log("oh no")
      const {deleteData} = await deleteBook ({
        variables: {bookId}
      })
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
    window.location.reload(false)
  };


  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;

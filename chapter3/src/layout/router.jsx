import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movie from '../pages/movie';
import RootLayout from './root-layout';
import Movies from '../pages/movies';
import NowPlaying from '../pages/now-playing';
import Popular from '../pages/popular';
import TopRated from '../pages/top-rated';
import UpComing from '../pages/up-coming';
import NotFound from '../pages/not-found';
import styled from 'styled-components';

const White = styled.h2`
  color: white;
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Movie /> },
      {
        path: 'login',
        element: <White>로그인 페이지</White>,
      },
      {
        path: 'signup',
        element: <White>회원가입 페이지</White>,
      },
      {
        path: 'search',
        element: <White>검색페이지</White>,
      },
      { path: 'movies', element: <Movies /> },
      { path: 'movies/now-playing', element: <NowPlaying /> },
      { path: 'movies/popular', element: <Popular /> },
      { path: 'movies/top-rated', element: <TopRated /> },
      { path: 'movies/up-coming', element: <UpComing /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

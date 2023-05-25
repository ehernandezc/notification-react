import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from '../layout';
import { NotificationAdd } from '../notifications/NotificationAdd';
import { NotificationList } from '../notifications/NotificationList';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/add" element={<NotificationAdd />} />
        <Route path="/" element={<NotificationList />} />
      </Route>
    </Routes>
  </Router>
);

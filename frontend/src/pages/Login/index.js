import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { Container, Form } from './styles';
import api from '../../services/api';

export default function Login({ bgColor, history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/devs', {
      username
    });
    const { _id } = response.data;
    history.push(`/dev/${_id}`);
  }

  return (
    <Container bgColor={bgColor}>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          type="text"
          placeholder="Inform your Github username..."
          value={username}
          onChange={e => setUsername(e.target.value)}
          required="required"
        />
        <button type="submit">Send</button>
      </Form>
    </Container>
  );
}

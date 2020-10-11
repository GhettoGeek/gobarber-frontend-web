import styled from 'styled-components';
import signInBackgroundImg from '../../assets/images/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 5rem;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 1.5rem;
    }

    a {
      color: var(--color-white);
      text-decoration: none;
      display: block;
      margin-top: 1.5rem;
      transition: color 0.2s;

      &:hover {
        color: var(--color-white-darken);
      }
    }
  }
  > a {
    color: var(--color-primary);
    text-decoration: none;
    display: block;
    margin-top: 1.5rem;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: var(--color-primary-darken);
    }
    svg {
      margin-right: 1rem;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

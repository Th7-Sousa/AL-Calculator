import styled from "styled-components";

const ComponentStyle = styled.div`
  .secao-text {
    max-width: 55rem;
    display: flex;
    align-items: center;
  }

  .secao-text p {
    color: #fff;
    font-size: 27px;
    text-align: center;
  }

  .container-form {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  .formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
    max-width: max-content;
  }

  .formulario p {
    font-size: 20px;
  }

  .formulario input {
    color: #fff;
    width: 18rem;
    height: 2.2rem;
    border: 2px solid #fff;
    border-radius: 8px;
    background-color: #5c3c8b;
    padding: 0.3rem;
    margin-bottom: 0.3rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .formulario button {
    background-color: #000;
    padding: 0.5rem 4rem;
    color: #fff;
    border-radius: 8px;
    margin-top: 0.5rem;
    width: 18.5rem;
    cursor: pointer;

    box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);
  }

  button:hover {
    background-color: #191970;
    transform: scale(1.02);
    transition: all 0.5s;
  }

  @media (max-width: 340px) {
    input,
    button {
      max-width: 13rem;
    }
  }
  @media (max-width: 242px) {
    input,
    button {
      max-width: 9rem;
    }
  }
`;

export default ComponentStyle;

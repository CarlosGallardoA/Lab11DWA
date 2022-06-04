import { Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as ROUTES from "../../router/routes";
const Home = () => {
  const [values, setValues] = useState({
    name: "",
    second_name: "",
    lastname: "",
    second_lastname: "",
    email: "",
    dni: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSendData = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <Container>
      <form onSubmit={handleSendData}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Registro Mode desarrollo</h1>
          </Grid>
          <Grid item xs={6}>
            <TextFieldContainer>
              <TextField
                name="name"
                label="Name"
                fullWidth
                onChange={handleInputChange}
              />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextField
                name="second_name"
                label="Second Name"
                fullWidth
                onChange={handleInputChange}
              />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextField
                name="lastname"
                label="LastName"
                fullWidth
                onChange={handleInputChange}
              />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextField
                name="second_lastname"
                label="Second LastName"
                fullWidth
                onChange={handleInputChange}
              />
            </TextFieldContainer>
          </Grid>
          <Grid item xs={6}>
            <TextFieldContainer>
              <TextField
                name="email"
                label="Email"
                fullWidth
                onChange={handleInputChange}
              />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextField
                type="number"
                name="dni"
                label="DNI"
                fullWidth
                onChange={handleInputChange}
                required={true}
              />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextField
                type="password"
                name="password"
                label="Password"
                fullWidth
                onChange={handleInputChange}
              />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextField
                name="address"
                label="Address"
                fullWidth
                onChange={handleInputChange}
              />
            </TextFieldContainer>
          </Grid>
          <Grid item xs={12}>
            {values.dni ? (
              <LinkCustom to={`/about/${values.dni}`}>
                <Button color="primary" variant="contained">
                  Registrar
                </Button>
              </LinkCustom>
            ) : (
              <Button color="primary" variant="contained">
                Registrar
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
      {values.name ? (
        <h1>
          Hola {values.name} {values.second_name} {values.lastname}{" "}
          {values.second_lastname}
        </h1>
      ) : (
        ""
      )}
      {values.email ? <p>Con correo {values.email}</p> : ""}
    </Container>
  );
};
const TextFieldContainer = styled.div`
  margin-bottom: 1rem;
`;
const LinkCustom = styled(Link)`
  text-decoration: none;
`;
export default Home;

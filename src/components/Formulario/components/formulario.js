import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          institucion: "",
        }}
        validate={(valores) => {
          let errores = {};
          //Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingrese sus dos nombres";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "Solo debe contener letras y espacios";
          }
          //Validacion apellido
          if (!valores.apellido) {
            errores.apellido = "Por favor ingrese sus dos apellidos";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
            errores.apellido = "Solo debe contener letras y espacios";
          }
          //Validacion email
          if (!valores.email) {
            errores.email = "Por favor ingrese su email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "Solo debe contener letras, numeros, puntos, guiones y guion bajo";
          }
          //Validacion institucion
          if (!valores.institucion) {
            errores.institucion = "Por favor ingrese su institucion";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.institucion)) {
            errores.institucion = "Solo debe contener letras y espacios";
          }
          return errores;
        }}
        onSubmit={async (valores, { resetForm }) => {
          resetForm();
          console.log("Formulario Enviado");
          console.log("Valores:", valores);
          const respuesta = await axios.post(
            "http://localhost:4000/api/users", {valores}
          );
          console.log("Response:", respuesta);
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombres</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingrese sus dos nombres"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div>
              <label htmlFor="apellido">Apellidos</label>
              <Field
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Ingrese sus dos apellidos"
              />
              <ErrorMessage
                name="apellido"
                component={() => <div className="error">{errors.apellido}</div>}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese su email"
              />
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
            </div>
            <div>
              <label htmlFor="institucion">Institución</label>
              <Field
                type="text"
                id="institucion"
                name="institucion"
                placeholder="Ingrese la institucion que pertenece"
              />
              <ErrorMessage
                name="institucion"
                component={() => (
                  <div className="error">{errors.institucion}</div>
                )}
              />
            </div>
            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <div className="modal-dialog modal-sm">
                <p className="exito">FORMULARIO ENVIADO CON EXITO!</p>
              </div>
            )}
          </Form>
        )}
        {/* {({values,errors, touched, handleSubmit, handleChange, handleBlur}) => (
          <form className="formulario" onSubmit={handleSubmit}>
              {console.log(touched)}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingrese sus dos nombres"
                values={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
            </div>
            <div>
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Ingrese sus dos apellidos"
                values={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.apellido && errors.apellido && <div className="error">{errors.apellido}</div>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese su email"
                values={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="institucion">Institución</label>
              <input
                type="text"
                id="institucion"
                name="institucion"
                placeholder="Ingrese la institucion que pertenece"
                values={values.institucion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.institucion && errors.institucion && <div className="error">{errors.institucion}</div>}
            </div>
            <button type="submit">Enviar</button>
            {formularioEnviado && <p className="exito">FORMULARIO ENVIADO CON EXITO!</p>}
          </form>
        )}*/}
      </Formik>
    </>
  );
};
export default Formulario;

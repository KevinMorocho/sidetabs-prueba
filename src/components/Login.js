import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { connect } from "react-redux";


const CLIENT_ID =
  "140733596270-rgj1ppnggaioc6h7hi5d4rn3s6mh0eqf.apps.googleusercontent.com";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: "",
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login(response) {
    if (response.accessToken) {
      console.log("login",response.profileObj); //

      this.props.download(true);

      this.setState((state) => ({
        isLogined: true,
        accessToken: response.profileObj.name,
        image: response.profileObj.imageUrl,
      }));
    }
  }

  logout(response) {
    this.props.download(false);
    this.setState((state) => ({
      isLogined: false,
      accessToken: "",
    }));
  }

  handleLoginFailure(response) {
    console.log("algo", response)
    alert("No se ha podido iniciar la sesión");
  }

  handleLogoutFailure(response) {
    alert("No se ha podido cerrar la sesión");
  }

  componentDidMount(){
    console.log("login DID MOUNT",this.state)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-auto">
          {this.state.accessToken ? (
            <label>
              <h6>
                <br />
                <img src={this.state.image} alt="" width="30" height="30" />
                {this.state.accessToken}
              </h6>
            </label>
          ) : (
            <h6>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-check-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </h6>
          )}
        </div>
        <div className="col-md-auto">
          {this.state.isLogined ? (
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText="Cerrar Sesión"
              onLogoutSuccess={this.logout}
              onFailure={this.handleLogoutFailure}
            ></GoogleLogout>
          ) : (
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Iniciar Sesión"
              onSuccess={this.login}
              onFailure={this.handleLoginFailure}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
              responseType="code,token"
            />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  capasPorMostrar: state.capasPorMostrar,
  capas: state.capas,
});

const mapDispatchToProps = (dispatch) => ({
  download(isLogin) {
    if (isLogin) {
        console.log("Debería agregar");
      dispatch({
        type: "LOGIN",
      });
    } else {
        console.log("Debería quitar");
      dispatch({
        type: "LOGOUT",
      });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);



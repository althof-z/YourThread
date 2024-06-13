import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = async ({ name, email, password }) => {
    const isSuccess = await dispatch(asyncRegisterUser({ name, email, password }));
    if (isSuccess) {
      navigate('/');
    }
  };

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3 className="text-white">Sign Up</h3>
                  <p className="mb-4 text-white">
                    If You are New Here, Come Register
                  </p>
                </div>
                <RegisterInput register={onRegister} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/logo_xl.png" className="img-fluid" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

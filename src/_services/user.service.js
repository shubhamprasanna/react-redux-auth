
export const userService = {
    login,
    logout
};

const user = { username: 'shubhamp', name: 'Shubham Prasanna', email: 'shubhamprasanna@gmail.com'};

function login(username, password) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // };

    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));

    //         return user;
    //     });
    return new Promise((resolve, reject) => {
      console.log(username, 'userrname')
      setTimeout(() => {
        if (username === 'shubhamp') {
          localStorage.setItem('user', JSON.stringify(user));
          resolve({
            user: user
          })
        } else {
          reject('Invalid User!')
        }
      }, 2000);
    })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
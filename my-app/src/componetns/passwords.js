import React, {
    Component
} from 'react';
class Password extends React.Component {
        state = {
            isLoading: true,
            users: [],
            error: null
        };
        getFetchUsers() {
            this.setState({
                loading: true
            }, () => {
                fetch("http://localhost:3000/passwords").then(res => res.json()).then(result => this.setState({
                    loading: false,
                    users: result
                })).catch(console.log);
            });
        }
        componentDidMount() {
            this.getFetchUsers();
        }
        render() {
            const {
                users,
                error
            } = this.state;
            return (
              <React.Fragment>
              {
                    error ? <p>
              {
                        error.message
                    } </p> : null}  {
                        users.map(user => {
                            const {
                                pass,
                                crypt
                            } = user;
                            return (                                            
                                <tr key={pass}>
                                    <td>{pass}</td>
                                    <td>{crypt}</td>
                                </tr>                                                         
                            );
                        })
                    } </React.Fragment> );
            }
        }
export default Password;
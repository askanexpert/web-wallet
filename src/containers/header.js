import {connect} from 'react-redux';
import {login} from '../actions/index';

import Header from '../components/header';

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps, {login})(Header);

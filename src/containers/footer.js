import {connect} from 'react-redux';
import {leadCapture} from '../actions/index';

import Footer from '../components/footer';

function mapStateToProps({lead}) {
  return {lead};
}

export default connect(mapStateToProps, {leadCapture})(Footer);

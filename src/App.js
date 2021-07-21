import { useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar.component'
import Content from './components/Content/Content.component'
import { connect } from 'react-redux';
import { fetchTicketDataStart } from './Redux/tickets/ticket.actions'

function App({ fetchTicketDataStart }) {

  useEffect(() => {
    fetchTicketDataStart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchTicketDataStart: () => dispatch(fetchTicketDataStart())
})

export default connect(null, mapDispatchToProps)(App);

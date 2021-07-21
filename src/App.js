import { useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar.component'
import Content from './components/Content/Content.component'
import { connect } from 'react-redux';
import { fetchTickets } from './Redux/tickets/ticket.actions'

function App({ fetchTickets }) {

  useEffect(() => {
    fetchTickets()
  },[])

  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchTickets: () => dispatch(fetchTickets())
})

export default connect(null, mapDispatchToProps)(App);

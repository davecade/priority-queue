import { useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar.component'
import Content from './components/Content/Content.component'
import Modal from './components/Modal/Modal.component'
import EditModal from './components/Modal/Edit/Edit-Modal.component'
import AssignModal from './components/Modal/Assign/Assign-Modal.component'
import { connect } from 'react-redux';
import { fetchTicketDataStart } from './Redux/tickets/ticket.actions'


function App({ fetchTicketDataStart }) {

  useEffect(() => {
    fetchTicketDataStart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="App">
      <Modal />
      <EditModal />
      <AssignModal />
      <Navbar />
      <Content />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchTicketDataStart: () => dispatch(fetchTicketDataStart())
})

export default connect(null, mapDispatchToProps)(App);

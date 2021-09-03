import { useEffect } from 'react';
import './App.scss';
import Content from './components/Content/Content.component'
import CreateModal from './components/Modal/Create/Create-Modal.component'
import EditModal from './components/Modal/Edit/Edit-Modal.component'
import AssignModal from './components/Modal/Assign/Assign-Modal.component'
import Navbar from './components/navbar/navbar.component'
import { connect } from 'react-redux';
import { fetchTicketDataStart } from './Redux/tickets/ticket.actions'
import { fetchUserDataStart } from './Redux/users/user.actions'
import ErrorBoundary from './components/Error-Boundary/error-boundary.component'
// import { createStructuredSelector } from 'reselect'
// import { selectTicketList } from './Redux/tickets/ticket.selectors'
// import { selectUserList } from './Redux/users/user.selectors'
//import { addCollectionAndDocuments } from './Firebase/firebase.utils'


function App({ fetchTicketDataStart, fetchUserDataStart }) {

  useEffect(() => {
      fetchTicketDataStart();
      fetchUserDataStart();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <ErrorBoundary>
        <CreateModal />
        <EditModal />
        <AssignModal />
        <Navbar />
        <Content />
      </ErrorBoundary>
    </div>
  );
}

// const mapStateToProps = state => ({
//   ticketList: state.tickets.ticketList,
//   userList: state.users.userList,
// })

const mapDispatchToProps = dispatch => ({
  fetchTicketDataStart: () => dispatch(fetchTicketDataStart()),
  fetchUserDataStart: () => dispatch(fetchUserDataStart())
})

//addToFirebase: tickets => dispatch(addToFirebase(tickets))

export default connect(null, mapDispatchToProps)(App);

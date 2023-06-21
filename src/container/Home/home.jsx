import React from "react"; 
// import { connect } from "react-redux";
import { set_data } from "../../Store/Action/action";
import { useSelector, useDispatch } from "react-redux";



function Home() {
  const myState = useSelector((state) => ({user: state.users}));
  const dispatch = useDispatch();
  console.log(myState)
    // const [count, setCount] = useState(0)
    return (
      <>
        <div>
            <h1>Home</h1>
            <button onClick={() => dispatch(set_data())}>Set Data</button>
        </div>
      </>
    )
  }

  // const mapStateToProps = (state)=> ({
  //   users: state.users
  // })

  // const mapDispatchToProps = (dispatch) => ({
  //   set_data:() => 
  //     dispatch(set_data())
  // })
  
  // console.log("state", state.users)
  
  // export default connect (mapStateToProps, mapDispatchToProps) (Home);
  export default Home;
  
import React from 'react'
import Header from '../Layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Layout/Footer'

function RouterConnection() {
  return (
    <>
      <div>
  {/*Preloader area start here*/}
 
    <Header/>
    <Outlet/>
    <Footer/>
    <div id="scrollUp">
    <i className="fa fa-angle-up" />
  </div>
  {/* End scrollUp  */}
  {/* Search Modal Start */}
  <div aria-hidden="true" className="modal fade search-modal" role="dialog" tabIndex={-1}>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span className="flaticon-cross" />
    </button>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="search-block clearfix">
          <form>
            <div className="form-group">
              <input className="form-control" placeholder="Search Here..." type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default RouterConnection
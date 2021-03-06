import React, { Component } from "react";
import {connect} from 'react-redux';
class SanPham extends Component {
  
  render() {
    let { sp } = this.props;
    return (
        <div className="col-md-6 col-lg-3">
          <div className="product add">
            <a className="img-prod" data-toggle="modal" data-target="#modelProduct">
              <img
                className="img-fluid" width={250} height={250}
                src={'./images/product/'+sp.image}
                id="imagePd"
                alt="Vegetables Store"
              />
              <span className="status">{sp.sales}%</span>
              <div className="overlay" />
            </a>
            <div className="text py-3 pb-4 px-3 text-center">
              <h3>
                <a href="#">{sp.productname}</a>
              </h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price">
                    <span className="mr-2 price-dc">{sp.sales === 0 ? '' : sp.sales}</span>
                    <span className="price-sale">{sp.priceaverage.toLocaleString()}</span>
                  </p>
                </div>
              </div>
              <div className="bottom-area d-flex px-3">
                <div className="m-auto d-flex">
                  <a
                    href="#"
                    className="add-to-cart d-flex justify-content-center align-items-center text-center"
                  >
                    <span>
                      <i className="ion-ios-menu" />
                    </span>
                  </a>
                  <a style={{cursor:'pointer'}}
                    onClick={()=>{this.props.themGioHang(sp)}}
                    className="buy-now d-flex justify-content-center align-items-center mx-1"
                  >
                    <span>
                      <i className="ion-ios-cart" />
                    </span>
                  </a>
                  <a
                    href="#"
                    className="heart d-flex justify-content-center align-items-center "
                  >
                    <span>
                      <i className="ion-ios-heart" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      
    );
  }
}
const mapDispatchToProps = (dispath) =>{
  return {
    //T???o ra props component l?? function => ????a d??? li???u l??n store.
    themGioHang: (sanPham) =>{
      const spGioHang = {
        image: sanPham.image,
        productid:sanPham.productid,
        productname:sanPham.productname,
        priceaverage:sanPham.priceaverage,
        soLuong:1
      }
      //T???o action ????a d??? li???u l??n reducer
      const action ={
        type: 'THEM_GIO_HANG', //b???t bu???c ?????t type
        spGioHang: spGioHang  //N???i dung g???i l??n reducer
      }
      console.log(action)
      //D??ng h??m dispatch ????a d??? li???u action l??n reducer
      dispath(action);
    }
  }
}
export default connect(null,mapDispatchToProps)(SanPham)

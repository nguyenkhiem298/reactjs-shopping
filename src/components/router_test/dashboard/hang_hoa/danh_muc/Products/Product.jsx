import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemShow: 0,
            status: false,
            actions: {
                thongTin: true,
                theKho: false,
                tonKho: false,
                lienKetKenhBan: false,
            }
        }
    }

    showThongTin = () => {
        return(
            <div> thong tin </div>
        )
    }
    
    showTheKho = () => {
        return(
            <div> the kho </div>
        )
    }
    showTonKho = () => {
        return(
            <div> ton kho </div>
        )
    }
    showLienKetKenhBanHang = () => {
        return(
            <div> show Lien Ket Kenh Ban Hang </div>
        )
    }


    show1 = () => {

        // console.log(this.props);

        return (
            <tr>
                <td colSpan="7">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Thông Tin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Thẻ Kho</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tồn Kho</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Liên Kết Kênh Bán Hàng</a>
                        </li>
                    </ul>
                </td>
            </tr>
        )
    }


    handleShow = ()=>{
        if(this.state.status === false) {
            return null;
        }else {
            return this.show1();
        }
    }

    handleClick = () => {
        if(this.state.status === false) {
            this.setState({itemShow: this.props.pro.id})
            this.setState({status: true});
        }else {
            this.setState({itemShow: 0})
            this.setState({status: false});
        }
        console.log(this.state.itemShow);
    }

    render() {


        return (
            <>
                <tr>
                    <th scope="row">{this.props.pro.id}</th>
                    <td>{this.props.pro.id_product}</td>
                    <td>{this.props.pro.name}</td>
                    <td>{this.props.pro.cost}</td>
                    <td>{this.props.pro.price}</td>
                    <td>{this.props.pro.inventory}</td>
                    <td><button onClick={ this.handleClick } type="button" className="btn btn-secondary">Action</button></td>
                </tr>
                {this.handleShow()}
            </>
        )
    }
}

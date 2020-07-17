import React, { Component } from "react";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
     Arr1:{   
      A: ["Ace", "Acqua", "Azazil"],
      B: ["Baz", "Bash", "Binga"],
      C: ["Cabba", "Columbia", "Caf"]},
      Arr2:{
        A:[],B:[],C:[]
      }
    };
    this.search = this.search.bind(this);
  }

componentWillMount(){
    let ob = this.state.Arr1
    this.setState({Arr2:ob})
}

  search(e) {
    let filter_a = this.state.Arr1.A.filter(item=>item.toUpperCase().includes(e.target.value.toUpperCase()))
    let filter_b = this.state.Arr1.B.filter(item=>item.toUpperCase().includes(e.target.value.toUpperCase()))
    let filter_c = this.state.Arr1.C.filter(item=>item.toUpperCase().includes(e.target.value.toUpperCase()))
    console.log(e.target.value, "A", filter_a)
    //console.log("A",filter_a,"B",filter_b,"C",filter_c)
    let ob = {A:filter_a,B:filter_b,C:filter_c}
    this.setState({Arr2:ob})
  }
  render() {
    const A_letters = this.state.Arr2.A.map((a_letter) => (
      <li className="list-group-item">
        <a href="#">{a_letter}</a>
      </li>
    ));
    const B_letters = this.state.Arr2.B.map((b_letter) => (
      <li className="list-group-item">
        <a href="#">{b_letter}</a>
      </li>
    ));
    const C_letters = this.state.Arr2.C.map((c_letter) => (
      <li className="list-group-item">
        <a href="#">{c_letter}</a>
      </li>
    ));

    return (
      <div className="">
        <input
          className="form-control mt-2 mb-2"
          placeholder="Search .."
          onInput={this.search}
        />
        <ul className="list-group">
          <li className="list-group-item btn-warning active text-white">A</li>
          {A_letters}
          <li className="list-group-item btn-warning active text-white">B</li>
          {B_letters}
          <li className="list-group-item btn-warning active text-white">C</li>
          {C_letters}
        </ul>
      </div>
    );
  }
}

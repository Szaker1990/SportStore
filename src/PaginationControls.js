import React, {Component} from "react";
import {PaginationButtons} from "./PaginationButtons";

export class PaginationControls extends Component{
    constructor(props) {
        super(props);
        this.pageSizes = this.props.size || [5 ,10, 25, 100];
        this.sortKeys = this.props.keys || ["Name", "Price"];
    }

    sortKey2Label = (key) =>{
        return {Name: "nazwy", Price: "ceny"}[key];
    }

    handlePageSizeChange = (e) =>{
        this.props.setPageSize(e.target.value);
    }

    handleSortPropertyChange = (e) =>{
        this.props.setSortPropert(e.target.value)
    }

    render() {
        return <div className={"m-2"}>
            <div className={"text-center m-1"}>
                <PaginationButtons currentPage={this.props.currentPage}
                  pageCount={this.props.pageCount}
                  navigate={this.props.navigateToPage} />
            </div>
            <div className={"form-inline justify-content-center"}>
                <select className="form-control"
                        onChange={ this.handlePageSizeChange }
                        value={ this.props.pageSize|| this.pageSizes[0] }>
                    { this.pageSizes.map(s =>
                        <option value={s} key={s}>{s} na strone</option>
                    )}
                </select>
                <select className={"form-control"} onChange={this.handleSortPropertyChange}
                        value={this.props.sortKey || this.sortKeys[0]}>
                    {this.sortKeys.map( k =>
                    <option value={k.toLowerCase()} key={k}>sortuj wedlug {this.sortKey2Label(k)}
                    </option>)}
                </select>
            </div>
        </div>
    }
}
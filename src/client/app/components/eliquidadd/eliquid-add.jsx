import React from "react";

export default class EliquidAdd extends React.Component {
    render () {
        return (
            <form>
                <div className="form-container">
                    <h2>Add A New Eliquid</h2>
                    <div className="form-item-container">
                        <div className="label-container">
                            <label htmlFor="name">Name: </label>
                        </div>
                        <div className="input-container">
                            <input id="name" className="input-container__input" type="text" placeholder="enter name" autoFocus="true" />
                        </div>
                    </div>
                    <div className="form-item-container">
                        <div className="label-container">
                            <label htmlFor="company">Compay: </label>
                        </div>
                        <div className="input-container">
                            <input id="company" className="input-container__input" type="text" placeholder="enter company"/>
                        </div>
                    </div>
                    <div className="form-item-container">
                        <div className="label-container">
                            <label htmlFor="category">Category: </label>
                        </div>
                        <div className="input-container">
                            <input id="category" className="input-container__input" type="text" placeholder="enter category"/>
                        </div>
                    </div>
                    <div className="form-item-container">
                        <div className="label-container">
                            <label htmlFor="rating">Rating: </label>
                        </div>
                        <div className="input-container">
                            <input id="rating" className="input-container__input" type="text" placeholder="enter rating"/>
                        </div>
                    </div>
                    <div className="form-item-container">
                        <div className="label-container">
                            <label htmlFor="vgpg">VG/PG: </label>
                        </div>
                        <div className="input-container">
                            <input id="vgpg" className="input-container__input" type="text" placeholder="enter vg/pg"/>
                        </div>
                    </div>
                    <div className="form-item-container">
                        <div className="label-container">
                            <label htmlFor="nic">Nic: </label>
                        </div>
                        <div className="input-container">
                            <input id="nic" className="input-container__input" type="text" placeholder="enter nic"/>
                        </div>
                    </div>
                    <div className="form-item-container">
                        <div className="button-container">
                            <button>Save</button> <button>Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

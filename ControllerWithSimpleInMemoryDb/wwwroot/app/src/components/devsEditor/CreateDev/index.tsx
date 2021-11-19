﻿import * as React from "react";
import { CreateDevState } from "./state";
import { CreateDevProps } from "./props";

export class CreateDev extends React.Component<CreateDevProps, CreateDevState> {
    constructor(props: CreateDevProps) {
        super(props);

        this.handleSave = this.handleSave.bind(this);
        this.clearDevNameFieldOnSaveSuccessCallback = this.clearDevNameFieldOnSaveSuccessCallback.bind(this);
        this.handleDevNameChange = this.handleDevNameChange.bind(this);

        this.state = {
            devName: ""
        }
    }

    getNextId() {
        return this.props.nextIdIsKnown ? this.props.nextId.toString() : "";
    }

    handleSave() {
        this.props.save(this.state.devName, this.clearDevNameFieldOnSaveSuccessCallback);
    }

    clearDevNameFieldOnSaveSuccessCallback() {
        this.setState({ devName: "" });
    }

    handleDevNameChange(event) {
        this.setState({ devName: event.target.value });
    }

    render() {
        return <div>
            <div>
                <input id="reactNewDevId" type="number" readOnly={true} value={this.getNextId()} />
                {" "}
                <label htmlFor="reactNewDevId">Next Id</label>
            </div>
            <div>
                <input id="reactNewDevName" type="text" value={this.state.devName} onChange={this.handleDevNameChange} />
                {" "}
                <label htmlFor="reactNewDevName">Name</label>
            </div>
            <button onClick={this.handleSave}>Save Dev</button>
        </div>
    }
}
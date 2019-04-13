import React, {Component} from 'react';
import PropTypes from 'prop-types'; // Alt + enter -> add to package.json
import Task from "../model/Task";
import { Button, ListGroup } from 'react-bootstrap';

// or less ideally

export default class TodoItem extends Component {
    render() {
        return (
            <ListGroup.Item>{this.props.item.name}<Button onClick={this.handleRemove} variant="outline-dark" size="sm">Удалить</Button></ListGroup.Item>
        );
    }

    handleRemove = () => {
        this.props.onRemove(this.props.item.id); // <- () - вызов функции
    }
}

TodoItem.propTypes = {
  item: PropTypes.instanceOf(Task),
  onRemove: PropTypes.func
};

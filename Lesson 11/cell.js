class cell {
    constructor ( props )  {
        this.props = props;
        this.createElement = createElement;
        this.render = this.render;
    }


    createElement () {
        this.element = createElement ('div', {className: 'cell'}, this.props.number)
    }

    render () {
        if (this.props.canMove) {
            this.element.classList.add('cell--can-move');
        } else {
            this.element.classList.remove('cell--can-move');
        }

    }
}
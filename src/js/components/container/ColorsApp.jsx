import { React, Component } from 'react';
import AddColorForm from './AddColorFormContainer.jsx';
import ColorList from '../presentational/ReduxColorList.jsx';
import SortMenu from '../presentational/SortMenu.jsx';
import { sortFunction } from '../../../lib/array-helpers.jsx';

class App extends Component {
    getChildContext() {
        return {
            store: this.props.store
        };
    }

    componentWillMount() {
        this.unsubscribe = store.subscribe(
            () => this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { colors, sort } = store.getState();
        const sortedColors = [...colors].sort(sortFunction(sort));

        return (
            <div className="app">
                <SortMenu />
                <AddColorForm />
                <ColorList colors={sortedColors} />
            </div>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

App.childContextTypes = {
    store: PropTypes.object.isRequired
};

export default App;
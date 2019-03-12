import React from 'react';
import AddColorForm from './AddColorFormContainer.jsx';
import ColorList from '../presentational/ReduxColorList.jsx';
import SortMenu from '../presentational/SortMenu.jsx';

const App = ({ store }) =>
    <div className="app">
        <SortMenu store={store} />
        <AddColorForm store={store} />
        <ColorList store={store} />
    </div>

export default App;
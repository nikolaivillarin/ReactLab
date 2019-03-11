import React from 'react';
import ReactDom from 'react-dom';
import StoreFactory from '../presentational/AddColorForm.jsx';
import App from '../container/ColorsApp.jsx';

const store = StoreFactory();

const render = () =>
    ReactDom.render(
        <App store={store} />,
        document.getElementById('create-article-form')
    );

store.subscribe(render);
render();
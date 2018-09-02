//===========//
// Layout.js //
//===========//
import React from 'react'
import { Switch } from 'react-router-dom';
import Home from '../components/Home'
import Work from '../components/Work'
import About from '../components/About'
import Form from '../components/Form'
import Project from '../components/Project'
import Layout from '../components/Layout';

const routes = (
    <div>
        <Switch>
            <Layout exact path="/" component={Home}></Layout>
            <Layout path="/work" component={Work}></Layout>
            <Layout path="/contact" component={Form}></Layout>
            <Layout path="/about" component={About}></Layout>
            <Layout path="/project/:id" component={Project}></Layout>
        </Switch>
    </div>
);

export default routes;
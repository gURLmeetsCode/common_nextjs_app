import React from 'react';
import Head from 'next/head';

import Form from '../components/Form';



export default class Index extends React.Component {


  render() {
    return (
      <div className="container">
        <Head>
          <title>Common | Weather App</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/images/favicon1.ico" />
          <link rel="stylesheet" href="https://bootswatch.com/4/superhero/bootstrap.min.css" />
        </Head>
        <Form />
      </div>
    )
  }
}

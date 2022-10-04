import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const NordBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <div>공통 메뉴</div>
      <Component />
    </>
  );
};

NordBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NordBird;
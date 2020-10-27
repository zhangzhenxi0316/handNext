import { route } from "next/dist/next-server/server/router";
import { withRouter, useRouter } from "next/router";
import styled from 'styled-components'
import moment from 'moment'
import dynamic from 'next/dynamic'
const Title = styled.h1`
color:red
`
const A = ({ router }) => {
  console.log(765678, router.query);

  return (
    <>
    <Title>jklhlk</Title>
      <span>{router.query.id}</span>
      <style jsx>
        {`
          span {
            color: green;
          }
        `}
      </style>
    </>
  );
};

// A.getInitialProps = async ({ req, query }) => {
//   return {
//     id: query.id,
//   };
// };

export default withRouter(A);

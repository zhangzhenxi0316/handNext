import { route } from "next/dist/next-server/server/router";
import { withRouter, useRouter } from "next/router";
const A = ({ router }) => {
   
        console.log(765678,router.query)
    
  return <span>{router.query.id}</span>;
};

// A.getInitialProps = async ({ req, query }) => {
//   return {
//     id: query.id,
//   };
// };

export default withRouter(A);

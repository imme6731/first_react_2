import { Helmet } from "react-helmet";

export const PageTitle = ({ name }) => {
  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
    </>
  );
};

export default PageTitle;

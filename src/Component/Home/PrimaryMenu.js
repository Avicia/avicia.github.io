import React from "react";
import { Divider, FlexRow, PageTitle } from "../../Styles";
import Card from "../Home/Card";

const PrimaryMenu = ({ menu, setState }) => {
  return (
    <>
      <PageTitle
        data-aos="fade-in"
        data-aos-offset="60"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Avicia Fernandes is an Illustrator living in Mumbai, India <br />
        who believes imagination can change the world.
      </PageTitle>
      <Divider />
      <FlexRow
        style={{
          marginBottom: 20,
          display: "flex",
        }}
      >
        {menu &&
          menu.length > 0 &&
          menu.map((data) => {
            return <Card data={data} setState={setState} />;
          })}
      </FlexRow>
    </>
  );
};

export default PrimaryMenu;

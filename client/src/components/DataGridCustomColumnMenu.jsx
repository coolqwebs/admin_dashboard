import {
  GridColumnMenuContainer,
  GridColumnMenuFilterItem,
  GridColumnMenuColumnsItem,
} from "@mui/x-data-grid";

const CustomColumnMenu = ({ hideMenu, colDef, open }) => {
  return (
    <GridColumnMenuContainer hideMenu={hideMenu} colDef={colDef} open={open}>
      <GridColumnMenuFilterItem onClick={hideMenu} colDef={colDef} />
      {/* <GridFilterMenuItem onClick={hideMenu} column={currentColumn} /> */}
      <GridColumnMenuColumnsItem onClick={hideMenu} colDef={colDef} />
    </GridColumnMenuContainer>
  );
};
export default CustomColumnMenu;

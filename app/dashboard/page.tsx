import Table from "@/components/table";
import { TEST_ITEMS } from "@/utils/constants";
import DashBoardWrapper from "./components/dashboard-wrapper";

const DashBoard = () => {
  return (
    <DashBoardWrapper pageTitle="View all locations">
      <Table headerType="charger" rowData={TEST_ITEMS} />
    </DashBoardWrapper>
  );
};

export default DashBoard;

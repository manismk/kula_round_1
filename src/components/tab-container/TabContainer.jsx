import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { CurrentTabPannel } from "../tab-panel/CurrentTabPanel";
import { HistoryTabPannel } from "../tab-panel/HistoryTabPannel";

export const TabContainer = ({ country }) => {
  if (country === null) {
    return <div className="message">Select a country to show data</div>;
  }
  return (
    <div className="tab">
      <Tabs>
        <TabList>
          <Tab>Current </Tab>
          <Tab>Historical</Tab>
        </TabList>
        <TabPanel>
          <CurrentTabPannel country={country} />
        </TabPanel>
        <TabPanel>
          <HistoryTabPannel country={country} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

import TabItem from "./TabItem";

const Tabs = ({ tabs, tabFilterHandler,tabsStyle,tabStyle }) => {
  return (
    <ul className = {tabsStyle}>
      {tabs.map(name => <TabItem name={name} key={name} tabFilterHandler={tabFilterHandler} tabStyle={tabStyle}/>)}
    </ul>
  );

};

export default Tabs;
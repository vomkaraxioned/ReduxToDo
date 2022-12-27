const TabItem = ({ name, tabFilterHandler,tabStyle }) => {
  const setTab = (e) => {
    tabFilterHandler(e.target.dataset.status)
  };

  return (
    <li data-status={name} onClick={(e) => setTab(e)} className={tabStyle}>{name}</li>
  )
};

export default TabItem;
const TabItem = ({ name, tabFilterHandler }) => {
  const setTab = (e) => {
    tabFilterHandler(e.target.dataset.status)
  };

  return (
    <li data-status={name} onClick={(e) => setTab(e)}>{name}</li>
  )
};

export default TabItem;
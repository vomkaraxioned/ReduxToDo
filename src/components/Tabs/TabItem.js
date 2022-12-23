const TabItem = ({ name, tabFilterHandler }) => {
  const setTab = (e) => {
    tabFilterHandler(e.target.dataset.status)
  };

  return (
    <li data-status={name} onClick={(e) => setTab(e)} className="py-2 px-3 bg-slate-400 mr-5 rounded-xl hover:scale-125 cursor-pointer capitalize">{name}</li>
  )
};

export default TabItem;
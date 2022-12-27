const appConfig = {
  container:{
    bgColor:"#6a5aab"
  },
  title:{
    name:"todo app",
    styleName:"w-[40%] mx-auto text-center capitalize text-[31px] text-[#fff] drop-shadow-md font-[900] py-[40px] hover:scale-[1.2]"
  },
  form: {
    actions:{
      action:"#FIXME",
      name:"todo-form",
      styleName:"flex w-[50%] mx-auto justify-center py-10"
    },
    inputs:[
      {
        type:"text",
        name:"todo-text",
        styleName:"w-[100%] py-[7px]",
        wrapperStyle:"flex basis-[80%] ",
      },
      {
        type:"submit",
        name:"submit-btn",
        styleName:"border-[3px] w-[50px] h-[50px] indent-[-9999px] rounded-[50%] border-[#fff] ", 
        wrapperStyle:"flex basis-[20%] justify-center font-[FontAwesome] before:content-['fa-solid fa-house'] font-black",
      }
    ]

  },
  tabDetails:{
    tabs:[
      "active",
      "completed",
      "all",
    ],
    tabsStyle:"flex justify-center py-[15px]",
    tabStyle:"py-[10px] px-[2%] mr-[5%] capitalize bg-[#fff]"
  }
};

export default appConfig;
const appConfig = {
  container:{
    bgColor:"#6a5aab"
  },
  title:{
    name:"todo app",
    styleName:"w-[90%] mx-auto text-center capitalize text-[31px] text-[#fff] drop-shadow-md font-[900] py-[40px] hover:scale-[1.2]"
  },
  form: {
    actions:{
      action:"#FIXME",
      name:"todo-form",
      styleName:"flex w-[90%] mx-auto justify-center py-10 tablet:w-[60%] ipad:w-[60%]"
    },
    inputs:[
      {
        type:"text",
        name:"todo-text",
        styleName:"w-[100%]  px-[2%] outline-[#5468ff] rounded-[5px]",
        wrapperStyle:"flex basis-[80%] ",
      },
      {
        type:"submit",
        name:"submit-btn",
        styleName:"border-[3px] w-[50px] h-[50px] indent-[-9999px] rounded-[50%] border-[#fff] drop-shadow-md cursor-pointer bg-[#271c6c]", 
        wrapperStyle:"flex basis-[20%] relative justify-center font-[FontAwesome] hover:scale-[1.2]",
        icon:"fa-solid fa-plus flex w-[100%] h-[100%] absolute justify-center items-center pointer-events-none text-[#fff] text-xl"
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
    tabStyle:"py-[10px] px-[5%] mr-[5%] capitalize bg-[#fff] last:mr-[0] rounded-[50px] hover:scale-[1.1]"
  },
  todoStyle:{
    todolist:"w-[85%] mx-auto flex flex-wrap gap-[1.3%] ipad:w-[95%]",
    todo:"bg-[#fff]  my-[10px] py-[10px] px-[1%] flex flex-col  basis-[100%] h-[150px] rounded-[10px] largePhone:basis-[48.9%] tablet:basis-[48.8%] ipad:basis-[24%]",
    textarea:"outline-[#5468ff] text-[#271c6c]",
    controls:"w-[80%] mx-auto flex justify-end gap-[5%]",
    control:"indent-[-9999px] py-[5px] text-md",
    icons:{
      del:" fa-solid fa-xmark indent-[0] float-right text-[#f00]",
      edit:"fa-solid fa-pencil indent-[0] float-right text-[#271c6c]",
      tick:"fa-solid fa-check-double indent-[0] float-right text-[#008000]"
    }
  }
};

export default appConfig;
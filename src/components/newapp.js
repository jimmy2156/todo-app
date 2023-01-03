const allCategories = ["all", ...new Set(data.map((item) => item.category))]
function App() {
  const [items, setitems] = useState(data)
  const [category, setcategory] = useState(allCategories)
 
  const allCategory = (str) => {
    if (str === "all") {
      setitems(data)
      return 
    }
    const newCategory = data.filter((menuItem) => menuItem.category === str)
    setitems(newCategory)
  }
 

  return (
    <div className="App bg-blue-300 min-h-screen w-full flex flex-col justify-center items-center">
       
       <h1>Menu</h1>
       <CategoryButton allCategory={allCategory} category={category}/>
       <Menu item={items}/>

      
      </div>);
  }

export default App;
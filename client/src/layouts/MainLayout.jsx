import Header from "../components/Header";
const MainLayout=({children})=>{
    return(
    <div className="min-h-screen flex flex-col">
      <Header /> 
      <main className="flex-grow">{children}</main> 
    </div>
    )
}

export default MainLayout;
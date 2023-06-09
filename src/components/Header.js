const Title = ()=>(
    <a href="/">
   <img className="logo" alt ="logo"src ="https://tse4.mm.bing.net/th?id=OIP.iSdgSjf-37Z78VnZdm9SFAHaFT&pid=Api&P=0"/>
   </a>

)
const Header =()=>{
    return (
    <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>

        </div>
        </div>
    )
}
export default Header
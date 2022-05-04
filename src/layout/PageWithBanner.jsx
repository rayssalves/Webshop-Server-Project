import { Footer, NavBar } from "../components"
import Header from "../components/Header"

export const PageLayoutWithBanner = ({children}) => {
    return (
        <>
        <NavBar />
        <Header/>
        <div className="main-section">
            {children}
        </div>
        <Footer/>
        </>
    )
}
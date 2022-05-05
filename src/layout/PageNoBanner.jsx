import { Footer, NavBar } from "../components"

export const PageNoBanner = ({children}) => {
    return (
        <>
        <NavBar />
        <div className="main-section">
            {children}
        </div>
        <Footer/>
        </>
    )
}
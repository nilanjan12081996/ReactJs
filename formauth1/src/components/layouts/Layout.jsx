import Header from './Header'

const Layout=({children})=>{
    return(
        <>
        <Header/>
        <main style={{ minHeight: "70vh" }}>
            {children}
        </main>
        </>
    )
}
export default Layout
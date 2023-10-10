import Layout from "../components/layouts/Layout"
import { useAuth } from "../context/Auth"

const Home=()=>{
    const[auth]=useAuth()
    return(
        <>
        <Layout>
        <h1>home page</h1>
      <pre>{JSON.stringify(auth,null)}</pre>
        </Layout>
       
        </>
    )
}
export default Home
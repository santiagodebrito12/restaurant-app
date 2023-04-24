import { Box } from '@mui/material';
import {Layout} from './components/layout/Layout';



export default function Home() {
  return (
    <Layout>
     <Box sx={{
      flex:4,
      height:'100vh'
     }}>
     <h1>Home</h1>
    
     </Box>
   
    </Layout>
  )
}

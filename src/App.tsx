
import { Box } from '@mui/material'
import './App.css'
import { Search } from './components/search/search'


function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    
  }
  

  return (
    <>
       <Box display="flex">
        <Box>
          <Search onSearchChange={handleOnSearchChange} />
        </Box>
        <Box>
          
        </Box>
       </Box>
    </>
  )
}

export default App

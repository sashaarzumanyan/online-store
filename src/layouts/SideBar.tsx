import { Divider, Drawer, List, ListItem,  ListItemText, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useAppSelector } from '../hooks/redux';
import { useGetTypesQuery } from '../services/typeAPI';



const SideBar = () => {
  const { data=[], isLoading } = useGetTypesQuery(1)
  const {configs} = useAppSelector(state => state)
  console.log(configs)
  

  console.log(data)
  
  const drawer: JSX.Element = (
    <div>
      <Toolbar sx={{ bgcolor: 'primary.main', boxShadow: 4 }} >
        <Typography>MUI</Typography>
      </Toolbar>
      <Divider />
      <List sx={{ bgcolor: 'primary.mian' }}>
        {data.map((types) => (
          <ListItem button key={types.id}>
            <ListItemText primary={types.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const drawerWidth = 200
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, bgcolor: 'primary.main' , position: "fixed"}}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

        }}
        open={true}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default SideBar
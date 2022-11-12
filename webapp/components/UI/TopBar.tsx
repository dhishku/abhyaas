import { Typography, AppBar, Toolbar, Box, Grid } from '@mui/material';
import Image from 'next/image';
import ListAltIcon from '@mui/icons-material/ListAlt';

import appTheme from '../../styles/Theme';

const TopBar: React.FC<{showRules: boolean, showWhatsappIcon: boolean}> = (props) => {
  return (
    <Box sx={{height: 48}}>
      <AppBar position="static" >
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
				<Box sx={{display: 'flex', flexGrow: 2}}>
					<Image src="/logo.png" height={40} width={40} layout='fixed' />
					<Typography variant="h4" color={appTheme.palette.text.primary}>
						Abhyaas
					</Typography>
				</Box>
				<Box sx={{display: 'flex', justifyContent: 'end', alignItems: 'end', flexGrow: 1}}>
					{props.showRules && <ListAltIcon fontSize='large' htmlColor={appTheme.palette.primary.dark} sx={{paddingRight: 2}}/>}
					{props.showWhatsappIcon && <Image src="/whatsapp.png" height={40} width={40}/>}
				</Box>
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default TopBar;
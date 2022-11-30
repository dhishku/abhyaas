import { Chip } from '@mui/material';

import appTheme from '../../styles/Theme';

const SmallCard: React.FC<{label: string, clickHandler: (value: string) => void}> = (props) => {
  const clickHandler = () => {
    props.clickHandler(props.label);
  };

  return <Chip variant='outlined' label={<strong>{props.label}</strong>} onClick={clickHandler} 
  sx={{
    height: 96, 
    minWidth: 156, 
    color: appTheme.palette.text.secondary,
    borderRadius: '16px',
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
    border: `1px solid ${appTheme.palette.primary.main}`,
    margin: '8px'
  }} />;
};

export default SmallCard;
import { Chip } from '@mui/material';

import appTheme from '../../styles/Theme';

const SmallCard: React.FC<{label: string, clickHandler: (value: string) => void}> = (props) => {
  const clickHandler = () => {
    props.clickHandler(props.label);
  };

  return <Chip variant='outlined' label={props.label} onClick={clickHandler} sx={{height: 96, minWidth: 156}} />;
};

export default SmallCard;
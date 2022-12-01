import { Button, Typography } from "@mui/material";
import appTheme from "../../styles/Theme";

const PrimaryButton: React.FC<{label: string}> = (props) => {
  return (
    <Button color='primary' variant='contained' sx={{
      borderRadius: '16px',
      boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
      ':hover': {
        backgroundColor: appTheme.palette.background.default
      },
      margin: '8px'
    }}>
      <Typography color={appTheme.palette.text.primary} variant='button' sx={{
        padding: '10px'
      }}>
        <strong>
          {props.label}
        </strong>
      </Typography>
    </Button>
  );
};

export default PrimaryButton;
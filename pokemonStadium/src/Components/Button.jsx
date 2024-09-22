import { Button } from "@mui/material";
import { green } from "@mui/material/colors";
const ButtonComponent = ({ onClick, text }) => {
    return (
        <Button sx={{ 
            backgroundColor: green[700], 
            color: 'white',
            fontWeight: 'bold',
            padding: 2,
            '&:hover': {
              backgroundColor: green[800], // Color al pasar el cursor
            }
          }}  onClick={onClick}>{text}</Button>
    )
}
export default ButtonComponent
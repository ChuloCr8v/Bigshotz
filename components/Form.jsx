
import TextField from "@mui/material/TextField" 
import Button from "@mui/material/Button" 
import SendIcon from '@mui/icons-material/Send'

const Form = () => {
  return(
    <form className="shadow-xl bg-gray-100 md:w-96 m-4 px-4 py-8 rounded ">
      <TextField id="outlined-basic" size="small" label="Full Name" variant="outlined" margin="normal" fullWidth />
      <TextField id="outlined-basic" type="email" size="small" label="Email" variant="outlined" margin="normal" fullWidth />
      <TextField id="outlined-basic" type="text" size="small" variant="outlined" multiline rows={4} label="Your Message 📸" margin="normal" fullWidth />
      <Button variant="contained" endIcon={<SendIcon />} fullWidth> Send </Button>
    </form>
    )
}

export default Form




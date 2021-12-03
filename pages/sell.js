import {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core'

const theme = createTheme({
    palette: {
      primary: {
        main: '#000000'
      },
      secondary: {
          main: '#243443'
      }
    },
  })

const useStyles = makeStyles((theme)=>{
    return {
    root: {
        backgroundColor:'white',
        borderRadius:5,
        marginTop:theme.spacing(4),
        paddingTop:theme.spacing(5),
        paddingBottom:theme.spacing(5),
        maxWidth:'90%',
        width:'60rem',
    },
    field:{
        marginTop: 16,
        marginBottom: 16,
        display: 'block',
    },
    field_col:{
      // color: "white",
    },
    input: {
      // color: "white",
    },
    form:{
        margin:'auto'
    },
    notchedOutline: {
        // border:'1.8px solid white !important'
      },
    }
})

const Sell1 = () => {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Item 1')

const submitHandler = (event)=>{
    event.preventDefault();
    
    const data = {
      title,
      description,
      price,
      category
    }
    console.log("sending data")
    console.log(data)
  }

    return (
        <ThemeProvider theme={theme}>
          <div className="min-h-screen  mx-auto py-2 bg-midNight">
        <Container  size='lg' className={classes.root}> 
        {/* <div className={classes.box}> */}
            <Typography
            align="center"
            variant="h3" 
            color="secondary"
            gutterBottom
            >
                Add Product
            </Typography>

        <form noValidate autoComplete="off" onSubmit={submitHandler} className={classes.form}>
            <TextField className={classes.field}
            onChange={(e) => setTitle(e.target.value)}
            label="Title" 
            variant="outlined" 
            fullWidth
            required
          //   InputLabelProps={{className:classes.input}}
          //   InputProps={{
          //   classes: {
          //       root: classes.field_col,
          //       notchedOutline: classes.notchedOutline,
          //   }
          // }}
        />
         <TextField className={classes.field}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          variant="outlined"
          // color="secondary"
          multiline
          rows={4}
          fullWidth
          required
        />

        <TextField className={classes.field}
          onChange={(e) => setPrice(e.target.value)}
          label="Price"
          variant="outlined"
          type='number'
          fullWidth
          required
        //   error={detailsError}
        />

        <FormControl  variant="outlined" className={classes.field}>
            <InputLabel  id="select">Category</InputLabel>
            <Select
            labelId="select"
            id="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            label="Category"
            >
                <MenuItem value="item1">Item 1</MenuItem>
                <MenuItem value="item2">Item 2</MenuItem>
                <MenuItem value="item3">Item 3</MenuItem>
            </Select>
        </FormControl>
        <Typography align='center'>
        <Button
          type="submit" 
          color="secondary"
          align='center'
          variant="contained"
          gutterBottom
          >
          Submit
        </Button>
        </Typography>
      </form>
        </Container>
        </div>
        </ThemeProvider>
        
    )
}

export default Sell1

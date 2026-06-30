/*
Material UI is an open-source React component library that implements 
Google's Material Design.
 It's comprehensive and can be used in production out of the box.


npm install @mui/material @emotion/react @emotion/styled

@mui/icons-material
@mui/x-data-grid

https://mui.com/material-ui/

*/

import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Rating from '@mui/material/Rating';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

function MUI() {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className='container mt-5'>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <hr />
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="outlined" color="error">
                Error
            </Button>
            <hr />
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>

            <hr />

            <Rating name="half-rating" defaultValue={4} precision={0.5} />

            <hr />

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <hr />

            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Here is a gentle confirmation that your action was successful.
            </Alert>


            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="https://mui.com/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                        <Typography sx={{ marginBottom: 2 }}>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                        <Typography sx={{ marginBottom: 2 }}>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                            stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography sx={{ marginBottom: 2 }}>
                            Add rice and stir very gently to distribute. Top with artichokes and
                            peppers, and cook without stirring, until most of the liquid is absorbed,
                            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                            mussels, tucking them down into the rice, and cook again without
                            stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don&apos;t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default MUI
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Star from '@material-ui/icons/Star';
import * as minecraftImage from '../images/minecraft.png'
import * as robloxImage from '../images/Roblox.png'
import * as fortniteImage from '../images/Fortnite.png'
import * as starBackground from '../images/stars.jpg'
import StarfieldAnimation from 'react-starfield-animation'

const productRed = '#b00d23';

function Copyright() {
    return (
        <Typography style={{ color: 'white' }} variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link style={{ color: 'white' }} color="inherit" href="https://material-ui.com/">
                Covsta
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: productRed
    },
    textColor: {
        color: 'white'
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundImage: `url(${starBackground})`,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        height: 300,
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        // backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
    },
}));

const cards = [{
    title: "Minecraft",
    content: "You don't need to be square to play this awesome game.",
    image: minecraftImage,
    link: 'https://www.minecraft.net/en-us/'
}, {
    title: "Roblox",
    content: "So many mini games, not enough time to play them all.",
    image: robloxImage,
    link: 'https://www.roblox.com/'
}, {
    title: "Fortnite",
    content: "What can I say, a free game is an awesome game.",
    image: fortniteImage,
    link: 'https://www.epicgames.com/fortnite/en-US/home'
}];


export default function Landing() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar className={classes.appBar} >
                <Toolbar>
                    <Star />
                    {/* <Stars className={classes.icon} /> */}
                    <Typography variant="h4" color="inherit" noWrap>
                        Covsta
                    </Typography>
                    <Star />
                </Toolbar>
            </AppBar>
            <Toolbar />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <StarfieldAnimation
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <Container maxWidth="m"  >
                        <Typography className={classes.textColor} component="h1" variant="h2" align="center" gutterBottom>
                            Stuff I think is really cool. . .
                        </Typography>
                        <Container maxWidth="sm"  >
                            <Typography className={classes.textColor} variant="h5" align="center" color="textSecondary" paragraph>
                                What you'll find here is a site of awesome stuff that I enjoy and hope you'll enjoy too. <p />Thanks for taking the time to check it out and check back for more cool stuff to come. . .
                        </Typography>
                        </Container>
                    </Container>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Typography className={classes.textColor} variant="h5" align="flex-start" gutterBottom>
                            Gaming:
                        </Typography>
                        <Grid container spacing={4}>
                            {/* End hero unit */}
                            {cards.map(card => (
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardActionArea onClick={() => window.open(card.link, "_blank")} >
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={card.image}
                                                title={card.title}
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {card.title}
                                                </Typography>
                                                <Typography>
                                                    {card.content}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>

                                        <CardActions>
                                            {/* <Button size="small" color="primary">
                                            View
                                        </Button> */}
                                            <Button size="small" color="primary" onClick={() => window.open(card.link, "_blank")}>
                                                {card.title} Website
                                        </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>

                    <Container className={classes.cardGrid} maxWidth="md">
                        <Typography style={{ marginTop: 20, marginBottom: 20 }} className={classes.textColor} component="h4" variant="h4" align="center" gutterBottom>
                            Keep an eye out here for more cool stuff to come. . . . . .
                        </Typography>
                    </Container>
                    {/* Footer */}
                    <footer className={classes.footer}>
                        {/* <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography> */}
                        {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    More awesome stuff to come. . .
                </Typography> */}
                        <Copyright />
                    </footer>
                    {/* End footer */}
                </div>
            </main>
        </>
    );
}

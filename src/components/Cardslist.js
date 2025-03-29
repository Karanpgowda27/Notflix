import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import banner1 from './images/movie1.avif'
import banner2 from './images/movie2.jpg'
import banner3 from './images/movie3.avif'
import banner4 from './images/movie4.jpg'
import banner5 from './images/movie5.jpg'
import banner6 from './images/movie6.jpg'
import banner7 from './images/movie7.jpg'
import banner8 from './images/movie8.jpg'
import banner9 from './images/movie9.jpg'
import banner10 from './images/movie10.jpg'
import banner11 from './images/movie11.jpg'
import banner12 from './images/movie12.jpg'
import banner13 from './images/tvs1.jpg'
import banner14 from './images/tvs2.jpg'
import banner15 from './images/tvs3.jpg'
import banner16 from './images/tvs4.webp'
import banner17 from './images/tvs5.jpg'
import banner18 from './images/tvs6.jpg'
import banner19 from './images/tvs7.webp'
import banner20 from './images/tvs8.jpg'
import banner21 from './images/tvs9.jpg'
import banner22 from './images/tvs10.jpg'
import banner23 from './images/tvs11.jpg'
import banner24 from './images/tvs12.jpg'
import {Link} from "@mui/material";

const cardData = [
    {
        title: "Crazy Rich Asians",
        description: "2018, 02 hours, Romantic/Comedy",
        image: banner1,
        path: 'https://youtu.be/ZQ-YX-5bAs0?si=sQLh7FvCGmLYNoY0',
    },
    {
        title: "Oppenheimer",
        description: "2023, 03 hours, Thriller/Historic Drama",
        image: banner2,
        path: 'https://youtu.be/uYPbbksJxIg?si=Z8VNJdOfKIOuIoBL'
    },
    {
        title: "The Irishman",
        description: "2019, 03 hr 29 min, Crime/Documentary",
        image: banner3,
        path:'https://youtu.be/WHXxVmeGQUc?si=yttZuJQFBOafBxDr'
    },{
        title: "Good Will Hunting",
        description: "1997, 02 hr 06 min, Romantic/Drama",
        image: banner4,
        path:'https://youtu.be/ReIJ1lbL-Q8?si=9zw4_MoW5y7sLE2H'
    },
    {
        title: "The Notebook",
        description: "2004, 02 hr 3 min, Romantic/Comedy",
        image: banner5,
        path:'https://youtu.be/BjJcYdEOI0k?si=iC1rAwxwIqhUIdZh'
    },
    {
        title: "The Terminal",
        description: "2004, 02 hr 08 min, Romantic/Drama",
        image: banner6,
        path:'https://youtu.be/iZqQRmhRvyg?si=oO0D4CMUsTEMQE6j'
    },
    {
        title: "The Intern",
        description: "2015, 02 hr 01 min, Comedy/Drama",
        image: banner7,
        path:'https://youtu.be/ZU3Xban0Y6A?si=BSCZxRH_hCvgu8Nv'
    },
    {
        title: "Forrest Gump",
        description: "1994, 02 hr 22 min, Romantic/Comedy",
        image: banner8,
        path:'https://youtu.be/bLvqoHBptjg?si=mfs7Cklbvas4hKV8'
    },
    {
        title: "Catch Me If You Can",
        description: "2002, 02 hr 20 min, Crime/Comedy",
        image: banner9,
        path:'https://youtu.be/71rDQ7z4eFg?si=JDNizos2h5q-sRvE'
    },{
        title: "All Quiet On The Western Front",
        description: "2022, 02 hr 27 min, War/Action",
        image: banner10,
        path:'https://youtu.be/hf8EYbVxtCY?si=L8goYEcOZFy03lIN'
    },
    {
        title: "A Man Called Otto",
        description: "2022, 02 hr 06 min, Comedy/Drama",
        image: banner11,
        path:'https://youtu.be/eFYUX9l-m5I?si=12iQSNSIQLIwyzWS'
    },
    {
        title: "Liar Liar",
        description: "1997, 01 hr 26 min, Comedy/Drama",
        image: banner12,
        path:'https://youtu.be/C1no75lpOiw?si=XHmfGlSbwtxFcfux'
    }
];

const cardTVData = [
    {
        title: "Breaking Bad",
        description: "2008, Drama, 5 Seasons",
        image: banner13,
        path:'https://youtu.be/HhesaQXLuRY?si=T5PejqoO1-VD4V9M'
    },
    {
        title: "The Office",
        description: "2005, Sitcom, 9 Seasons",
        image: banner14,
        path:'https://youtu.be/tNcDHWpselE?si=Vm9NpqkvWPpDGj9b'
    },
    {
        title: "Better Call Saul",
        description: "2015, Drama, 6 Seasons",
        image: banner15,
        path:'https://youtu.be/HN4oydykJFc?si=zfwZH5pTwPlw0GDf'
    },{
        title: "F.R.I.E.D.S",
        description: "1994, Sitcom, 10 Seasons",
        image: banner16,
        path:'https://youtu.be/Zg2LCD5QOJs?si=FqlB0lEw-HIk-iLm'
    },
    {
        title: "Schitt's Creek",
        description: "2015, Sitcom, 6 Seasons",
        image: banner17,
        path:'https://youtu.be/W0uWS6CnC2o?si=Seaslz1jNYx8vnr2'
    },
    {
        title: "Brooklyn 99",
        description: "2013, Sitcom, 8 Seasons",
        image: banner18,
        path:'https://youtu.be/faJAT35j5Ss?si=KsFJX4Y762-kcyHs'
    },
    {
        title: "Dexter",
        description: "2006, Drama, 8 Seasons",
        image: banner19,
        path:'https://youtu.be/YQeUmSD1c3g?si=xxIDzhvMa605Vmub'
    },
    {
        title: "Pretty Little Liars",
        description: "2010, Drama, 7 Seasons",
        image: banner20,
        path:'https://youtu.be/nwHvFNQG5UE?si=eBfOGhXB3hgiMt6v'
    },
    {
        title: "Narcos",
        description: "2015, Drama, 3 Seasons",
        image: banner21,
        path:'https://youtu.be/xl8zdCY-abw?si=Quf3rg0hrycQwLKa'
    },{
        title: "The Walking Dead",
        description: "2010, Horror, 11 Seasons",
        image: banner22,
        path:'https://youtu.be/sfAc2U20uyg?si=3FOfMMc-1vRDkn3L'
    },
    {
        title: "Kim's Convinience",
        description: "2015, Sitcom, 5 Seasons",
        image: banner23,
        path:'https://youtu.be/7_BT3jdkUPg?si=b_M5UZxnQ9Jzb0Yv'
    },
    {
        title: "Space Force",
        description: "2020, Sitcom, 2 Season",
        image: banner24,
        path:'https://youtu.be/bdpYpulGCKc?si=zs7_OgXZfdaEt6t-'
    }
];

const CardsList = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <Grid>
            <Grid sx={{
                display: 'flex',
                justifyContent: 'left',
                marginLeft: '50px',
                marginTop: '75px',
                height: '80px'
            }}>
                <Typography variant="h1" sx={{color: 'white'}}>Trending Movies</Typography>
            </Grid>
            <Grid sx={{
                display: 'flex',
                justifyContent: 'left',
                marginLeft: '100px',
                marginTop: '60px',
                height: '5px'
            }}>
                <Typography variant="h5" sx={{color: 'white'}}>Watch your favourite movies' trailers here!</Typography>
            </Grid>
            <Grid container spacing={1} sx={{ p: '111.5px' }}>               
                {cardData.map((card, index) => (
                <Grid item xs={12} sm={6} md={2} key={index} sx={{ ml: 0 }}>
                        <Card
                            sx={{
                                width: 200,
                                transition: "background-color 0.3s",
                                backgroundColor: hoveredIndex === index ? 'grey' : "black",
                                color: hoveredIndex === index ? 'black' : "red",
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <CardMedia
                                component="img"
                                height="300"
                                image={card.image}
                                alt={card.title}
                            />
                            <CardContent sx={{ mt: 2 }}>
                                <Typography variant="h6">
                                    
                                    <Link href={card.path} underline="none" sx={{color: hoveredIndex === index ?'black' : "red"}}>
                                        {card.title}
                                    </Link>

                                </Typography>
                                <Typography variant="body2" color="white">
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Grid sx={{
                display: 'flex',
                justifyContent: 'left',
                marginLeft: '50px',
                marginBottom: '15px',
                height: '80px'
            }}>
                <Typography variant="h1" sx={{color: 'white'}}>Top T.V. Shows</Typography>
            </Grid>
            <Grid sx={{
                display: 'flex',
                justifyContent: 'left',
                marginLeft: '100px',
                marginTop: '60px',
                height: '5px'
            }}>
                <Typography variant="h5" sx={{color: 'white'}}>Watch your favourite T.V. shows' trailers here!</Typography>
            </Grid>
            <Grid container spacing={1} sx={{ p: '111.5px' }}>               
            {cardTVData.map((card, index) => (
                <Grid item xs={12} sm={6} md={2} key={index} sx={{ ml: 0 }}>
                    <Card
                        sx={{
                            width: 200,
                            transition: "background-color 0.3s",
                            backgroundColor: hoveredIndex === index ? 'grey' : "black",
                            color: hoveredIndex === index ? 'black' : "red",
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <CardMedia
                            component="img"
                            height="300"
                            image={card.image}
                            alt={card.title}
                        />
                        <CardContent sx={{ mt: 2 }}>
                            <Typography variant="h6">
                               
                                <Link href={card.path} underline="none" sx={{color: hoveredIndex === index ?'black' : "red"}}>
                                    {card.title}
                                </Link>
                                
                            </Typography>
                            <Typography variant="body2" color="white">
                                {card.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Grid>
    );
};

export default CardsList;
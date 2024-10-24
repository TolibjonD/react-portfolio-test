import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

interface CardProps {
    imgSrc: string;
    title: string;
    body: string;
    buttonText: string;
}


export default function BlogCard({ blog }: { blog: CardProps }) {
    return (
        <Card sx={{ width: { xs: "auto", md: '400px' }, height: { xs: "auto", md: '500px' }, backgroundColor: '#f3a78118' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    sx={{ height: { xs: 'auto', md: '220px' } }}
                    image={blog.imgSrc}
                    alt={blog.title.slice(0, 1).toUpperCase()}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {blog.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                        {blog.body.slice(0, 360)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    {blog.buttonText}
                </Button>
            </CardActions>
        </Card>
    );
}

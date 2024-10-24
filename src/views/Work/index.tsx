import BlogCard from '@/components/card'
import Heading from '@/components/Heading'
import { blogEntries } from '@/constants/data/blogs'
import { Box } from '@mui/material'

const BlogsView = () => {
    return (
        <Box sx={{ p: { md: '100px' }, mt: "80px" }}>
            <Heading label='Blogs' />
            <section id="#blog-se"></section>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, mt: '50px', gap: '10px', flexWrap: { xs: 'wrap', md: 'nowrap' }, alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
                {blogEntries.map((blog, idx) => (
                    <BlogCard blog={blog} key={blog.title + idx} />
                ))}
            </Box>
        </Box >
    )
}

export default BlogsView
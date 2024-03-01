/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


export default function OrderList() {
  return (
    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
      <Box
        className="Pagination-mobile"
        sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', py: 2 }}
      >
        <IconButton
          aria-label="previous page"
          variant="outlined"
          color="neutral"
          size="sm"
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Typography level="body-sm" mx="auto">
          Page 1 of 10
        </Typography>
        <IconButton
          aria-label="next page"
          variant="outlined"
          color="neutral"
          size="sm"
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

import { Grid, Skeleton, Stack } from "@mui/material";

const LoadingCards = () => {
   return (
      <>
         <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            padding={4}
         >
            <Grid
               item
               xs={12}
               sm={6}
               md={4}
               sx={{ marginBottom: { xs: 2, sm: 2, md: 0 } }}
            >
               <Skeleton variant="circular" width={80} height={80} />
               <Skeleton variant="rectangular" height={150} />
               <Skeleton variant="rounded" height={150} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
               <Skeleton variant="circular" width={80} height={80} />
               <Skeleton variant="rectangular" height={150} />
               <Skeleton variant="rounded" height={150} />
            </Grid>
            <Grid
               item
               xs={12}
               sm={6}
               md={4}
               sx={{ marginTop: { xs: 2, sm: 2, md: 0 } }}
            >
               <Skeleton variant="circular" height={80} width={80} />
               <Skeleton variant="rectangular" height={150} />
               <Skeleton variant="rounded" height={150} />
            </Grid>
         </Grid>
         <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            padding={4}
         >
            <Grid
               item
               xs={12}
               sm={6}
               md={4}
               sx={{ marginBottom: { xs: 2, sm: 2, md: 0 } }}
            >
               <Skeleton variant="circular" width={80} height={80} />
               <Skeleton variant="rectangular" height={150} />
               <Skeleton variant="rounded" height={150} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
               <Skeleton variant="circular" width={80} height={80} />
               <Skeleton variant="rectangular" height={150} />
               <Skeleton variant="rounded" height={150} />
            </Grid>
            <Grid
               item
               xs={12}
               sm={6}
               md={4}
               sx={{ marginTop: { xs: 2, sm: 2, md: 0 } }}
            >
               <Skeleton variant="circular" height={80} width={80} />
               <Skeleton variant="rectangular" height={150} />
               <Skeleton variant="rounded" height={150} />
            </Grid>
         </Grid>
         <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            padding={4}
         >
            <Grid
               item
               xs={12}
               sm={6}
               md={4}
               sx={{ marginBottom: { xs: 2, sm: 2, md: 0 } }}
            >
               <Skeleton variant="circular" width={80} height={80} />
               <Skeleton variant="rectangular" height={150} />
               <Skeleton variant="rounded" height={150} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
               <Skeleton variant="circular" width={80} height={80} />
               <Skeleton variant="rectangular" height={150} />
               <Skeleton variant="rounded" height={150} />
            </Grid>
            <Grid
               item
               xs={12}
               sm={6}
               md={4}
               sx={{ marginTop: { xs: 2, sm: 2, md: 0 } }}
            >
               <Skeleton variant="circular" height={80} width={80} />
               <Skeleton variant="rectangular" height={150} />
               <Skeleton variant="rounded" height={150} />
            </Grid>
         </Grid>
      </>
   );
};

export default LoadingCards;

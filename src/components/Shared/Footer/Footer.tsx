import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography component={Link} href="/consultation" color="#fff">
            Consultation
          </Typography>
          <Typography component={Link} href="/health-plans" color="#fff">
            Health Plans
          </Typography>
          <Typography component={Link} href="/medicine" color="#fff">
            Medicine
          </Typography>
          <Typography component={Link} href="/diagnostics" color="#fff">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/ngos" color="#fff">
            NGOs
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

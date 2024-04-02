import faceBookIcon from "@/assets/landing_page/facebook.png";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
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

        <Stack direction="row" justifyContent="center" gap={2} py={3}>
          <Image src={faceBookIcon} height={30} width={30} alt="" />
          <Image src={faceBookIcon} height={30} width={30} alt="" />
          <Image src={faceBookIcon} height={30} width={30} alt="" />
          <Image src={faceBookIcon} height={30} width={30} alt="" />
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box
          sx={{
            border: "1px dashed  lightgray",
          }}
        ></Box>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy; 2024 PH HealthCare All Rights Reserved.
          </Typography>

          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! {""}
            Terms $ Conditions.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

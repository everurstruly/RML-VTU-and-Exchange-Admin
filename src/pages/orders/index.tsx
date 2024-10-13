import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import GiftCardOrdersTable from "../../app/giftcard-orders-table";
import CryptoOrdersTable from "../../app/crypto-orders-table";
import {
  CurrencyExchangeOutlined,
  Payment,
  PaymentOutlined,
  SellOutlined,
} from "@mui/icons-material";
import { Fade } from "@mui/material";
import PageTitle from "../../app/page-title";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Fade in={value === index}>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {children}
      </div>
    </Fade>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="pt-4 pb-20">
      <PageTitle text="Yours Orders" />

      <Box className="!py-4">
        <div className="border-b rounded-md mx-4 mb-2">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label="GiftCard"
              icon={<PaymentOutlined className="!size-5" />}
              sx={{ fontSize: ".813rem", rowGap: .3875 }}
              {...a11yProps(0)}
            />
            <Tab
              label="Crypto"
              icon={<CurrencyExchangeOutlined className="!size-5" />}
              sx={{ fontSize: ".813rem", rowGap: .3875 }}
              {...a11yProps(0)}
            />
          </Tabs>
        </div>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <GiftCardOrdersTable />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CryptoOrdersTable />
        </TabPanel>
      </Box>
    </div>
  );
}

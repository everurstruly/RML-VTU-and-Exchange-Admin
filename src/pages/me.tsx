import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import PageTitle from "../app/page-title";
import AccountMenuList from "../app/account-menu-list";
import CurrencyBitcoin from "@mui/icons-material/CurrencyBitcoin";
import {
  AccountBalanceOutlined,
  AlternateEmail,
  AlternateEmailOutlined,
  BugReportOutlined,
  HelpOutline,
  HelpOutlineOutlined,
  LockOutlined,
  PasswordOutlined,
  PersonRemoveAlt1Outlined,
  PhoneOutlined,
  ShieldOutlined,
} from "@mui/icons-material";

export default function AccountPage() {
  return (
    <div className="pt-4 pb-40">
      <PageTitle text="Your Account" />
      <Stack spacing={3} className="px-4 py-4">
        <Box className="p-4 border rounded-xl">
          <div className="flex items-center gap-x-4">
            <Avatar />
            <div className="flex flex-col gap-y-.5">
              <Typography
                variant="body1"
                fontWeight={500}
                className="text-zinc-700"
              >
                John Doe
              </Typography>
              <Typography variant="body2" className="text-zinc-500">
                Edit your profile
              </Typography>
            </div>
          </div>
        </Box>

        <AccountMenuList
          heading="Payment & Wallets"
          list={[
            { Icon: CurrencyBitcoin, text: "Crypto Wallets" },
            { Icon: AccountBalanceOutlined, text: "Bank Accounts Details" },
          ]}
        />

        <AccountMenuList
          heading="Security Settings"
          list={[
            { Icon: LockOutlined, text: "Security Pin" },
            { Icon: PhoneOutlined, text: "Change Phone" },
            { Icon: PasswordOutlined, text: "Change Password" },
            { Icon: AlternateEmailOutlined, text: "Change and Verify Email" },
          ]}
        />

        <AccountMenuList
          heading="Help & Support"
          list={[
            { Icon: PersonRemoveAlt1Outlined, text: "Delete Account" },
            { Icon: ShieldOutlined, text: "Terms and Conditions" },
            { Icon: BugReportOutlined, text: "Contact Developers" },
          ]}
        />
      </Stack>

      <Box className="flex justify-center mt-8 px-4">
        <Button
          variant="contained"
          fullWidth
          size="large"
          disableElevation
          color="error"
          sx={{ borderRadius: ".375rem", paddingY: ".75rem" }}
        >
          Sign Out
        </Button>
      </Box>
    </div>
  );
}

import { Button, Stack } from "@mui/material";
import DynamicStepper, {
  StepItemHandlers,
  StepperState,
} from "../../app/dynamic-stepper";
import GiftCardOrderReviewCard from "../../app/giftcard-order-review-card";
import PageTitle from "../../app/page-title";

const initGeneralSteps = [
  {
    label: "Review Order",
    renderBody: (
      stepper: StepperState,
      { handleNext, handleAccept, handleReject }: StepItemHandlers
    ) => {
      return (
        <>
          <GiftCardOrderReviewCard
            coverUri="https://via.placeholder.com/150"
            userId="32UD457"
            name="Steam"
            region="USA"
            amount={29.99}
            status="idle"
            createdAt="2024-10-13T12:34:56Z"
            rate={{
              value: 1600,
              from: "USD",
              to: "NGN",
            }}
            visualProofsOfPaymentUris={[]}
          />

          <Stack direction="row-reverse" spacing={2} sx={{ mt: 4, mb: 2 }}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={() => {
                handleAccept();
                handleNext();
              }}
            >
              Redeem
            </Button>
            <Button
              variant="outlined"
              fullWidth
              color="error"
              onClick={() => {
                handleReject();
                handleNext();
              }}
            >
              Reject
            </Button>
          </Stack>
        </>
      );
    },
  },
];

export default function CryptoOrdersItemPage() {
  return (
    <>
      <PageTitle text="Order Processing - Crypto" />
      <div className="py-4 px-4">
        <DynamicStepper
          acceptanceSteps={[
            ...initGeneralSteps,
            {
              label: "Verify Card Authenticity",
              renderBody: (
                { itemIndex, steps },
                {
                  handleBack,
                  handleNext,
                  handleAccept,
                  handleReject,
                }: StepItemHandlers
              ) => {
                return (
                  <>
                    <Stack direction="row" spacing={2} sx={{ mt: 4, mb: 2 }}>
                      <Button
                        variant="outlined"
                        disabled={itemIndex === 0}
                        onClick={handleBack}
                      >
                        Back
                      </Button>

                      <Button
                        variant="contained"
                        onClick={handleNext}
                        disableElevation
                      >
                        {itemIndex === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                    </Stack>
                  </>
                );
              },
            },
            {
              label: "Complete Payments",
              description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
            },
            {
              label: "Complete Order",
              description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
            },
          ]}
          rejectionSteps={[
            ...initGeneralSteps,
            {
              label: "Create an ad group",
              description:
                "An ad group contains one or more ads which target a shared set of keywords.",
            },
            {
              label: "Create an ad",
              description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
            },
          ]}
        />
      </div>
    </>
  );

  // Continue or Back+Next
  // I want to reject the order
}

/*
appealing, reviewing, processing, rejected
*/

/*

Review the order -> Accept, Reject 

on ACCEPT
1. confirm order with user receipt and all
2. calc/identify amount to send to the user 
    AND identify the account details (with copy functions) to send to
3. complete Order - make payments
    (Optional) upload payment receipt
    Complete Order


on REJECTED
1. Select from a list of reasons (rejected)
2. If (refuse appeal) -> Select from a list of reasons
2. Add optional additionl message
3. Complete Order


*/

/*

users can appeal rejected orders (the higher the level, the higher the appeal chances)

*/

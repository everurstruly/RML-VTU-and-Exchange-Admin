import { Button, Checkbox, FormControlLabel, Stack } from "@mui/material";
import DynamicStepper, {
  StepItemHandlers,
  StepperState,
} from "@/components/dynamic-stepper";
import GiftCardOrderReviewCard from "@/components/giftcard-order-review-card";
import PageTitle from "@/components/page-title";
import OrderRejectionReasonsList from "@/components/order-rejection-reasons-list";

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

export default function GiftcardOrdersItemPage() {
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
              label: "Select Rejection Reason",
              renderBody: (
                { itemIndex, steps },
                {
                  handleBack,
                  handleNext,
                  handleAccept,
                  handleReject,
                  resetDecision,
                }: StepItemHandlers
              ) => {
                return (
                  <>
                    <Stack spacing={1.5} sx={{ mt: 4, mb: 4 }}>
                      <OrderRejectionReasonsList
                      // onSelected={(reason) => {
                      //   handleAccept();
                      //   handleNext();
                      // }}
                      />
                    </Stack>

                    <div className="flex justify-end gap-x-4 items-center">
                      <Button
                        variant="outlined"
                        onClick={() => {
                          handleBack();
                          resetDecision();
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleNext();
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </>
                );
              },
            },
            {
              label: "Take Further Actions",
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
                  <Stack spacing={3} className="pt-4">
                    <div>
                      <h5 className="text-sm text-zinc-600 mb-2">
                        Start chat as{" "}
                        <span className="text-zinc-800">TechSupport</span>{" "}
                        (Optional)
                      </h5>
                      <textarea
                        placeholder="Write a message..."
                        rows={4}
                        style={{
                          width: "100%",
                          padding: "12px",
                          borderRadius: ".5rem",
                        }}
                      />
                    </div>

                    <FormControlLabel
                      control={<Checkbox sx={{ p: 0, mr: 1 }} color="error" />}
                      label="Deny Customer Support" // refuse appeal
                      className="!text-sm text-red-600"
                    />

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
                  </Stack>
                );
              },
            },
            {
              label: "Complete Order",
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

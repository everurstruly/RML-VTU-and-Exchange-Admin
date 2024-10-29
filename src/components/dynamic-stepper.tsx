import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Paper,
  StepContent,
  Stack,
} from "@mui/material";

export type StepItemHandlers = {
  handleAccept: () => void;
  handleBack: () => void;
  handleNext: () => void;
  handleReject: () => void;
  resetDecision: () => void;
};

export type StepperState = {
  steps: StepItem[];
  itemIndex: number;
};

type StepItem =
  | {
      label: string;
      renderBody: (
        stepper: StepperState,
        handlers: StepItemHandlers
      ) => JSX.Element;
      description?: undefined;
    }
  | {
      label: string;
      description: string;
      renderBody?: undefined;
    };

const DynamicStepper = ({
  acceptanceSteps,
  rejectionSteps,
}: {
  acceptanceSteps: StepItem[];
  rejectionSteps: StepItem[];
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [orderAccepted, setOrderAccepted] = useState<boolean | null>(null); // Track decision (null = no decision yet)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAccept = () => {
    setOrderAccepted(true);
  };

  const handleReject = () => {
    setOrderAccepted(false);
  };

  // const acceptanceSteps = ["Review Order", "Process Order", "Payment", "Confirm", "Done"];
  // const rejectionSteps = [
  //   "Review Order",
  //   "Reason for Rejection",
  //   "Submit Rejection",
  //   "Done",
  // ];

  const restDecisionSteps = () => {
    setOrderAccepted(null);
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  // Select acceptanceSteps based on user decision
  const currentSteps =
    orderAccepted === null
      ? acceptanceSteps
      : orderAccepted
        ? acceptanceSteps
        : rejectionSteps;

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {currentSteps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === currentSteps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {/* {step?.renderDescription ? (
                step.renderDescription({
                  handleAccept,
                  handleReject,
                  handleBack,
                  handleNext,
                })
              ) : step?.renderBody ? (
                step.renderBody({
                  handleAccept,
                  handleReject,
                  handleBack,
                  handleNext,
                }) */}
              {step?.renderBody ? (
                step.renderBody(
                  { itemIndex: index, steps: currentSteps },
                  {
                    handleAccept,
                    handleReject,
                    handleBack,
                    handleNext,
                    resetDecision: restDecisionSteps,
                  }
                )
              ) : (
                <>
                  <Typography>{step.description}</Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 4, mb: 2 }}>
                    <Button
                      variant="outlined"
                      disabled={index === 0}
                      onClick={handleBack}
                    >
                      Back
                    </Button>

                    <Button
                      variant="contained"
                      onClick={handleNext}
                      disableElevation
                    >
                      {index === currentSteps.length - 1
                        ? "Finish"
                        : "Continue"}
                    </Button>
                  </Stack>
                </>
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === currentSteps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default DynamicStepper;

/** External Dependencies */
import React from "react";

/** Internal Dependencies */
import Separator from "components/common/Separator";
import { usePhoneScreen, useStore } from "hooks";
import CloseButton from "./CloseButton";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";
import UndoButton from "./UndoButton";
import RedoButton from "./RedoButton";
import ImageDimensionsAndDisplayToggle from "./ImageDimensionsAndDisplayToggle";
import CanvasZooming from "./CanvasZooming";
import {
  StyledTopbar,
  StyledFlexCenterAlignedContainer,
  StyledHistoryButtonsWrapper,
} from "./Topbar.styled";
import BackButton from "./BackButton";

const Topbar = () => {
  const {
    config: { showBackButton, disableZooming },
  } = useStore();

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex" }}>
        <SaveButton />
      </div>

      <StyledTopbar reverseDirection={showBackButton} className="FIE_topbar">
        <StyledFlexCenterAlignedContainer
          reverseDirection={showBackButton}
          className="FIE_topbar-buttons-wrapper"
        >
          <StyledHistoryButtonsWrapper className="FIE_topbar-history-buttons">
            <ResetButton margin="0" />
            <UndoButton margin="0" />
            <RedoButton margin="0" />
          </StyledHistoryButtonsWrapper>
        </StyledFlexCenterAlignedContainer>
        <StyledFlexCenterAlignedContainer className="FIE_topbar-center-options">
          {!disableZooming && (
            <>
              <CanvasZooming />
            </>
          )}
          <CloseButton />
        </StyledFlexCenterAlignedContainer>
        {showBackButton ? <BackButton /> : <CloseButton />}
      </StyledTopbar>
    </div>
  );
};
export default Topbar;

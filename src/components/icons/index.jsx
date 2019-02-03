// @flow
import * as React from "react";

function BrickWallIcon() {
  return (
    <span className="icon-brickwall">
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
    </span>
  );
}

function CloseIcon() {
  return <span className="icon-close" />;
}
function ConcreteMixerIcon() {
  return (
    <span className="icon-concrete-mixer">
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
      <span className="path4" />
      <span className="path5" />
      <span className="path6" />
      <span className="path7" />
    </span>
  );
}
function CraneIcon() {
  return (
    <span className="icon-crane">
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
      <span className="path4" />
      <span className="path5" />
      <span className="path6" />
    </span>
  );
}
function EngineerIcon() {
  return (
    <span className="icon-engineer">
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
      <span className="path4" />
      <span className="path5" />
      <span className="path6" />
    </span>
  );
}
function LabIcon() {
  return (
    <span className="icon-lab">
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
      <span className="path4" />
      <span className="path5" />
      <span className="path6" />
      <span className="path7" />
      <span className="path8" />
      <span className="path9" />
      <span className="path10" />
      <span className="path11" />
      <span className="path12" />
      <span className="path13" />
      <span className="path14" />
      <span className="path15" />
      <span className="path16" />
      <span className="path17" />
      <span className="path18" />
      <span className="path19" />
      <span className="path20" />
      <span className="path21" />
      <span className="path22" />
      <span className="path23" />
    </span>
  );
}
function LetterIcon() {
  return (
    <span className="icon-mail">
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
      <span className="path4" />
      <span className="path5" />
      <span className="path6" />
      <span className="path7" />
      <span className="path8" />
      <span className="path9" />
      <span className="path10" />
    </span>
  );
}
function LinkedinIcon({ className }) {
  return (
    <span
      className={`icon-linkedin ${className !== undefined ? className : ""}`}
    >
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
      <span className="path4" />
    </span>
  );
}
function LinkedinBlackIcon({ className, ...rest }) {
  return (
    <span
      className={`icon-linkedin1 ${className !== undefined ? className : ""}`}
      {...rest}
    />
  );
}
function MenuIcon() {
  return <span className="icon-menu" />;
}
function PhoneIcon() {
  return <span className="icon-phone" />;
}
function LocationPinIcon() {
  return <span className="icon-location" />;
}
function EmailIcon() {
  return <span className="icon-envelop" />;
}
function PaintRollerIcon() {
  return (
    <span className="icon-paint-roller">
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
      <span className="path4" />
      <span className="path5" />
      <span className="path6" />
    </span>
  );
}
function TripodIcon() {
  return (
    <span className="icon-tripod">
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
      <span className="path4" />
      <span className="path5" />
      <span className="path6" />
    </span>
  );
}
function WheelbarrowIcon() {
  return (
    <span className="icon-wheelbarrow">
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
      <span className="path4" />
      <span className="path5" />
      <span className="path6" />
      <span className="path7" />
      <span className="path8" />
      <span className="path9" />
      <span className="path10" />
      <span className="path11" />
      <span className="path12" />
      <span className="path13" />
      <span className="path14" />
    </span>
  );
}

const icons = {
  brickWall: BrickWallIcon,
  close: CloseIcon,
  concreteMixer: ConcreteMixerIcon,
  crane: CraneIcon,
  email: EmailIcon,
  engineer: EngineerIcon,
  lab: LabIcon,
  letter: LetterIcon,
  location: LocationPinIcon,
  linkedin: LinkedinIcon,
  linkedinBlack: LinkedinBlackIcon,
  menu: MenuIcon,
  paintRoller: PaintRollerIcon,
  phone: PhoneIcon,
  tripod: TripodIcon,
  wheelbarrow: WheelbarrowIcon
};

// https://flow.org/en/docs/types/utilities/#toc-keys
export default function getIcon(name: string) {
  return icons[name] || null;
}

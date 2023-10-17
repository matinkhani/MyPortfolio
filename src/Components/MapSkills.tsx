import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiJss } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoPwa } from "react-icons/io5";
import { BsGit } from "react-icons/bs";
import { SiAxios } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { SkillDIV1, SkillDIV2, SkillDIV3, Skills1 } from "../Styled-Components/StyledSkills";

const IconsTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function MapSkills() {
  return (
    <>
      <SkillDIV1>
        <IconsTooltip TransitionComponent={Zoom} title="HTML">
          <Skills1>
            <AiFillHtml5 />
          </Skills1>
        </IconsTooltip>

        <IconsTooltip TransitionComponent={Zoom} title="CSS">
          <Skills1>
            <FaCss3 />
          </Skills1>
        </IconsTooltip>

        <IconsTooltip TransitionComponent={Zoom} title="JavaScript">
          <Skills1>
            <SiJavascript />
          </Skills1>
        </IconsTooltip>

        <IconsTooltip TransitionComponent={Zoom} title="React JS">
          <Skills1>
            <FaReact />
          </Skills1>
        </IconsTooltip>

        <IconsTooltip TransitionComponent={Zoom} title="TypeScript">
          <Skills1>
            <SiTypescript />
          </Skills1>
        </IconsTooltip>
      </SkillDIV1>

      <SkillDIV2>
        <IconsTooltip TransitionComponent={Zoom} title="Redux">
          <Skills1>
            <SiRedux />
          </Skills1>
        </IconsTooltip>

        <IconsTooltip TransitionComponent={Zoom} title="Next JS">
          <Skills1>
            <SiNextdotjs />
          </Skills1>
        </IconsTooltip>

        <IconsTooltip TransitionComponent={Zoom} title="Git">
          <Skills1>
            <BsGit />
          </Skills1>
        </IconsTooltip>

        <IconsTooltip TransitionComponent={Zoom} title="Axios">
          <Skills1>
            <SiAxios />
          </Skills1>
        </IconsTooltip>

        <IconsTooltip TransitionComponent={Zoom} title="PWA">
          <Skills1>
            <IoLogoPwa />
          </Skills1>
        </IconsTooltip>
      </SkillDIV2>

      <SkillDIV3>
        <IconsTooltip TransitionComponent={Zoom} title="Material UI">
          <Skills1>
            <SiMui />
          </Skills1>
        </IconsTooltip>

        <IconsTooltip TransitionComponent={Zoom} title="Styled Components">
          <Skills1>
            <SiStyledcomponents />
          </Skills1>
        </IconsTooltip>

        <IconsTooltip TransitionComponent={Zoom} title="Tailwind CSS">
          <Skills1>
            <SiTailwindcss />
          </Skills1>
        </IconsTooltip>

        <IconsTooltip TransitionComponent={Zoom} title="JSS">
          <Skills1>
            <SiJss />
          </Skills1>
        </IconsTooltip>

        <IconsTooltip TransitionComponent={Zoom} title="Scss - Sass">
          <Skills1>
            <FaSass />
          </Skills1>
        </IconsTooltip>
      </SkillDIV3>
    </>
  );
}

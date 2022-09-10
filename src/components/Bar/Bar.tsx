import styled from "styled-components";
import { imgBasePath } from "../../App.utils";

export const Bar = () => {
  return (
    <Box>
      <LogoBox>
        <Logo src={imgBasePath + "logo.svg"} />
        <div />
      </LogoBox>
      <BottomBox>
        <ThemeBox>
          <ThemeSwitch src={imgBasePath + "icon-moon.svg"} />
        </ThemeBox>
        <ProfileBox>
          <ProfilePicture src={imgBasePath + "image-avatar.jpg"} />
        </ProfileBox>
      </BottomBox>
    </Box>
  );
};

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 6.5rem;
  background-color: #373b53;
  border-radius: 0 20px 20px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const LogoBox = styled.div`
  height: 6.5rem;
  width: 100%;
  background-color: #7c5dfa;
  position: relative;
  border-radius: 0 20px 20px 0;
  display: flex;

  div {
    height: 50%;
    width: 100%;
    background-color: #9277ff;
    border-radius: 20px 0 20px 0;
    margin-top: auto;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 37px;
  transform: translate(-50%, -50%);
`;

const BottomBox = styled.div`
  height: 12rem;
`;

const ThemeBox = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeSwitch = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  border-top: 1px solid #494e6e;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

import React, {
  useContext,
  useState,
} from "react";

import {
  Box,
  BoxChild,
  Button,
  Input,
  styled,
  Theme,
  THEME,
  ThemeContext,
  Typography,
} from "@floorplan/components";

const Contianer = styled(Box)`
  padding: 24px;
  width: 100%;
  height: 100%;
`;

const Shell = styled(Box)`
  background: ${({ theme }) =>
    theme[
      THEME.COLORS[theme.mode].MUTED
    ]};
  width: 100%;
  height: 100%;
`;

const Card = styled(BoxChild)`
  height: 50px;
  width: 100%;
  border-radius: 4px;
  padding: 12px;
  elevation: 2;
  box-shadow: 0px 2px 2px #33333333;
  background: ${({ theme }) =>
    theme[
      THEME.COLORS[theme.mode].BACKGROUND
    ]};
`;

const ThemeToggle = (props: any) => {
  const { mode, setMode } = useContext(
    ThemeContext
  );

  return (
    <Button
      onClick={() => {
        if (mode === THEME.MODE.LIGHT) {
          return setMode(
            THEME.MODE.DARK
          );
        }
        return setMode(
          THEME.MODE.LIGHT
        );
      }}
      {...props}
    >
      {mode}
    </Button>
  );
};

export default function App() {
  const [value, setValue] = useState(
    ""
  );
  return (
    <Theme>
      <Shell flexDirection="column">
        <Contianer
          justifyContent="space-around"
          flexFlow="column"
        >
          <Box>
            <ThemeToggle
            // color={
            //   THEME.COLORS.PRIMARY
            // }
            />
            <ThemeToggle
              variant={
                Button.VARIANTS.OUTLINE
              }
              // color={
              //   THEME.COLORS.SECONDARY
              // }
            />
            <ThemeToggle
              variant={
                Button.VARIANTS.TEXT
              }
              color={THEME.COLORS.ERROR}
            />
          </Box>

          <Card>
            <Typography>
              This is just an exampke of
              a card.
            </Typography>
          </Card>

          <Box
            justifyContent="space-around"
            flexFlow="column"
          >
            <Typography>
              {value}
            </Typography>
            <Input
              value={value}
              onChange={(event:any) =>
                setValue(event.target.value)
              }
            />
            <Input
              color={
                THEME.COLORS.SECONDARY
              }
            />
            <Input
              color={THEME.COLORS.ERROR}
            />
          </Box>
        </Contianer>
      </Shell>
    </Theme>
  );
}

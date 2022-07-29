/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import WhyMDX from "../sections/why"

const Why = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="pink"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [2],
            gridTemplateColumns: [`1fr`, `2fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <WhyMDX />
          {/* <img src={"https://github.com/anowens/character-labs-sprint-1-integration/blob/main/static/Group%2030.png"}/> */}
        </div>
      </Inner>
    </Content>
  </div>
)

export default Why

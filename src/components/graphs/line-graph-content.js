import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import { animated } from "react-spring"

import StackedPlot from "./stacked-plot"
import LinePlot from "./line-plot"
import BarPlot from "./bar-plot"
import StackedAreas from "./stacked-areas"

import { useGraphZoomPan } from "./zoom-pan-context"

const LineGraphContent = ({
  parsedData,
  linePlotColors,
  stackColors,
  barPlotKeys,
  barPlotColors,
  areaStack,
}) => {
  const { viewBox, viewportWidth, viewportHeight } = useGraphZoomPan()

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${viewportWidth} ${viewportHeight}`}
      style={{ transform: "scaleY(-1)" }}
      tw="overflow-hidden pointer-events-none"
    >
      <animated.svg
        width={"100%"}
        preserveAspectRatio="none"
        viewBox={viewBox}
        tw="overflow-visible absolute inset-0 pointer-events-none"
      >
        <LinePlot
          linePlotData={parsedData.linePlotData}
          linePlotColors={linePlotColors}
        />
        <BarPlot
          parsedData={parsedData}
          barPlotKeys={barPlotKeys}
          barPlotColors={barPlotColors}
        />
        {areaStack ? (
          <StackedAreas
            stackAreas={parsedData.stackAreas}
            stackColors={stackColors}
          />
        ) : (
          <StackedPlot parsedData={parsedData} stackColors={stackColors} />
        )}
      </animated.svg>
    </svg>
  )
}

LineGraphContent.propTypes = {
  parsedData: PropTypes.shape().isRequired,
}

export default React.memo(LineGraphContent)

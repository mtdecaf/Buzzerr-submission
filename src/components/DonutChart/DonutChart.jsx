import React from "react";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./DonutChart.scss";

// function for drawing the chart
const drawChart = (element, data) => {
  const colors = ["#05BBD2", "#2070C4", "#EB80F1", "#F5C842", "#37D400"];
  const boxSize = 500;

  d3.select(element).select("svg").remove(); // Remove the old svg
  // Create new svg
  const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
    .append("g")
    .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

  const arcGenerator = d3
    .arc()
    .cornerRadius(10)
    .padAngle(0.02)
    .innerRadius(200)
    .outerRadius(250);

  console.log(data);
  // map out all the properties of the data
  const pieGenerator = d3.pie().value((d) => d.value);

  var color = d3.scaleOrdinal()
  .domain(data)
  .range(["#4B7BEC", "#F7B731", "#EB3B5A", "#FD9D4F"])

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append("path")
    .attr("d", arcGenerator)
    // .style("fill", (d, i) => colors[i % data.length])
    .attr('fill', function(d){ return(color(d.data.label)) })
    // create a click event handler for each slice of the pie
    .on("click", (d, i) => {
      console.log(i.data.label);
    })
    // create a load in animation
    .transition()
    .duration(1000)
    .attrTween("d", function (d) {
      const i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
      return function (t) {
        d.endAngle = i(t);
        return arcGenerator(d);
      };
    });
};

//   function for displaying the chart
const DonutChart = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      drawChart(ref.current, data);
    }
  }, [ref]);

  return (
    <>
      <div className="donut-chart" ref={ref} />
    </>
  );
};

export default DonutChart;
